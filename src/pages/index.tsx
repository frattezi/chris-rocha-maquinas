import { Container, Flex, VStack } from '@chakra-ui/react'

import AboutUs from '@components/AboutUs'
import Banner from '@components/Banner'
import BrandsCarousel from '@components/BrandsCarousel'
import CardsSection from '@components/CardsSection'
import { Footer } from '@components/Footer'
import { NavBar } from '@components/NavBar'
import WhatsAppWidget from '@components/WhatsAppWidget'

const Index = () => {
  return (
    <>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <NavBar />
      <Banner />
      <WhatsAppWidget />
      <BrandsCarousel />
      <VStack spacing={16}>
        <AboutUs />
        <Footer />
      </VStack>
    </>
  )
}

export default Index
