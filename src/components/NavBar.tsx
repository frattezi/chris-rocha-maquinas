import { SearchIcon } from "@chakra-ui/icons";
import SocialIcons from "../icons/Social";
import LogoIcon from "../icons/Logo";
import {
  Button,
  Flex,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";

const SearchInput = () => (
  <InputGroup size="md" maxW="30%">
    <Input pr="4.5rem" placeholder="Enter password" />

    <InputRightElement width="4.5rem">
      <SearchIcon />
    </InputRightElement>
  </InputGroup>
);

const MenuItems = () => (
  <HStack>
    <Button variant="ghost" size="sm">
      Produtos
    </Button>
    <Button variant="ghost" size="sm">
      Sobre
    </Button>
    <Button variant="ghost" size="sm">
      Contato
    </Button>
  </HStack>
);

const MenuIcons = () => (
  <HStack>
    <SocialIcons.Instagram />
    <SocialIcons.WhatsApp />
    <SocialIcons.FaceBook />
  </HStack>
);

export const NavBar = () => (
  // MenuIcons
  <HStack position="sticky" p={4} justifyContent="space-between" w="full">
    <LogoIcon w="18em" h="3em" />
    <SearchInput />
    <MenuItems />
    <MenuIcons />
  </HStack>
);
