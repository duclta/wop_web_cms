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
} from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import { MainGrid, SidebarNav } from "@/components/layout";
import { Link } from "react-router-dom";
import { PlantSearchItem, PostItem } from "@/components/app";
import { Plant, Post } from "@/models";
export const ContributeDetailsPage = () => {
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

  const posts: Post[] = [
    {
      id: "00002",
      title: "Phalaenopsis hieroglyphica",
      user: {
        name: "James Johnson",
        avatar:
          "https://image.tmdb.org/t/p/w235_and_h235_face/qvWv4ohokCGX6PxVqJhVugZNRqI.jpg",
      },
      description:
        "Phalaenopsis hieroglyphica is a species of orchid native to the Philippines, belonging to the Phalaenopsis hieroglyphica. This species has milky white eyebrows with spots.",
      thumbnail:
        "https://cdn.britannica.com/45/123445-050-37A360E8/Moth-orchid.jpg",
      createdAt: new Date(Date.now() - 20000),
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
              <Image src="https://image.tmdb.org/t/p/w235_and_h235_face/qvWv4ohokCGX6PxVqJhVugZNRqI.jpg" />
            </Box>
            <Box>
              <Flex alignItems="center">
                <Link to={``}>
                  <Text fontWeight={600} fontSize="15px" color="#555">
                    James Johnson
                  </Text>
                </Link>
              </Flex>
              <Text
                mt="5px"
                fontSize="13px"
                color="gray.500"
              >{`98 contribute`}</Text>
            </Box>
          </Flex>
          <Button colorScheme="teal" variant="outline" size="sm" mr="5px">
            Sponsor
          </Button>
          <Button colorScheme="teal" size="sm">
            Follow
          </Button>
        </Flex>
      </Box>
      <Box>
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
        <Box mb="20px">
          <Heading as="h4" size="md" color="teal" mb="15px">
            Post
          </Heading>
          <UnorderedList listStyleType="none" ml="0px">
            {posts.map((plant: Post) => (
              <PostItem data={plant} />
            ))}
          </UnorderedList>
        </Box>
      </Box>
    </>
  );

  return (
    <>
      <Helmet>
        <title>James Johnson - WOP CMS</title>
      </Helmet>
      <Wrapper>
        <MainGrid compLeft={SideBar} compMid={Body} compRight={<div></div>} />
      </Wrapper>
    </>
  );
};
