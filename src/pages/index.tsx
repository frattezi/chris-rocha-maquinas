import { Container } from '@chakra-ui/react'

import AboutUs from '@components/AboutUs'
import Banner from '@components/Banner'
import BrandsCarousel from '@components/BrandsCarousel'
import CardsSection from '@components/CardsSection'
import { Footer } from '@components/Footer'
import { NavBar } from '@components/NavBar'
import WhatsAppWidget from '@components/WhatsAppWidget'

const Index = () => {
  return (
    <Container minW="100vw" p={0}>
      <NavBar />
      <Banner />
      <WhatsAppWidget />
      <BrandsCarousel />
      <CardsSection />
      <AboutUs />
      <Footer />
    </Container>
  )
}

export default Index
