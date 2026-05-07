import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import { SimpleGrid } from "@chakra-ui/react/simple-grid";
import GameCardSkeleton from "./GameCardSkeleton";
import type { GameQuery } from "@/App";
import useGames, { type Platform } from "@/hooks/useGames";
import PlatformSelector from "./PlatformSelector";
import SortSelector from "./SortSelector";

interface Props {
  gameQuery: GameQuery;
  onSelectPlatform: (platform: Platform) => void;
  onSelectSortOrder: (sortOrder: string) => void;
}

const GameGrid = ({
  gameQuery,
  onSelectPlatform,
  onSelectSortOrder,
}: Props) => {
  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`.trim();
  if (error) return <Text>{error.message}</Text>;
  return (
    <>
      <Flex
        align={{ base: "flex-start", md: "center" }}
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        gap="4"
        paddingX="5"
        paddingTop="5"
      >
        <Box>
          <Text
            color="gray.500"
            fontSize="sm"
            fontWeight="semibold"
            letterSpacing="wide"
            textTransform="uppercase"
          >
            Explore
          </Text>
          <Heading
            as="h2"
            fontSize={{ base: "3xl", md: "4xl" }}
            fontWeight="bold"
            lineHeight="1.1"
            marginTop="1"
          >
            {heading}
          </Heading>
        </Box>

        <Flex gap="3" wrap="wrap">
          <PlatformSelector
            selectedPlatform={gameQuery.platform}
            onSelect={onSelectPlatform}
          />
          <SortSelector
            selectedSortOrder={gameQuery.sortOrder}
            onSelectSortOrder={onSelectSortOrder}
          />
        </Flex>
      </Flex>

      <SimpleGrid columns={{ base: 1, lg: 3 }} padding={5}>
        {isLoading &&
          skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
        {data?.pages.map((page) =>
          page.results.map((game) => <GameCard key={game.id} game={game} />),
        )}
      </SimpleGrid>
      {hasNextPage && (
        <Button onClick={() => fetchNextPage()} loading={isFetchingNextPage}>
          Load More
        </Button>
      )}
    </>
  );
};

export default GameGrid;
