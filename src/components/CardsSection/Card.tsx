import {
  Box,
  Button,
  Collapse,
  HStack,
  Image,
  Text,
  VStack,
  useDisclosure,
} from '@chakra-ui/react'

import { LightOn, Needle, Noise, Scissors } from '@icons/CardIcons'

const icons = [Scissors, LightOn, Needle, Noise]

export default function Card() {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <VStack
      py={6}
      gap={4}
      px={8}
      justifyContent="center"
      border="1px solid primaryBlue400"
      borderRadius="12px"
      alignSelf="flex-start"
    >
      <Image src="/images/machines/jackf5.png" w={240} h={180} />

      <Text
        fontFamily="Poppins"
        fontWeight="bold"
        size="4"
        color="#59595E"
        noOfLines={2}
        minH="48px"
        maxW="250px"
        textAlign={'center'}
      >
        Reta Jack f5 direct drive aisdjiajsdijaisd asidjasidjias
      </Text>

      <HStack>
        {icons.map((Icon, index) => (
          <Icon key={index} />
        ))}
      </HStack>

      <Button
        variant="outline"
        borderRadius="36px"
        borderColor="primaryBlue400"
        onClick={onToggle}
      >
        <Text color="primaryBlue400" fontFamily="Poppins">
          Ver Mais
        </Text>
      </Button>

      <Collapse in={isOpen} animateOpacity>
        <VStack>
          {icons.map((Icon, index) => (
            <Icon key={index} />
          ))}
        </VStack>
      </Collapse>
    </VStack>
  )
}
