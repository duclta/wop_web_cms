import React, { useMemo } from "react";
import { Wrapper } from "@/components/base/Wrapper";
import {
  Accordion,
  Box,
  Button,
  Checkbox,
  Divider,
  Flex,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { usePlantContributePage } from "./hooks";
import { Helmet } from "react-helmet";
import { MainGrid, SidebarNav } from "@/components/layout";
import { PlantTabContributeItem } from "@/components/app";
export const PlantContributePage = () => {
  const {
    state: { plantDetails },
  } = usePlantContributePage();

  const SideBar = useMemo(
    () => (
      <Box pt="30px" position="sticky" top="70px">
        <SidebarNav />
      </Box>
    ),
    []
  );

  const Body = useMemo(
    () => (
      <>
        <Box mb="20px" mt="30px">
          <Heading as="h2" size="lg" fontSize="35px" fontWeight="500" mb="35px">
            <Text fontSize="30px">{`Contribute for `}</Text>
            <Text color="#226417">{plantDetails.name}</Text>
          </Heading>
          <Flex justifyContent="space-between" alignItems="center">
            <Box w="100%" mr="50px">
              <Flex justifyContent="space-between">
                <Checkbox colorScheme="teal" size="sm" defaultIsChecked>
                  All
                </Checkbox>
                <Button bg="transparent" size="sm" fontWeight="500">
                  View all
                </Button>
              </Flex>
              <Divider mb="10px" />
              <SimpleGrid columns={3} spacing={"10px 5px"} w="100%">
                <Checkbox colorScheme="teal" size="sm" defaultIsChecked>
                  Habitat
                </Checkbox>
                {/* <Checkbox colorScheme="teal" size="sm" defaultIsChecked>
                  Common names
                </Checkbox> */}
                <Checkbox colorScheme="teal" size="sm" defaultIsChecked>
                  Leaf
                </Checkbox>
                <Checkbox colorScheme="teal" size="sm" defaultIsChecked>
                  Trunk
                </Checkbox>
                <Checkbox colorScheme="teal" size="sm" defaultIsChecked>
                  Root
                </Checkbox>
              </SimpleGrid>
            </Box>

            <Box>
              <Button colorScheme="teal" variant="solid" size="sm">
                Post changes
              </Button>
            </Box>
          </Flex>
        </Box>
        <Divider />
        <Box>
          <Accordion
            defaultIndex={[0, 1, 2, 3, 4, 5, 5, 6, 7, 8, 10]}
            allowMultiple
          >
            {plantDetails.tabs.map((tab) => (
              <PlantTabContributeItem data={tab} />
            ))}
          </Accordion>
        </Box>
      </>
    ),
    [plantDetails]
  );

  return (
    <>
      <Helmet>
        <title>{plantDetails.name} - WOP CMS</title>
      </Helmet>
      <Wrapper>
        <MainGrid compLeft={SideBar} compMid={Body} compRight={<div></div>} />
      </Wrapper>
    </>
  );
};
