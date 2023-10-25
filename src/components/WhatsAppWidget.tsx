import { Box } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Link from 'next/link'

import Whatsapp from '@icons/WhatsApp'

import { PulseAnimation } from '@animations/pulse'

const WHATSAPP_REDIRECT_URL = 'https://wa.me/'
const WHATSAPP_PHONE_NUMBER = '5531999176875'
const WHATSAPP_BASE_MESSAGE = 'Olá, gostaria de saber mais sobre o as máquinas'

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
