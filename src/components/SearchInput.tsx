import { Box, Input } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
    onSearch: (search: string) => void;
}

const SearchInput = ({onSearch}: Props) => {
    const ref = useRef<HTMLInputElement>(null);
  return (
    <form style={{ width: '100%' }} onSubmit={(event) => {
        event.preventDefault();
        if(ref.current?.value){
            onSearch(ref.current.value);
        }
    }}>
        <Box position="relative" width="100%" maxW="600px">
          <Box
            aria-hidden="true"
            color="gray.500"
            left="4"
            position="absolute"
            top="50%"
            transform="translateY(-50%)"
            zIndex="1"
          >
            <BsSearch />
          </Box>
          <Input
          ref={ref}
            borderRadius="full"
            paddingLeft="11"
            placeholder="Search games..."
            size="lg"
            variant="subtle"
          />
        </Box>
    </form>
  );
};

export default SearchInput;
