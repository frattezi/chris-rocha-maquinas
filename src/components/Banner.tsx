import { HStack, Heading, Image, VStack } from '@chakra-ui/react'

export default function Banner() {
  return (
    <HStack
      w="100%"
      background="#5A60FF"
      justifyContent="space-between"
      gap={0}
    >
      <VStack alignItems="center" maxW="xl" gap={8} w="full" ml={44}>
        <Heading color="white" noOfLines={2}>
          Compre, troque ou conserte sua máquina de costura
        </Heading>
        <Heading size="md" color="white" noOfLines={2}>
          As melhores marcas e os menores preços você encontra aqui!{' '}
        </Heading>
      </VStack>
      <Image
        src={`/images/banner.png`}
        alt={'Website Banner'}
        objectFit="contain"
        w="846px"
        h="407px"
        clipPath="polygon(32% 0, 100% 0, 100% 100%, 0% 100%)"
      />
    </HStack>
  )
}
