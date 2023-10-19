import { NavBar } from './NavBar'
import { Container } from './Container'
import WhatsAppWidget from './WhatsAppWidget'

const PageLayout = ({ children }) => (
  <>
    <NavBar />
    <WhatsAppWidget />
    <Container>{children}</Container>
  </>
)

export default PageLayout
