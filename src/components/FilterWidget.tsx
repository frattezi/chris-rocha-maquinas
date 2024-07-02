import { Box, Show } from "@chakra-ui/react";

import { SearchIcon } from "@chakra-ui/icons";

export default function SearchWidget() {
  return (
    <Show below="md">
      <Box
        position="fixed"
        aria-label="Filtrar busca"
        right={34}
        bottom={34}
        bg="gray.100"
        color="white"
        fontSize="40px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="40px"
        height="40px"
        padding="35px"
        borderRadius="50%"
        boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}
      >
        <SearchIcon color="black" />
      </Box>
    </Show>
  );
}
