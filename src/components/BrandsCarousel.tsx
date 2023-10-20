import { motion } from 'framer-motion'
import { Box, HStack, keyframes, Image } from '@chakra-ui/react'

interface IBrand {
  name: string
  fileSrc: string
  delay: string
}

const animationKeyframes = keyframes`
	0% {
		transform: translateX(100vw);
    display: block;
	}

 80%, 100% {
		transform: translateX(-100vw);
    display: none;
	}
`
const HAutoScrollCarrouselAnimation = `${animationKeyframes} 8s linear infinite`

const brands: IBrand[] = [
  { name: 'Juki Logo', fileSrc: 'juki.png', delay: '0s' },
  { name: 'Brother Logo', fileSrc: 'brother.png', delay: '1s' },
  { name: 'Sun Special Logo', fileSrc: 'sun-special.png', delay: '2s' },
  { name: 'Jack Logo', fileSrc: 'jack.png', delay: '3s' },
]

const brandsC: IBrand[] = [
  { name: 'Juki Logo', fileSrc: 'juki.png', delay: '4s' },
  { name: 'Brother Logo', fileSrc: 'brother.png', delay: '5s' },
  { name: 'Sun Special Logo', fileSrc: 'sun-special.png', delay: '6s' },
  { name: 'Jack Logo', fileSrc: 'jack.png', delay: '7s' },
]

const BrandBox = ({ brand }: { brand: IBrand }) => (
  <Box
    as={motion.div}
    animation={HAutoScrollCarrouselAnimation}
    initial={{ x: '100vw' }}
    position="absolute"
    background="white"
    animate={{ animationDelay: brand.delay }}
    flex-direction="column"
    align-items="flex-start"
    display="flex"
    padding="24px 48px"
    gap=" 10px"
    borderRadius="360px"
    boxShadow="0px 0px 40px 0px rgba(203, 205, 249, 0.60)"
  >
    <Image
      src={`/images/${brand.fileSrc}`}
      alt={brand.name}
      w="211px"
      height="36px"
    />
  </Box>
)

export default function BrandCarousel() {
  return (
    <HStack
      margin="0 auto"
      boxSizing="border-box"
      overflowX="hidden"
      w="full"
      p="10px 0px"
      h="400px"
      position="relative"
    >
      {brands.map((brand, index) => (
        <BrandBox key={index} brand={brand} />
      ))}
      {brandsC.map((brand, index) => (
        <BrandBox key={index} brand={brand} />
      ))}
    </HStack>
  )
}
