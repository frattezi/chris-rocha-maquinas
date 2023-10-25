import {
  Button,
  Container,
  Flex,
  HStack,
  Heading,
  VStack,
} from '@chakra-ui/react'
import { MdTune } from 'react-icons/md'

import SearchInput from '@components/SearchInput'

import Card from './Card'

export default function CardsSection() {
  return (
    <Flex w="100vw" background="white" justifyContent="center" gap={0} p={16}>
      <VStack w="100%" alignItems="flex-start" gap={4}>
        <Heading>Encontre sua nova máquina</Heading>

        <HStack gap={4}>
          <Button
            color="#5A60FF"
            borderColor="#5A60FF"
            px={4}
            py={2}
            borderRadius={36}
            rightIcon={<MdTune />}
            aria-label={''}
            variant="outline"
          >
            Filtrar
          </Button>
          <SearchInput />
        </HStack>

        <Flex flexWrap="wrap" gap={8} pt={8} justifyContent="center">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
            <Card key={item} />
          ))}
        </Flex>
      </VStack>
    </Flex>
  )
}
