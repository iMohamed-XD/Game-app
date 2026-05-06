import { Card } from "@chakra-ui/react";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  interactive?: boolean;
}

const GameCardContainer = ({ children, interactive = false }: Props) => {
  return (
    <Card.Root
      overflow="hidden"
      borderRadius="10"
      borderWidth="1px"
      margin={5}
      transition={interactive ? "transform 0.2s ease, box-shadow 0.2s ease" : undefined}
      _hover={
        interactive
          ? {
              transform: "translateY(-4px)",
              boxShadow: "lg",
            }
          : undefined
      }
    >
      {children}
    </Card.Root>
  );
};

export default GameCardContainer;
