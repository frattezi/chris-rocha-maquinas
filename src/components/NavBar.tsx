import {
  Button,
  HStack,
  Icon,
  IconButton,
  Show,
  useDisclosure,
} from '@chakra-ui/react'
import { useRef } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { PiMagnifyingGlass } from 'react-icons/pi'

import SearchInput from '@components/SearchInput'

import { LgLogo, SmLogo } from '@icons/Logo'
import SocialIcons from '@icons/Social'

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
)

const MenuIcons = () => (
  <HStack>
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
  const firstField = useRef()

  return (
    <HStack justifyContent="space-between" px={6} py={2}>
      <IconButton
        icon={<AiOutlineMenu />}
        aria-label={'Menu'}
        variant="solid"
        background="white"
        color="#5A60FF"
      />
      <SmLogo w={44} h={12} />
      <Icon as={PiMagnifyingGlass} />
    </HStack>
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
