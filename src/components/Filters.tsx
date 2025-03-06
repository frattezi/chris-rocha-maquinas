import {
	Drawer,
	DrawerBody,
	DrawerContent,
	DrawerHeader,
	DrawerOverlay,
	HStack,
	Text,
	useDisclosure,
} from "@chakra-ui/react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { MdOutlineFilterList, MdOutlineSort } from "react-icons/md";

export default function Filters() {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const {
		isOpen: isSortOpen,
		onOpen: onSortOpen,
		onClose: onSortClose,
	} = useDisclosure();

	return (
		<HStack
			px={4}
			w="full"
			textColor="white"
			background="primaryBlue400"
			justifyContent="space-between"
		>
			<HStack onClick={onOpen}>
				<MdOutlineFilterList />
				<Text fontSize="sm">Filtros</Text>
			</HStack>

			<HStack onClick={onSortOpen}>
				<MdOutlineSort />
				<Text fontSize="sm">Ordenar Busca</Text>
			</HStack>

			<FilterDrawer isOpen={isOpen} onClose={onClose} />
			<SortDrawer isOpen={isSortOpen} onClose={onSortClose} />
		</HStack>
	);
}

function FilterDrawer({
	isOpen,
	onClose,
}: { isOpen: boolean; onClose: () => void }) {
	return (
		<Drawer placement="bottom" onClose={onClose} isOpen={isOpen} size="full">
			<DrawerOverlay />

			<DrawerContent>
				<DrawerHeader borderBottomWidth="1px">
					<HStack justifyContent="space-between">
						<HStack>
							<MdOutlineFilterList />
							<Text fontSize="md">Filtros</Text>
						</HStack>

						<AiOutlineClose onClick={onClose} />
					</HStack>
				</DrawerHeader>

				<DrawerBody>
					<HStack>
						<Text>Limpar Filtros</Text>
					</HStack>
				</DrawerBody>
			</DrawerContent>
		</Drawer>
	);
}

function SortDrawer({
	isOpen,
	onClose,
}: { isOpen: boolean; onClose: () => void }) {
	return (
		<Drawer placement="bottom" onClose={onClose} isOpen={isOpen} size="full">
			<DrawerOverlay />

			<DrawerContent>
				<DrawerHeader borderBottomWidth="1px">
					<HStack justifyContent="space-between">
						<HStack>
							<MdOutlineSort />
							<Text fontSize="md">Ordenar Busca</Text>
						</HStack>

						<AiOutlineClose onClick={onClose} />
					</HStack>
				</DrawerHeader>

				<DrawerBody>
					<HStack>
						<Text>Limpar Filtros</Text>
					</HStack>
				</DrawerBody>
			</DrawerContent>
		</Drawer>
	);
}
