import { useQuery } from "@apollo/client";
import { Chip, Toolbar } from "@mui/material";
import { GET_SELECTED_PLANETS } from "./query";
import { GetSelectedPlanets } from "./types";

const PlanetHeader = () => {
  const { data: selectedPlanets } =
    useQuery<GetSelectedPlanets>(GET_SELECTED_PLANETS);
  return (
    <Toolbar>
      Selected Items:{" "}
      {selectedPlanets?.selectedPlanets.planets.map((planet) => (
        <Chip key={planet.id} label={planet.name} />
      ))}
    </Toolbar>
  );
};

export default PlanetHeader;
