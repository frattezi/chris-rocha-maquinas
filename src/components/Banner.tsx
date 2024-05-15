import { As, HStack, Heading, Image, Show, VStack } from '@chakra-ui/react'

interface BannerHeadingProps {
  as: As
  size?: string
  fontWeight?: 'black' | 'medium'
  children?: React.ReactNode
}

function BannerHeading({
  as = 'h1',
  size = 'xl',
  fontWeight = 'black',
  children = '',
}: BannerHeadingProps) {
  return (
    <Heading
      as={as}
      size={size}
      color="white"
      fontWeight={fontWeight}
      textAlign={{ base: 'center', xl: 'left' }}
    >
      {children}
    </Heading>
  )
}

export default function Banner() {
  return (
    <HStack
      w="100%"
      background="#1D23AB"
      justifyContent={{ base: 'center', xl: 'space-between' }}
      gap={0}
      px={{ base: 4, sm: 0 }}
      py={{ base: 8, sm: 0 }}
    >
      <VStack
        alignItems="center"
        maxW="xl"
        gap={8}
        w="full"
        ml={{ base: 0, xl: 44 }}
      >
        <BannerHeading as="h1" size="xl" fontWeight="black">
          Compre, troque ou conserte sua máquina de costura
        </BannerHeading>

        <BannerHeading as="h3" size="lg" fontWeight="medium">
          As melhores marcas e os menores preços você encontra aqui!{' '}
        </BannerHeading>
      </VStack>

      <Show above="xl">
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
