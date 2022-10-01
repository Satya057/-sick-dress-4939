import {
  Avatar,
  Box,
  Button,
  Flex,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import styles from "./Body.module.css";
import NaukriFastForward from "./NaukriFastForward";
import NaukriPulse from "./NaukriPulse";
import ProfileCard from "./ProfileCard";
import Qrscanner from "./Qrscanner";
import Jobs from "./Jobs";
import WithSubnavigation from "../HomePageNavbar/Navbar";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";

const Body = () => {
  const ref = useRef();
  ref.current = false;
  const [follow1, setFollow1] = useState(false);
  const [follow2, setFollow2] = useState(false);

  const navigate = useNavigate();

  return (
    <div>
      <WithSubnavigation/>
      <div className={styles.mainbody}>
        <div className={styles.Topimg}></div>
        <div className={styles.boxes}>
          <p className={styles.searchjob}>Search Jobs</p>
          <div className={styles.contentBoxes}>
            {/* First Box of the body start from herer */}

            <div className={styles.box1}>
              {/* Search Box */}
              <div className={styles.search}>
                <div>
                  <input
                    type="text"
                    placeholder="Search job by Skills,Designation,Companies"
                  />
                  <button>SEARCH</button>
                </div>
                {/* Components */}
              </div>
              <NaukriPulse />
              <Box mt={"6"}>
                <Text fontSize={"xl"} color="gray.500" fontWeight="bold">
                  Jobs
                </Text>
              </Box>
              <Jobs />
              <Box
                h={"150px"}
                w="100%"
                mt={"6"}
                boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
                bg="#fff"
              >
                <Text color={"gray.700"} p={"4"} fontWeight="bold">
                  New Jobs in My Job Alerts
                </Text>
                <hr />
                <Box w={"max-content"} h="max-content" m={"auto"} mt="4">
                  <Link
                    p={"2"}
                    color={"twitter.500"}
                    fontSize={"md"}
                    m={"auto"}
                  >
                    CREATE CUSTOM JOB ALERTS
                  </Link>
                  <Text
                    fontWeight={"500"}
                    color="gray.500"
                    fontSize={"xs"}
                    textAlign={"center"}
                  >
                    Stay informed about the latest jobs for you
                  </Text>
                </Box>
              </Box>
              <Flex
                w={"100%"}
                h="220px"
                mt={"6"}
                justifyContent="space-between"
              >
                <Box
                  h={"100%"}
                  w="48%"
                  bg="#fff"
                  boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
                >
                  <Text p={"4"} fontWeight="bold" color={"gray.700"}>
                    Apllication Summary
                  </Text>
                  <hr />
                  <Text
                    p={"5"}
                    fontSize="xs"
                    fontWeight={"medium"}
                    color="gray.500"
                  >
                    Daily Limit of Application: 50
                  </Text>
                </Box>
                <Box
                  h={"100%"}
                  w="48%"
                  bg="#fff"
                  boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
                >
                  <Text p={"4"} fontWeight="bold" color={"gray.700"}>
                    Saved Job(s)
                  </Text>
                  <hr />

                  <Text
                    p={"5"}
                    fontSize="xs"
                    fontWeight={"medium"}
                    color="gray.500"
                  >
                    You have 0 saved job(s) till now.
                  </Text>
                  <br />
                  <br />
                  <br />
                  <Link float={"right"} mr="4" color={"twitter.600"}>
                    View All
                  </Link>
                </Box>
              </Flex>

              {/* Recruiters */}

              <Text
                mt={"6"}
                fontSize="20px"
                fontWeight="medium"
                color={"gray.600"}
              >
                Recruiters
              </Text>
              <Box
                className={styles.reruiter}
                w={"100%"}
                h="200px"
                boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
                bg={"#fff"}
              >
                <Text fontWeight={"medium"} p={"4"}>
                  01 New Recruiter Messages
                </Text>
                <hr />
                <Flex h={"50%"} w="100%" p={"4"} justifyContent="space-between">
                  <Flex gap={"5"} alignItems="center">
                    <Avatar src="https://ca.slack-edge.com/T02SYTAHYSV-U02TX53KNDA-021949f66475-512"></Avatar>
                    <Box>
                      <Text fontSize={"md"} fontWeight="medium">
                        Ganesh Sabale
                      </Text>
                      <Text
                        fontSize={"xs"}
                        fontWeight="medium"
                        color="gray.500"
                      >
                        GS99 IT Services <br /> Pvt. Ltd. Pune
                      </Text>
                      <Text fontSize={"10px"} color="gray.500">
                        18 jun 2022
                      </Text>
                    </Box>
                  </Flex>
                  <Box>
                    <Text fontWeight={"medium"}>
                      GS99 IT Services Pvt. Ltd.
                    </Text>
                    <Text
                      fontSize={"xs"}
                      fontWeight="medium"
                      color={"gray.500"}
                    >
                      Job | Urgent Job Opening for IT Helpdesk in Pune
                    </Text>
                  </Box>
                </Flex>
                <Link float={"right"} color="twitter.600" mr={"4"}>
                  View All
                </Link>
              </Box>

              {/* Recruiter Connections */}
              <Box
                w={"100%"}
                h="260px"
                boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
                bg={"#fff"}
                mt="6"
              >
                <Text p={"5"} fontWeight="bold">
                  Recruiter Connections
                </Text>
                <hr />
                <Flex
                  p="5"
                  h={"60%"}
                  w="100%"
                  padding={"8"}
                  justifyContent="space-between"
                >
                  <Stack>
                    <Flex alignItems={"center"} gap="6">
                      <Text fontSize={"4xl"} fontWeight="bold">
                        00
                      </Text>
                      <Text
                        lineHeight={"1"}
                        color="gray.600"
                        fontWeight={"medium"}
                        fontSize="xs"
                      >
                        Credits <br /> Purchased
                      </Text>
                    </Flex>
                    <Flex alignItems={"center"} gap="6">
                      <Text fontSize={"4xl"} fontWeight="bold">
                        00
                      </Text>
                      <Text
                        lineHeight={"1"}
                        color="gray.600"
                        fontWeight={"medium"}
                        fontSize="xs"
                      >
                        Credits <br /> Remaining
                      </Text>
                    </Flex>
                  </Stack>
                  <Stack spacing={"8"}>
                    <Text
                      fontWeight={"medium"}
                      color="gray.600"
                      fontSize={"xs"}
                    >
                      Buy recruiter connections credits to contact more
                      recruiters <br /> hiring in your domain.
                    </Text>
                    <Button
                      w="36"
                      p={"4"}
                      bg="#4a90e2"
                      color={"#eff8fe"}
                      borderRadius="none"
                    >
                      BUY CREDITS
                    </Button>
                  </Stack>
                </Flex>
                <Link float={"right"} color="twitter.600" mr={"4"}>
                  View All
                </Link>
              </Box>

              {/* last box  */}

              <Box
                w={"100%"}
                h="290px"
                mb={"6"}
                boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
                bg={"#fff"}
                mt="6"
                className={styles.hirirngDiv}
              >
                <Text p={"5"} fontWeight="bold">
                  Recruiters hiring for candidates like you
                </Text>
                <hr />
                <Flex
                  p={"5"}
                  w="100%"
                  h={"max-content"}
                  justifyContent="space-between"
                >
                  <Flex gap={7}>
                    <Avatar src="https://masai-website-images.s3.ap-south-1.amazonaws.com/Nrupul_d3fe3b289a.jpg"></Avatar>
                    <Stack spacing={"-1"}>
                      <Text fontWeight={"bold"}>Nrupul Dev</Text>
                      <Text fontSize={"md"} color={"gray.600"}>
                      CTO & Co-Founder
                      </Text>
                      <Text fontSize={"xs"} color="gray.600">
                      Banglore
                      </Text>
                    </Stack>
                  </Flex>
                  <Flex gap={"12"}>
                    <Link fontWeight={"medium"} color="twitter.600">
                      Send Message
                    </Link>
                    <Button
                      borderRadius={"none"}
                      w="32"
                      border="1px solid #1681bf"
                      bg={"#fff"}
                      color="twitter.600"
                      fontWeight={"medium"}
                      onClick={() => setFollow1(!follow1)}
                    >
                      {follow1 ? "Following" : "Follow"}
                    </Button>
                  </Flex>
                </Flex>
                <Flex
                  p={"5"}
                  w="100%"
                  h={"max-content"}
                  justifyContent="space-between"
                >
                  <Flex gap={7}>
                    <Avatar src="https://masai-website-images.s3.ap-south-1.amazonaws.com/Yogesh_52e31f5560.jpg"></Avatar>
                    <Stack spacing={"-1"}>
                      <Text fontWeight={"bold"}>Yogesh Bhat</Text>
                      <Text fontSize={"md"} color={"gray.600"}>
                      Co- Founder 
                      </Text>
                      <Text fontSize={"xs"} color="gray.600">
                        Banglore
                      </Text>
                    </Stack>
                  </Flex>
                  <Flex gap={"12"} alignItems="center">
                    {/* <Button borderRadius={'none'} bg={'twitter.700'} color='#eff8fe' fontWeight={'medium'}>+FOLLOW</Button> */}
                    <Link fontWeight={"medium"} color="twitter.600">
                      Send Message
                    </Link>
                    <Button
                      borderRadius={"none"}
                      w="32"
                      border="1px solid #1681bf"
                      bg={"#fff"}
                      color="twitter.600"
                      fontWeight={"medium"}
                      onClick={() => setFollow2(!follow2)}
                    >
                      {follow2 ? "Following" : "Follow"}
                    </Button>
                  </Flex>
                </Flex>
                <Link float={"right"} color="twitter.600" mr={"4"} onClick={()=>navigate("#")}>
                  View All
                </Link>
              </Box>
            </div>

            {/* Second box of the body start from here */}

            <div className={styles.box2}>
              <ProfileCard />
              <Qrscanner />
              <NaukriFastForward />
              <Box
                mt={"6"}
                w="100%"
                h="120px"
                boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
                bg="#fff"
              >
                <Box
                  w="100%"
                  h="70px"
                  borderBottom={"darkgray"}
                  p="6"
                  className={styles.faq}
                >
                  <Text fontSize={"lg"} fontWeight="bold" color={"gray.600"}>
                    FAQ
                  </Text>
                </Box>
                <hr />
                <div className={styles.question}>
                  <Flex p={"4"} gap="1">
                    <Link color={"twitter.700"} fontSize={"sm"}>
                      Click Here
                    </Link>
                    <Text fontSize={"sm"}>for frequently asked questions.</Text>
                  </Flex>
                </div>
              </Box>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};


export default Body;
