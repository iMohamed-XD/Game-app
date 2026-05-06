import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import type { Genre } from "./hooks/useGenres";
import type { Platform } from "./hooks/useGames";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  search: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "250px 1fr",
        }}
      >
        <GridItem area={`nav`}>
          <NavBar onSearch={(search) => setGameQuery({...gameQuery, search})} />
        </GridItem>
        <GridItem area={`aside`} display={{ base: "none", lg: "block" }}>
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
        </GridItem>
        <GridItem area={`main`}>
          <GameGrid
            gameQuery={gameQuery}
            onSelectPlatform={(platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
            onSelectSortOrder={(sortOrder) =>
              setGameQuery({ ...gameQuery, sortOrder })
            }
          />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
