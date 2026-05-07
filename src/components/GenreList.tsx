import useGenres from "@/hooks/useGenres";
import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import GenreItem from "./GenreItem";
import GenreItemSkeleton from "./GenreItemSkeleton";
import type { Genre } from "@/hooks/useGenres";

interface Props {
  selectedGenre: Genre | null;
  onSelectGenre: (genre: Genre) => void;
}
const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, error, isLoading } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <Box paddingX="5" paddingY="4">
      <Heading as="h2" fontSize="2xl" marginBottom="3">
        Genres
      </Heading>

      {error && <Text color="red.400">{error.message}</Text>}

      <VStack
        as="ul"
        align="stretch"
        gap="1"
        listStyleType="none"
        margin="0"
        padding="0"
      >
        {isLoading &&
          skeletons.map((skeleton) => <GenreItemSkeleton key={skeleton} />)}

        {data?.map((genre) => (
          <GenreItem
            key={genre.id}
            genre={genre}
            selected={genre.id === selectedGenre?.id}
            onClick={() => onSelectGenre(genre)}
          />
        ))}
      </VStack>
    </Box>
  );
};

export default GenreList;
