import { Container } from "@chakra-ui/react";
import useUrlSearchParams from "src/hooks/useUrlSearchParams";

import CardsSection from "@components/CardsSection";
import SearchWidget from "@components/FilterWidget";
import { Footer } from "@components/Footer";
import { NavBar } from "@components/NavBar";

const Index = () => {
  const { searchParams } = useUrlSearchParams();

  return (
    <Container minW="100vw" p={0}>
      <NavBar />
      <CardsSection />
      <Footer />

      <SearchWidget />
    </Container>
  );
};

export default Index;
