import { HStack, Heading, Image, Show, VStack } from '@chakra-ui/react'

const BannerHeading = ({ children, size = 'lg' }) => (
  <Heading
    size={size}
    color="white"
    noOfLines={{ base: 4, sm: 2 }}
    textAlign={{ base: 'center', sm: 'start' }}
  >
    {children}
  </Heading>
)

export default function Banner() {
  return (
    <HStack
      w="100%"
      background="#5A60FF"
      justifyContent={{ base: 'center', sm: 'space-between' }}
      gap={0}
      px={{ base: 4, sm: 0 }}
      py={{ base: 8, sm: 0 }}
    >
      <VStack
        alignItems="center"
        maxW="xl"
        gap={8}
        w="full"
        ml={{ base: 0, sm: 44 }}
      >
        <BannerHeading>
          Compre, troque ou conserte sua máquina de costura
        </BannerHeading>
        <BannerHeading size="md">
          As melhores marcas e os menores preços você encontra aqui!{' '}
        </BannerHeading>
      </VStack>

      <Show above="lg">
        <Image
          src={`/images/banner.png`}
          alt={'Website Banner'}
          objectFit="contain"
          w="846px"
          h="407px"
          clipPath="polygon(32% 0, 100% 0, 100% 100%, 0% 100%)"
        />
      </Show>
    </HStack>
  )
}
