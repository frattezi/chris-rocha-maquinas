import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  HStack,
  IconButton,
  Show,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRef } from "react";
import { AiOutlineMenu } from "react-icons/ai";

import SearchInput from "@components/SearchInput";

import { LgLogo, SmLogo } from "@icons/Logo";

const MenuItems = () => (
  <Flex flexDir={{ base: "column", sm: "row" }} gap={{ base: 4, sm: 0 }}>
    <Link href="/search" aria-label="Página de produtos">
      <Button variant="ghost" size="sm">
        Produtos
      </Button>
    </Link>
    <Button variant="ghost" size="sm">
      Sobre
    </Button>
    {/* Make this scrol to footer element   */}
    <Link href="/contact" aria-label="Página de contato">
      <Button variant="ghost" size="sm">
        Contato
      </Button>
    </Link>
  </Flex>
);

const LgScreenNavBar = () => (
  <HStack justifyContent="space-between" px={16} py={6}>
    <Link href="/">
      <LgLogo w={56} h={12} />
    </Link>
    <SearchInput />
    <MenuItems />
  </HStack>
);

const SmScreenNavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      <HStack justifyContent="space-between" px={6} py={2}>
        <IconButton
          icon={<AiOutlineMenu />}
          aria-label={"Menu"}
          variant="solid"
          background="white"
          color="primaryBlue400"
          onClick={onOpen}
        />

        <SearchInput />
      </HStack>

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>

          <DrawerBody>
            <VStack gap={8}>
              <MenuItems />
              <Link href="/">
                <SmLogo w={40} h={12} />
              </Link>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export function NavBar() {
  return (
    <>
      <Show above="lg">
        <LgScreenNavBar />
      </Show>
      <Show below="lg">
        <SmScreenNavBar />
      </Show>
    </>
  );
}
