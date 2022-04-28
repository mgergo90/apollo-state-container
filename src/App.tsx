import { Box } from "@mui/material";
import PlanetHeader from "./PlanetHeader";
import PlanetTable from "./PlanetTable";

function App() {
  return (
    <div className="App">
      <Box
        maxWidth={1000}
        sx={{
          margin: "auto",
        }}
      >
        <PlanetHeader />
        <PlanetTable />
      </Box>
    </div>
  );
}

export default App;
