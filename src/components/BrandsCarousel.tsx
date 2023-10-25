import { Box, Container, HStack, Image, VStack } from '@chakra-ui/react'
import { motion } from 'framer-motion'

import { HSlider } from '@animations/slider'

interface IBrand {
  name: string
  fileSrc: string
  delay?: string
}

const brands: IBrand[] = [
  {
    fileSrc: 'brother.png',
    name: 'test1',
  },
  {
    fileSrc: 'jack.png',
    name: 'test2',
  },
  {
    fileSrc: 'juki.png',
    name: 'test3',
  },
  {
    fileSrc: 'sun-special.png',
    name: 'test4',
  },
]

const BrandCard = ({ brand }: { brand: IBrand }) => (
  <VStack
    overflow="hidden"
    border="0.0625rem solid #dee2e6;"
    key={brand.name}
    justifyContent="center"
    alignItems="center"
    bg="white"
    borderRadius="36px"
    position="relative"
    gap="1rem"
    p="24px 48px"
    boxShadow={'0px 0px 40px 0px rgba(203, 205, 249, 0.30)'}
    flexGrow={0}
  >
    <Image
      src={`/images/${brand.fileSrc}`}
      alt={brand.name}
      objectFit="contain"
      w="211px"
      h="36px"
    />
  </VStack>
)

export default function BrandsCarousel() {
  return (
    <Container maxW="full" h="full" w="full" p="0">
      <Box
        overflow="hidden"
        className="root-container"
        ml="auto"
        mr="auto"
        paddingY="calc(1.5rem * 2)"
        boxSizing="border-box"
        maxW="100%"
      >
        <VStack
          className="brand-carousel-containers"
          alignItems="flex-start"
          gap="1rem"
          justifyContent="flex-start"
          boxSizing="border-box"
        >
          <HStack
            className="carousel-container"
            boxSizing="border-box"
            alignItems="center"
            justifyContent="flex-start"
            maxW="full"
            gap="10.2rem"
            flexWrap="nowrap"
            flexShrink={0}
            minW="full"
          >
            {[1, 2].map((index) => (
              <HStack
                key={index}
                as={motion.div}
                animation={HSlider}
                className="cards-container"
                boxSizing="border-box"
                alignItems="center"
                flexWrap="nowrap"
                gap="10.2rem"
                flexShrink={0}
                minW="full"
              >
                {brands.map((brand, index) => (
                  <BrandCard brand={brand} key={`${brand.name}${index}`} />
                ))}
              </HStack>
            ))}
          </HStack>
        </VStack>
      </Box>
    </Container>
  )
}
