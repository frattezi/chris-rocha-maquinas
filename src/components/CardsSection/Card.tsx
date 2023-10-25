import { Image, Text, VStack } from '@chakra-ui/react'

export default function Card() {
  return (
    <VStack py={6} px={8} justifyContent="center">
      <Image src="/images/card-template.png" w={28} h={24} />
      <Text>Jack 2 pontinhos Direta com Pedal</Text>
    </VStack>
  )
}
