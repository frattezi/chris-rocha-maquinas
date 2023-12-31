import {
  Button,
  Checkbox,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  HStack,
  Heading,
  Hide,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Show,
  Text,
  VStack,
  useDisclosure,
} from '@chakra-ui/react'
import { MdTune } from 'react-icons/md'

import Card from './Card'
import { filters } from './staticData'

function Filters() {
  return (
    <VStack
      flex={1}
      gap={0}
      borderRadius="8px"
      boxShadow={{ base: 'none', md: '2px 2px 10px 2px rgba(0,0,0,0.2)' }}
    >
      <Hide below="md">
        <HStack
          backgroundColor="white"
          borderRadius="8px"
          padding="8px 16px"
          justifyContent="flex-start"
          w="full"
        >
          <Text color="#5A60FF" as="b">
            Filtrar
          </Text>
          <MdTune color="#5A60FF" />
        </HStack>
      </Hide>

      <VStack backgroundColor="#F8F8FB" w="full" h="full" pt={4} gap={4} px={4}>
        {filters.map((filter) => (
          <FormControl>
            <VStack gap={4} alignItems="flex-start">
              <FormLabel mb={0}>{filter.label}</FormLabel>

              <Grid gridTemplateColumns="1fr 1fr" gridGap={3} w="full">
                {filter.items.map((item) => (
                  <GridItem>
                    <Checkbox>{item}</Checkbox>
                  </GridItem>
                ))}
              </Grid>
            </VStack>
            <Divider py={2} />
          </FormControl>
        ))}
      </VStack>
    </VStack>
  )
}
export default function CardsSection() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Filters</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Filters />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Flex w="100vw" justifyContent="center" gap={0} p={16}>
        <VStack w="100%" alignItems="flex-start" gap={8}>
          <Heading>Encontre sua nova máquina</Heading>

          <Flex
            flexDir={{ base: 'column', md: 'row' }}
            w="full"
            gap={8}
            alignItems="flex-start"
          >
            <Hide below="md">
              <Filters />
            </Hide>

            <Show below="md">
              <Button
                variant="outline"
                color="#5A60FF"
                borderRadius="16px"
                borderColor="#5A60FF"
                rightIcon={<MdTune />}
                onClick={onOpen}
              >
                Filtrar
              </Button>
            </Show>
            <Flex
              flexWrap="wrap"
              gap={8}
              pt={8}
              justifyContent="center"
              flex={3}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
                <Card key={item} />
              ))}
            </Flex>
          </Flex>
        </VStack>
      </Flex>
    </>
  )
}
