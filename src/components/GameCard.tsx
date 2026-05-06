import type { Game } from "@/hooks/useGames";
import { Badge, Card, HStack, Image, Text } from "@chakra-ui/react";
import GameCardContainer from "./GameCardContainer";
import PlatformIconList from "./PlatformIconList";
import Metacritic from "./metacritic";
import { getCroppedURL } from "../services/imageURL";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <GameCardContainer interactive>
      <Image
        src={getCroppedURL(game.background_image)}
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
        <HStack justify="space-between">
          <HStack gap="2" color="gray.500">
            {game.parent_platforms.map(({ platform }) => (
              <PlatformIconList key={platform.id} platform={platform} />
            ))}
          </HStack>

          <Metacritic metacritic={game.metacritic} />
        </HStack>

        <HStack gap="2" pt="1" wrap="wrap">
          <Badge variant="outline">{game.reviews_count} reviews</Badge>
          <Badge variant="outline">Top {game.rating_top}</Badge>
        </HStack>
      </Card.Body>
    </GameCardContainer>
  );
};

export default GameCard;
