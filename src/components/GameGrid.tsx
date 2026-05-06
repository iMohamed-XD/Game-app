import { Text } from '@chakra-ui/react';
import useGames, { type Platform } from '@/hooks/useGames';
import GameCard from './GameCard';
import { SimpleGrid } from '@chakra-ui/react/simple-grid';
import GameCardSkeleton from './GameCardSkeleton';
import type { Genre } from "@/hooks/useGenres";

interface Props {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
}

const GameGrid = ({ selectedGenre, selectedPlatform }: Props) => {
  const { data, error, loading } = useGames(selectedGenre, selectedPlatform);
    const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
    {error && <Text>{error}</Text>}
    <SimpleGrid columns={{ base: 1, lg: 3 }} padding={5}>
        {loading &&
          skeletons.map((skeleton) => (
            <GameCardSkeleton key={skeleton} />
          ))}
        {data.map((game) => (
        <GameCard key={game.id} game={game} />
    ))}
    </SimpleGrid>
    </>
  )
}

export default GameGrid
