import React from "react";
import { Wrapper } from "@/components/base/Wrapper";
import { Center, Box, Heading, SimpleGrid } from "@chakra-ui/react";
import { useContribute } from "./hooks";
import { Helmet } from "react-helmet";
import { MainGrid, SidebarNav } from "@/components/layout";
import { ContributorItem, PlantItem } from "@/components/app";
import { Plant } from "@/models";

export const ContributorsPage = () => {
  // const {} = useContribute();

  const SideBar = () => (
    <Box pt="30px" position="sticky" top="70px">
      <SidebarNav />
    </Box>
  );

  const listContributors: Plant[] = [
    {
      name: "James Johnson",
      contributeCount: 98,
      thumbnail:
        "https://image.tmdb.org/t/p/w235_and_h235_face/qvWv4ohokCGX6PxVqJhVugZNRqI.jpg",
    },
  ];
  const Body = () => (
    <>
      <Box mb="30px" mt="30px">
        <Heading as="h2" size="lg" fontWeight="300" mb="25px">
          Contributors
        </Heading>
      </Box>
      <Box>
        <SimpleGrid columns={3} spacing="20px">
          {listContributors.map((plant) => (
            <ContributorItem data={plant} />
          ))}
        </SimpleGrid>
      </Box>
    </>
  );

  return (
    <>
      <Helmet>
        <title>Contributors - WOP CMS</title>
      </Helmet>
      <Wrapper>
        <MainGrid
          compLeft={<SideBar />}
          compMid={<Body />}
          compRight={<div></div>}
        />
      </Wrapper>
    </>
  );
};
