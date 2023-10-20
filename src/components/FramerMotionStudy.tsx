// import { isValidMotionProp, motion } from 'framer-motion'
// import {
//   Box,
//   HStack,
//   keyframes,
//   Image,
//   Container,
//   Slider,
//   SliderFilledTrack,
//   SliderThumb,
//   SliderTrack,
//   Flex,
//   VStack,
//   chakra,
//   shouldForwardProp,
// } from '@chakra-ui/react'
// import { useState } from 'react'

// interface IBrand {
//   name: string
//   fileSrc: string
//   delay: string
// }

// const animationKeyframes = keyframes`
// 	0% {
// 		transform: translateX(100vw);
// 	}

//  80%, 100% {
// 		transform: translateX(-55vw);
// 	}
// `
// const HAutoScrollCarrouselAnimation = `${animationKeyframes} 10s linear infinite`

// export default function FramerStudy() {
//   const [value, setValue] = useState(30)

//   const [rotation, setRotation] = useState(30)
//   const handleChange = (value) => setValue(value)
//   const handleRotationChange = (value) => setRotation(value)

//   const ChakraBox = chakra(motion.div, {
//     shouldForwardProp: (prop) =>
//       isValidMotionProp(prop) || shouldForwardProp(prop),
//   })

//   return (
//     <VStack
//       w="100vw"
//       h="60vh"
//       justifyContent="left"
//       gap="40px"
//       pt="40px"
//       bg="black"
//     >
//       <ChakraBox
//         as={motion.div}
//         drag="x"
//         bg="white"
//         w="40px"
//         h="40px"
//         whileTap={{
//           animationPlayState: 'paused',
//         }}
//         transition={{
//           duration: 2,
//           ease: 'easeInOut',
//           times: [0, 0.2, 0.5, 0.8, 1],
//           // @ts-ignore
//           repeat: Infinity,
//           repeatType: 'loop',
//           repeatDelay: 1,
//         }}
//         animate={{
//           scale: [1, 2, 2, 1, 1],
//           rotate: [0, 0, 180, 180, 0],
//           borderRadius: ['0%', '0%', '50%', '50%', '0%'],
//         }}
//       />
//     </VStack>
//   )
// }

import React, { useEffect } from 'react'

import { motion, useAnimation } from 'framer-motion'
import { Flex } from '@chakra-ui/react'

const divsData = [
  {
    id: 1,
    initialX: '100%',
    hoverScale: 1.2,
    color: 'bg-blue-500',
    delay: -2.5,
  },
  {
    id: 2,
    initialX: '100%',
    hoverScale: 1.2,
    color: 'bg-green-500',
    delay: -7,
  },
  {
    id: 3,
    initialX: '100%',
    hoverScale: 1.2,
    color: 'bg-yellow-500',
    delay: -12.5,
  },
  {
    id: 4,
    initialX: '100%',
    hoverScale: 1.2,
    color: 'bg-purple-500',
    delay: -17,
  },
]

const CardJob = () => {
  const controls = useAnimation()

  const handleHoverStart = () => {
    controls.stop()
  }

  const handleHoverEnd = () => {
    controls.start(
      { left: 0 },
      {
        autoplay: true,
        repeat: Infinity,
        duration: 3,
        ease: 'linear',
        repeatType: 'loop',
      }
    )
  }

  useEffect(() => {
    handleHoverEnd()
  }, [])

  return (
    <Flex bg="red" w="100vw" h="40vh">
      {divsData.map((divData) => (
        <motion.div
          key={divData.id}
          initial={{ y: divData.id * 50, left: '100%' }}
          animate={controls}
          onMouseEnter={handleHoverStart}
          onMouseLeave={handleHoverEnd}
          className={`absolute w-10 h-10 ${divData.color}`}
        />
      ))}
    </Flex>
  )
}

export default CardJob
