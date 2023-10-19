import { Box, chakra, keyframes } from '@chakra-ui/react'
import Whatsapp from '../icons/WhatsApp'
import { motion } from 'framer-motion'
import Link from 'next/link'

const WHATSAPP_REDIRECT_URL = 'https://wa.me/'
const WHATSAPP_PHONE_NUMBER = '5531999176875'
const WHATSAPP_BASE_MESSAGE = 'Olá, gostaria de saber mais sobre o as máquinas'

const animationKeyframes = keyframes`
	0% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.5); }
  80% { box-shadow: 0 0 0 14px rgba(37, 211, 102, 0); }
`
const PulseAnimation = `${animationKeyframes} 1.5s ease-out infinite`

const WhatsAppWidget = () => {
  const buildWhatsAppUrl = () => {
    const url = new URL(WHATSAPP_REDIRECT_URL + WHATSAPP_PHONE_NUMBER)
    url.searchParams.append('text', WHATSAPP_BASE_MESSAGE)

    return url.toString()
  }

  return (
    <Link href={buildWhatsAppUrl()}>
      <Box
        as={motion.div}
        animation={PulseAnimation}
        position="fixed"
        right={34}
        bottom={34}
        bg="#25d366"
        color="white"
        fontSize="40px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="40px"
        height="40px"
        padding="35px"
        borderRadius="50%"
      >
        <Whatsapp />
      </Box>
    </Link>
  )
}

export default WhatsAppWidget
