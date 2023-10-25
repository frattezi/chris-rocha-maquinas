import { Container } from '@chakra-ui/react'

import Banner from '@components/Banner'
import BrandsCarousel from '@components/BrandsCarousel'
import CardsSection from '@components/CardsSection'
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
    </Container>
  )
}

export default Index
