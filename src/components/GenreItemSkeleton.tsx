import { HStack, Skeleton, SkeletonText } from "@chakra-ui/react";

const GenreItemSkeleton = () => {
  return (
    <HStack gap="3" paddingX="2" paddingY="2">
      <Skeleton boxSize="10" borderRadius="md" />
      <SkeletonText noOfLines={1} width="28" />
    </HStack>
  );
};

export default GenreItemSkeleton;
