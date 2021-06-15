import React, { useMemo } from "react";
import { Wrapper } from "@/components/base/Wrapper";
import {
  Box,
  Button,
  Image,
  Flex,
  Text,
  Heading,
  UnorderedList,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import { MainGrid, SidebarNav } from "@/components/layout";
import { Link } from "react-router-dom";
import { PlantSearchItem, MyPosts, MyCollections } from "@/components/app";
import { Plant } from "@/models";
import { useMyPosts } from "./hooks";

export const MyAccount = () => {

  const SideBar = useMemo(
    () => (
      <Box pt="30px" position="sticky" top="70px">
        <SidebarNav />
      </Box>
    ),
    []
  );

  const plants: Plant[] = [
    {
      name: "Phalaenopsis hieroglyphica",
      thumbnail:
        "https://upload.wikimedia.org/wikipedia/commons/a/ad/Phalaenopsis_hieroglyphica_toapel.jpg",
    },
  ];

  const Body = (
    <>
      <Box mb="20px" mt="30px">
        <Flex justifyContent="space-between" alignItems="center">
          <Flex alignItems="center" w="100%">
            <Box
              w="60px"
              h="60px"
              overflow="hidden"
              mr="15px"
              borderRadius="50%"
            >
              <Image src="https://s25.q4cdn.com/505856937/files/images/leadership/James-D.-Reed.jpg" />
            </Box>
            <Box>
              <Flex alignItems="center">
                <Link to={``}>
                  <Text fontWeight={600} fontSize="15px" color="#555">
                    Simon
                  </Text>
                </Link>
              </Flex>
              <Text
                mt="5px"
                fontSize="13px"
                color="gray.500"
              >{`125 contribute`}</Text>
            </Box>
          </Flex>
          <Button colorScheme="teal" variant="outline" size="sm">
            Settings
          </Button>
        </Flex>
      </Box>
      <Box>
        <Tabs variant="soft-rounded" colorScheme="green">
          <TabList>
            <Tab>Plants</Tab>
            <Tab>Posts</Tab>
            <Tab>Collection</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Box mb="20px">
                <Heading as="h4" size="md" color="teal" mb="15px">
                  Plants
                </Heading>
                <UnorderedList listStyleType="none" ml="0px">
                  {plants.map((plant: Plant) => (
                    <PlantSearchItem data={plant} />
                  ))}
                </UnorderedList>
              </Box>
            </TabPanel>
            <TabPanel>
              <MyPosts />
            </TabPanel>
            <TabPanel>
              <MyCollections />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </>
  );

  return (
    <>
      <Helmet>
        <title>My Account - WOP CMS</title>
      </Helmet>
      <Wrapper>
        <MainGrid compLeft={SideBar} compMid={Body} compRight={<div></div>} />
      </Wrapper>
    </>
  );
};
