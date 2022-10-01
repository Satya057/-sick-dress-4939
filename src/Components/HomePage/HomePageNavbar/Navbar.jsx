import {
	Box,
	Flex,
	Text,
	IconButton,
	Stack,
	Icon,
	Link,
	Popover,
	PopoverTrigger,
	PopoverContent,
	useColorModeValue,
	useDisclosure,
	Image,
} from "@chakra-ui/react";
import {
	HamburgerIcon,
	CloseIcon,
	BellIcon,
} from "@chakra-ui/icons";
import Desktopnav from "./Desktopnav";
import MyNaukri from "./MyNaukri";
import { useNavigate } from "react-router-dom";
// import Services from "./Services";

const NAV_ITEMS = [
	{
		label: "JOBS",
		href: "#",
		children: [
			{
				label: "Search Jobs",
				href: "#",
			},
			{
				label: "Create Free Job Alert",
				href: "#",
			},
			{
				label: "Jobs By Location",
				href: "#",
			},
			{
				label: "Jobs By Skill",
				href: "#",
			},
			{
				label: "Jobs By Designation",
				href: "#",
			},
			{
				label: "Jobs by Company",
				href: "#",
			},
			{
				label: "Jobs by Category",
				href: "#",
			},
			{
				label: "Browse All Jobs",
				href: "#",
			},
		],
	},
	{
		label: "RECRUITERS",
		href: "#",
		children: [
			{
				label: "Browse All Recruiters",
				href: "#",
			},
			{
				label: "Recruiter Connection",
				href: "#",
			},
			{
				label: "Go to NaukriRecruiter",
				href: "#",
			},
		],
	},
	{
		label: "COMPANIES",
		href: "#",
		children: [
			{
				label: "Browse All Companies",
				href: "#",
			},
			{
				label: "About Companies",
				href: "#",
			},
			{
				label: "Interview Questions",
				href: "#",
			},
			{
				label: "Write Company Reveiw",
				href: "#",
			},
			{
				label: "Write Interview Advice",
				href: "#",
			},
			{
				label: "Company Reviews",
				href: "#",
			},
			{
				label: "Company Salaries",
				href: "#",
			},
		],
	},
	{
		label: "TOOLS",
		children: [
			{
				label: "Carrier Dashboard",
				href: "#",
			},
			{
				label: "Your Next Carrier Move",
				href: "#",
			},
			{
				label: "Skill Trends",
				href: "#",
			},
			{
				label: "Naukri Labs",
				href: "#",
			},
		],
	},
];

export default function WithSubnavigation() {
	let navigate = useNavigate();
	const { isOpen, onToggle } = useDisclosure();

	return (
		<Box w="100%" border="none">
			<Flex
				bg={useColorModeValue("white", "gray.800")}
				color={useColorModeValue("gray.600", "white")}
				minH={"70px"}
				py={{ base: 2 }}
				px={{ base: 4 }}
				borderBottom={1}
				borderStyle={"solid"}
				w="65%"
				m="auto"
				borderColor={useColorModeValue("gray.200", "gray.900")}
				align={"center"}
			>
				<Flex
					flex={{ base: 1, md: "auto" }}
					ml={{ base: -2 }}
					display={{ base: "flex", md: "none" }}
				>
					<IconButton
						onClick={onToggle}
						icon={
							isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
						}
						variant={"ghost"}
						aria-label={"Toggle Navigation"}
					/>
				</Flex>
				<Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
					<Image
						src="https://static.naukri.com/s/4/100/i/naukri_Logo.png"
						alt="Naukri Logo"
						onClick={() => navigate("/home")}
					/>

					<Flex display={{ base: "none", md: "flex" }} ml={10}>
						<Desktopnav NAV_ITEMS={NAV_ITEMS} />
					</Flex>
				</Flex>

				<Stack
					flex={{ base: 1, md: 0 }}
					justify={"flex-end"}
					direction={"row"}
					spacing={6}
				>
					<Box>
						<Popover trigger={"hover"} placement={"bottom-end"}>
							<PopoverTrigger>
								<Link
									p={2}
									href={"#"}
									fontSize={"13px"}
									fontWeight={500}
									color={"gray.500"}
									_hover={{
										textDecoration: "none",
										color: "#006cb7",
									}}
								>
									<Icon as={BellIcon} w={6} h={6} bg="none"></Icon>
								</Link>
							</PopoverTrigger>
							<PopoverContent bg="#f5f5f5">
								<Stack spacing={6} p="6">
									<Link
										_hover={{ color: "#006cb7" }}
										onClick={() => navigate("#")}
									>
										Job Recomondetations
									</Link>
									<Box _hover={{ color: "#006cb7" }}>
										<Box display="flex" justifyContent="space-between">
											<Link>Pending Actions </Link>
											<Text>{0}</Text>
										</Box>
										<Text style={{ marginTop: "-5px", fontSize: "11px" }}>
											Update Project Dteails
										</Text>
									</Box>
									<Box _hover={{ color: "#006cb7" }}>
										<Box display="flex" justifyContent="space-between">
											<Link>Recommended Skill</Link>
											<Text>{6}</Text>
										</Box>
										<Text style={{ marginTop: "-5px", fontSize: "11px" }}>
											Administration
										</Text>
									</Box>
									<Box _hover={{ color: "#006cb7" }}>
										<Box display="flex" justifyContent="space-between">
											<Link>Reruiter Searches</Link>
											<Text>{18}</Text>
										</Box>
									</Box>
								</Stack>
							</PopoverContent>
						</Popover>
					</Box>
					<MyNaukri />
				</Stack>
			</Flex>
		</Box>
	);
}
