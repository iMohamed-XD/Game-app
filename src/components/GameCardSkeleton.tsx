
import { Card, HStack, Skeleton, SkeletonText } from "@chakra-ui/react";
import GameCardContainer from "./GameCardContainer";

const GameCardSkeleton = () => {
  return (
    <GameCardContainer>
      <Skeleton aspectRatio={16 / 9} />
      <Card.Body gap="3">
        <HStack justify="space-between" align="start">
          <Skeleton height="6" width="70%" />
          <Skeleton height="5" width="10" borderRadius="md" />
        </HStack>

        <HStack justify="space-between">
          <HStack gap="2">
            <Skeleton height="4" width="4" borderRadius="full" />
            <Skeleton height="4" width="4" borderRadius="full" />
            <Skeleton height="4" width="4" borderRadius="full" />
          </HStack>
          <Skeleton height="5" width="9" borderRadius="md" />
        </HStack>

        <SkeletonText noOfLines={3} gap="2" />

        <HStack gap="2" pt="1">
          <Skeleton height="5" width="20" borderRadius="md" />
          <Skeleton height="5" width="14" borderRadius="md" />
        </HStack>
      </Card.Body>
    </GameCardContainer>
  );
};

export default GameCardSkeleton;
