import type { Game } from '@/hooks/useGames';
import { Badge, Card, HStack, Image, Text } from "@chakra-ui/react"

interface Props {
    game: Game;
}

const GameCard = ({game}: Props) => {
  return (
    <Card.Root
      overflow="hidden"
      borderRadius="10"
      borderWidth="1px"
      margin={5}
      transition="transform 0.2s ease, box-shadow 0.2s ease"
      _hover={{
        transform: "translateY(-4px)",
        boxShadow: "lg",
      }}
    >
      <Image
        src={game.background_image}
        alt={game.name}
        aspectRatio={16 / 9}
        objectFit="cover"
      />
      <Card.Body gap="3">
        <HStack justify="space-between" align="start">
          <Card.Title fontSize="xl" lineHeight="short">
            {game.name}
          </Card.Title>
          <Badge colorPalette="green" variant="subtle">
            {game.rating}
          </Badge>
        </HStack>

        <Card.Description>
          <Text lineClamp="3" color="fg.muted">
            {game.description || "No description available."}
          </Text>
        </Card.Description>

        <HStack gap="2" pt="1" wrap="wrap">
          <Badge variant="outline">{game.reviews_count} reviews</Badge>
          <Badge variant="outline">Top {game.rating_top}</Badge>
        </HStack>
      </Card.Body>
    </Card.Root>
  )
}

export default GameCard
