import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem  area={`nav`}>
          <NavBar />
        </GridItem>
        <GridItem
          bg={"lightgray"}
          area={`aside`}
          display={{ base: "none", lg: "block" }}
        >
          aside
        </GridItem>
        <GridItem bg={"dodgerblue"} area={`main`}>
          main
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
