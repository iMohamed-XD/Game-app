import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { ColorModeButton } from "./ui/color-mode";

const NavBar = () => {
  return (
    <HStack justify="space-between" px={4} py={2}>
      <HStack>
        <Image src={logo} alt="Logo" boxSize="60px" />
        <Text>Nav Bar</Text>
      </HStack>

      <ColorModeButton />
    </HStack>
  );
};

export default NavBar;
