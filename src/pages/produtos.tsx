import { Container } from "@chakra-ui/react";

import CardsSection from "@components/CardsSection";
import Filters from "@components/Filters";
import { Footer } from "@components/Footer";

const Index = () => {
	return (
		<Container minW="100vw" p={0}>
			<Filters />
			<CardsSection />
			<Footer />
		</Container>
	);
};

export default Index;
