import type { Genre } from "@/hooks/useGenres";
import { Button, HStack, Image, Text } from "@chakra-ui/react";
import { getCroppedURL } from "../services/imageURL";

interface Props {
  genre: Genre;
}

const GenreItem = ({ genre }: Props) => {
  const imageUrl = genre.image || genre.background_image || genre.image_background;

  return (
    <Button
      as="li"
      variant="ghost"
      justifyContent="flex-start"
      height="auto"
      paddingX="2"
      paddingY="2"
      borderRadius="md"
      width="100%"
    >
      <HStack gap="3" width="100%">
        <Image
          src={imageUrl ? getCroppedURL(imageUrl) : undefined}
          alt={genre.name}
          boxSize="10"
          borderRadius="md"
          objectFit="cover"
        />
        <Text fontWeight="medium" lineClamp="1">
          {genre.name}
        </Text>
      </HStack>
    </Button>
  );
};

export default GenreItem;
