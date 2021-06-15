import React, { useMemo } from "react";
import { Wrapper } from "@/components/base/Wrapper";
import {
  Box,
  Image,
  Divider,
  Flex,
  Heading,
  Text,
  Button,
  IconButton,
} from "@chakra-ui/react";
import { useCollectionDetailsPage } from "./hooks";
import { Helmet } from "react-helmet";
import { MainGrid, SidebarNav } from "@/components/layout";
import { Link } from "react-router-dom";
import { routerPaths } from "@/routers";
import moment from "moment";
import { FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa";
import { CollectionDetailsItem } from "@/components/app";
export const CollectionDetailsPage = () => {
  const {
    state: { collectionDetails },
  } = useCollectionDetailsPage();

  console.log(collectionDetails)

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
            <Text fontSize="30px">{`Collection for `}</Text>
            <Text color="#226417">{collectionDetails.name}</Text>
          </Heading>
          <Flex justifyContent="space-between" alignItems="center">
            <Flex alignItems="center" w="100%">
              <Box
                w="60px"
                h="60px"
                overflow="hidden"
                mr="15px"
                borderRadius="50%"
              >
                <Image src={collectionDetails.user.avatar} />
              </Box>
              <Box>
                <Flex alignItems="center">
                  <Link to={`${routerPaths.plants}/${collectionDetails.id}`}>
                    <Text fontWeight={600} fontSize="15px" color="#555">
                      {collectionDetails.user.name}
                    </Text>
                  </Link>
                  <Button
                    ml="10px"
                    colorScheme="teal"
                    size="sm"
                    fontSize="12px"
                    h="22px"
                  >
                    Follow
                  </Button>
                </Flex>
                <Text
                  mt="5px"
                  fontSize="13px"
                  color="gray.500"
                >{`Latest update at ${moment(
                  collectionDetails.createdAt
                ).fromNow()}`}</Text>
              </Box>
            </Flex>
            <Flex>
              <IconButton
                fontSize="25px"
                borderRadius="50%"
                mr="5px"
                color="#777"
                bg="transparent"
                aria-label="facebook"
                icon={<FaFacebook />}
              />
              <IconButton
                fontSize="25px"
                borderRadius="50%"
                mr="5px"
                color="#777"
                bg="transparent"
                aria-label="twitter"
                icon={<FaTwitter />}
              />
              <IconButton
                fontSize="25px"
                borderRadius="50%"
                color="#777"
                bg="transparent"
                aria-label="google"
                icon={<FaGoogle />}
              />
            </Flex>
          </Flex>
        </Box>
        <Divider mb="30px" />
        <Box style={{ columnCount: 3, columnGap: "20px" }} w="100%">
          {collectionDetails.images.map((image) => (
            <CollectionDetailsItem data={image} h="300px" />
          ))}
        </Box>
        <Divider mb="30px" />
      </>
    ),
    [collectionDetails]
  );

  return (
    <>
      <Helmet>
        <title>Collection for {collectionDetails.name} - WOP CMS</title>
      </Helmet>
      <Wrapper>
        <MainGrid compLeft={SideBar} compMid={Body} compRight={<div></div>} />
      </Wrapper>
    </>
  );
};
