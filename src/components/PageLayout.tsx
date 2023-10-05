import { NavBar } from './NavBar'
import { Container } from './Container'

const PageLayout = ({ children }) => (
  <>
    <NavBar />
    <Container>{children}</Container>
  </>
)

export default PageLayout
