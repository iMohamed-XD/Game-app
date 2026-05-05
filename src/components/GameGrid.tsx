import { Text } from '@chakra-ui/react';
import useGames from '@/hooks/useGames';
import GameCard from './GameCard';
import { SimpleGrid } from '@chakra-ui/react/simple-grid';



const GameGrid = () => {
    const { games, error } = useGames();
  return (
    <>
    {error && <Text>{error}</Text>}
    <SimpleGrid columns={{ base: 1, lg: 3 }} padding={5}>
        {games.map((game) => (
        <GameCard key={game.id} game={game} />
    ))}
    </SimpleGrid>
    </>
  )
}

export default GameGrid