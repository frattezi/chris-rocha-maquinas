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
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { MdTune } from "react-icons/md";

import Card from "./Card";
import { filters, resourcesFilters } from "./staticData";

function Filters() {
  return (
    <VStack
      flex={1}
      gap={0}
      borderRadius="8px"
      boxShadow={{ base: "none", md: "2px 2px 10px 2px rgba(0,0,0,0.2)" }}
    >
      <Hide below="md">
        <HStack
          backgroundColor="white"
          borderRadius="8px"
          padding="8px 16px"
          justifyContent="flex-start"
          w="full"
        >
          <Text color="primaryBlue400" as="b">
            Filtrar
          </Text>
          <MdTune color="primaryBlue400" />
        </HStack>
      </Hide>

      <VStack backgroundColor="#F8F8FB" w="full" h="full" pt={4} gap={4} px={4}>
        <FormControl>
          <VStack gap={4} alignItems="flex-start">
            <FormLabel mb={0} fontWeight="bold">
              Recursos
            </FormLabel>
            {resourcesFilters.map((filter) => (
              <Checkbox size="lg" colorScheme="purple" key={filter.label}>
                {filter.label}
              </Checkbox>
            ))}
          </VStack>
        </FormControl>
        {filters.map((filter) => (
          <FormControl key={filter.label}>
            <VStack gap={4} alignItems="flex-start">
              <FormLabel mb={0} fontWeight="bold">
                {filter.label}
              </FormLabel>

              <Grid gridTemplateColumns="1fr 1fr" gridGap={3} w="full">
                {filter.items.map((item, index) => (
                  <GridItem key={`${item}`}>
                    <Checkbox size="lg" colorScheme="purple">
                      {item}
                    </Checkbox>
                  </GridItem>
                ))}
              </Grid>
            </VStack>
            <Divider py={2} />
          </FormControl>
        ))}
      </VStack>
    </VStack>
  );
}
export default function CardsSection() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Filtros</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Filters />
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={onClose}
              aria-label="Fechar menu de filtros"
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Flex w="100vw" justifyContent="center" gap={0} p={16}>
        <VStack w="100%" alignItems="flex-start" gap={8}>
          <Heading>Encontre sua nova máquina</Heading>

          <Flex
            flexDir={{ base: "column", md: "row" }}
            w="full"
            gap={8}
            alignItems="start"
          >
            <Hide below="md">
              <Filters />
            </Hide>

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
  );
}
