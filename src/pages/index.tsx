import { VStack } from "@chakra-ui/react";

import AboutUs from "@components/AboutUs";
import Banner from "@components/Banner";
import BrandsCarousel from "@components/BrandsCarousel";
import { Footer } from "@components/Footer";
import { NavBar } from "@components/NavBar";
import WhatsAppWidget from "@components/WhatsAppWidget";

const Index = () => {
	return (
		<>
			<Banner />

			<BrandsCarousel />

			<VStack spacing={16}>
				<AboutUs />
				<Footer />
			</VStack>
		</>
	);
};

export default Index;
