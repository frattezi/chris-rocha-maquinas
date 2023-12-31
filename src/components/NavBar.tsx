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
  Icon,
  IconButton,
  Show,
  VStack,
  useDisclosure,
} from '@chakra-ui/react'
import { useRef } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { PiMagnifyingGlass } from 'react-icons/pi'

import SearchInput from '@components/SearchInput'

import { LgLogo, SmLogo } from '@icons/Logo'
import SocialIcons from '@icons/Social'

const MenuItems = () => (
  <Flex flexDir={{ base: 'column', sm: 'row' }} gap={{ base: 4, sm: 0 }}>
    <Button variant="ghost" size="sm">
      Produtos
    </Button>
    <Button variant="ghost" size="sm">
      Sobre
    </Button>
    <Button variant="ghost" size="sm">
      Contato
    </Button>
  </Flex>
)

const MenuIcons = () => (
  <HStack gap={8}>
    <SocialIcons.Instagram />
    <SocialIcons.WhatsApp />
    <SocialIcons.FaceBook />
  </HStack>
)

const LgScreenNavBar = () => (
  <HStack justifyContent="space-between" px={16} py={6}>
    <LgLogo w={56} h={12} />
    <SearchInput />
    <MenuItems />
    <MenuIcons />
  </HStack>
)

const SmScreenNavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()

  return (
    <>
      <HStack justifyContent="space-between" px={6} py={2}>
        <Icon as={PiMagnifyingGlass} />
        <SmLogo w={44} h={12} />
        <IconButton
          icon={<AiOutlineMenu />}
          aria-label={'Menu'}
          variant="solid"
          background="white"
          color="#5A60FF"
          onClick={onOpen}
        />
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
              <MenuIcons />
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export function NavBar() {
  return (
    <>
      <Show above="sm">
        <LgScreenNavBar />
      </Show>
      <Show below="sm">
        <SmScreenNavBar />
      </Show>
    </>
  )
}
