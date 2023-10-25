import { Container } from '@chakra-ui/react'
import BrandsCarousel from '../components/BrandsCarousel'
import { NavBar } from '../components/NavBar'
import WhatsAppWidget from '../components/WhatsAppWidget'
import Banner from '../components/Banner'

const Index = () => {
  return (
    <Container minW="100vw" p={0}>
      <NavBar />
      <Banner />
      <WhatsAppWidget />
      <BrandsCarousel />
    </Container>
  )
}

export default Index
