import { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useApolloClient, useLazyQuery } from "@apollo/client";
import {
  getAllPlanets,
  getAllPlanets_allPlanets_planets as Planet,
  GetSelectedPlanets,
} from "./types";
import { Checkbox, FormControlLabel } from "@mui/material";
import immer from "immer";

import { GET_PLANETS, GET_SELECTED_PLANETS } from "./query";

const PlanetTable = () => {
  const client = useApolloClient();
  const [planets, setPlanets] = useState<Planet[]>([]);
  const [getAllPlanets] = useLazyQuery<getAllPlanets>(GET_PLANETS, {
    onCompleted: (data) => {
      if (data.allPlanets?.planets?.length) {
        setPlanets(data.allPlanets.planets as Planet[]);
      } else {
        setPlanets([]);
      }
    },
  });

  useEffect(() => {
    getAllPlanets();
  }, [getAllPlanets]);

  const toggleChecked = (checked: boolean, selectedPlanet: Planet) => {
    const selectedPlanets = client.readQuery<GetSelectedPlanets>({
      query: GET_SELECTED_PLANETS,
    }) || {
      selectedPlanets: {
        planets: [],
      },
    };

    client.writeQuery<GetSelectedPlanets>({
      query: GET_SELECTED_PLANETS,
      data: immer(selectedPlanets, (draft) => {
        draft.selectedPlanets.planets =
          selectedPlanets?.selectedPlanets.planets.filter(
            (planet) => planet.id !== selectedPlanet.id
          ) || [];
        if (checked) {
          draft?.selectedPlanets.planets?.push(selectedPlanet);
        }
      }),
    });
  };
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Populaton</TableCell>
            <TableCell align="right">Climates</TableCell>
            <TableCell align="right">Terrains</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {planets.map((planet) => (
            <TableRow
              key={planet?.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={(_, checked) => toggleChecked(checked, planet)}
                    />
                  }
                  label={planet?.name}
                />
              </TableCell>
              <TableCell align="right">{planet?.population}</TableCell>
              <TableCell align="right">{planet?.climates}</TableCell>
              <TableCell align="right">{planet?.terrains}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PlanetTable;
