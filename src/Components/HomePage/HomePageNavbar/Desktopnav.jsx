import {
  Box,
  Flex,
  Stack,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
} from "@chakra-ui/react";
import DesktopSubNav from "./DesktopSubNav";
import Services from "./Services";
import More from "./More";

export default function DesktopNav({ NAV_ITEMS }) {
 
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? "#"}
                fontSize={"13px"}
                fontWeight={500}
                color={"gray.500"}
                _hover={{
                  textDecoration: "none",
                  borderBottom: "3px solid #006cb7",
                  color: "#006cb7",
                }}
              >
                {navItem.label} 
              </Link>
              
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow="xs"
                bg={popoverContentBgColor}
                fontSize="13px"
              >
                <Flex bg="#f5f5f5">
                  <Stack
                    irection={"column"}
                    spacing={0}
                    p="4"
                    h="max-content"
                    w="max-content"
                  >
                    {navItem.children.map((child) => (
                      <DesktopSubNav key={child.label} {...child} />
                    ))}
                  </Stack>
                </Flex>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
      <Services/>
      <More/>
    </Stack>
  );
}
