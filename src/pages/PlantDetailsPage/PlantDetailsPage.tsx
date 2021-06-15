import React, { useMemo } from "react";
import { Wrapper } from "@/components/base/Wrapper";
import {
  Accordion,
  Box,
  Button,
  CircularProgress,
  CircularProgressLabel,
  Divider,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import { usePlantDetailsPage } from "./hooks";
import { Helmet } from "react-helmet";
import { MainGrid, SidebarNav } from "@/components/layout";
import { CheckIcon } from "@chakra-ui/icons";
import moment from "moment";
import { PlantTabItem } from "@/components/app";
import { Link } from "react-router-dom";
import { routerPaths } from "@/routers";
export const PlantDetailsPage = () => {
  const {
    state: { plantDetails, btnRequestIsLoading },
    methods: { handleBtnRequestClick },
  } = usePlantDetailsPage();

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
          <Heading as="h2" size="lg" fontSize="35px" fontWeight="500" mb="25px">
            {plantDetails.name}
          </Heading>
          <Flex justifyContent="space-between" alignItems="center">
            <Box>
              <Box>
                <Flex mb="15px">
                  <CircularProgress
                    size={35}
                    value={50}
                    color="green.400"
                    mr={"15px"}
                  >
                    <CircularProgressLabel fontSize="10px">
                      {plantDetails.progress === 100 ? (
                        <CheckIcon fontSize="15px" color="green.400" />
                      ) : (
                        `${50}%`
                      )}
                    </CircularProgressLabel>
                  </CircularProgress>
                  <Box>
                    <Flex
                      justifyContent="flex-end"
                      alignItems="center"
                      h="100%"
                    >
                      <Box mr="15px">
                        <Text d="inline" fontWeight="600" fontSize="14px">
                          {plantDetails.requestCount}
                        </Text>
                        &nbsp;
                        <Text d="inline" fontWeight="300" fontSize="12px">
                          request
                        </Text>
                      </Box>
                      <Box>
                        <Text d="inline" fontWeight="600" fontSize="14px">
                          {plantDetails.contributeCount}
                        </Text>
                        &nbsp;
                        <Text d="inline" fontWeight="300" fontSize="12px">
                          contribute
                        </Text>
                      </Box>
                    </Flex>
                  </Box>
                </Flex>
                <Box>
                  <Text
                    fontSize="12px"
                    color="gray.500"
                  >{`Last updated at ${moment(
                    plantDetails.updatedAt
                  ).fromNow()}`}</Text>
                </Box>
              </Box>
            </Box>
            <Box>
              <Button
                colorScheme="teal"
                variant="outline"
                size="sm"
                mr="15px"
                onClick={handleBtnRequestClick}
                isLoading={btnRequestIsLoading}
              >
                Request
              </Button>
              <Link to={`${routerPaths.plants}/contribute/${plantDetails.tag}`}>
                <Button colorScheme="teal" variant="solid" size="sm">
                  Contribute
                </Button>
              </Link>
            </Box>
          </Flex>
        </Box>
        <Divider />
        <Box>
          <Accordion
            defaultIndex={[0, 1, 2, 3, 4, 5, 5, 6, 7, 8]}
            allowMultiple
          >
            {plantDetails.tabs.map((tab) => (
              <PlantTabItem data={tab} />
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
