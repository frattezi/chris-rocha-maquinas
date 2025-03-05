import {
	Button,
	Divider,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerHeader,
	DrawerOverlay,
	Flex,
	HStack,
	IconButton,
	Show,
	VStack,
	useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRef } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

import { LgLogo, SmLogo } from "@icons/Logo";

const MenuItems = () => (
	<Flex
		flexDir={{ base: "column", sm: "row" }}
		alignItems={"flex-end"}
		gap={{ base: 4, sm: 0 }}
		w="full"
	>
		<Link href="/contatos" aria-label="Página de contato">
			<Button variant="ghost" size="sm">
				Contato
			</Button>
		</Link>

		<Show below="lg">
			<Divider w="full" />
		</Show>

		<Link href="/produtos" aria-label="Página de produtos">
			<Button variant="ghost" size="sm">
				Produtos
			</Button>
		</Link>
	</Flex>
);

const LgScreenNavBar = () => (
	<HStack justifyContent="space-between" px={16} py={6}>
		<Link href="/">
			<LgLogo w={56} h={12} />
		</Link>
		<MenuItems />
	</HStack>
);

const SmScreenNavBar = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const btnRef = useRef();

	return (
		<>
			<HStack justifyContent="flex-end" px={6} py={2}>
				<IconButton
					icon={<AiOutlineMenu />}
					aria-label={"Menu"}
					variant="solid"
					background="white"
					color="primaryBlue400"
					onClick={onOpen}
				/>
			</HStack>

			<Drawer
				isOpen={isOpen}
				placement="right"
				onClose={onClose}
				finalFocusRef={btnRef}
			>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerHeader>
						<HStack justifyContent="space-between">
							<Link href="/">
								<SmLogo w={40} h={8} />
							</Link>

							<IconButton
								icon={<AiOutlineClose />}
								aria-label={"Close"}
								variant="ghost"
								onClick={onClose}
							/>
						</HStack>
					</DrawerHeader>

					<DrawerBody>
						<VStack gap={8}>
							<MenuItems />
						</VStack>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</>
	);
};

export function NavBar() {
	return (
		<>
			<Show above="lg">
				<LgScreenNavBar />
			</Show>
			<Show below="lg">
				<SmScreenNavBar />
			</Show>
		</>
	);
}
