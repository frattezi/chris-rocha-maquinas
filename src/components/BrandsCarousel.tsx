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
	}

	95%, 100% {
		transform: translateX(-50vw);
	}
`
const HAutoScrollCarrouselAnimation = `${animationKeyframes} 10s linear infinite`

const brands: IBrand[] = [
  { name: 'Juki Logo', fileSrc: 'juki.png', delay: '0s' },
  { name: 'Brother Logo', fileSrc: 'brother.png', delay: '2s' },
  { name: 'Sun Special Logo', fileSrc: 'sun-special.png', delay: '3s' },
]

const BrandBox = ({ brand }: { brand: IBrand }) => (
  <Box
    as={motion.div}
    animation={HAutoScrollCarrouselAnimation}
    initial={{ x: '100vw' }}
    animate={{ animationDelay: brand.delay }}
    flex-direction="column"
    align-items="flex-start"
  >
    <Image
      src={`/images/${brand.fileSrc}`}
      alt={brand.name}
      width={211}
      height="40px"
    />
  </Box>
)

export default function BrandCarousel() {
  return (
    <HStack margin="0 auto" boxSizing="border-box" overflowX="hidden" w="full">
      {brands.map((brand, index) => (
        <BrandBox key={index} brand={brand} />
      ))}
    </HStack>
  )
}
