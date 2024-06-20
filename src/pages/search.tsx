import { Container } from "@chakra-ui/react";
import useUrlSearchParams from "src/hooks/useUrlSearchParams";

import CardsSection from "@components/CardsSection";
import { Footer } from "@components/Footer";
import { NavBar } from "@components/NavBar";

const Index = () => {
  const { searchParams } = useUrlSearchParams();
  console.log({ searchParams });

  return (
    <Container minW="100vw" p={0}>
      <NavBar />
      <CardsSection />
      <Footer />
    </Container>
  );
};

export default Index;
