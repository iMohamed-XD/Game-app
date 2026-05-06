import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { ColorModeButton } from "./ui/color-mode";
import SearchInput from "./SearchInput";

interface Props {
    onSearch: (search: string) => void;
}

const NavBar = ({onSearch}: Props) => {
  return (
    <HStack justify="space-between" px={4} py={2}>
      <HStack>
        <Image src={logo} alt="Logo" boxSize="60px" />
        <SearchInput onSearch={onSearch}/>
      </HStack>

      <ColorModeButton />
    </HStack>
  );
};

export default NavBar;
