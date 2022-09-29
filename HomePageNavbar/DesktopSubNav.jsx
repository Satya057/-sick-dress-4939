import {
    Box,
    Flex,
    Text,
    Stack,
    Link,
  } from "@chakra-ui/react";
 
const DesktopSubNav = ({ label, href, subLabel }) => {
 
    return (
      <Link
        href={href}
        role={'group'}
        display={'block'}
        p={2}
        rounded={'md'}
        >
        <Stack direction={'row'} align={'center'}>
          <Box>
            <Text
              transition={'all .3s ease'}
              _groupHover={{ color: '#006cb7' }}
              fontWeight={500}>
              {label}
            </Text>
            <Text fontSize={'sm'}>{subLabel}</Text>
          </Box>
          <Flex
            transform={'translateX(-10px)'}
            opacity={0}
            justify={'flex-end'}
            align={'center'}
            flex={1}>
          </Flex>
        </Stack>
      </Link>
    );
  };

  export default DesktopSubNav;