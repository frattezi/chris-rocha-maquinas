import { ChakraProvider } from "@chakra-ui/react";
import { NavBar } from "@components/NavBar";
import WhatsAppWidget from "@components/WhatsAppWidget";

import theme from "src/theme";

export default function BaseLayout({
	children,
}: { children: React.ReactNode }) {
	return (
		<ChakraProvider theme={theme}>
			<NavBar />

			<WhatsAppWidget />

			{children}
		</ChakraProvider>
	);
}
