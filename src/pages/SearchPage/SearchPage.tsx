import React, { useMemo } from "react";
import { Wrapper } from "@/components/base/Wrapper";
import {
  Center,
  Box,
  UnorderedList,
  Heading,
  Text,
  Divider,
} from "@chakra-ui/react";
import { useSearchPage } from "./hooks";
import { Helmet } from "react-helmet";
import { MainGrid, SidebarNav } from "@/components/layout";
import {
  ItemRequest,
  ItemRequestLoading,
  PlantSearchItem,
  PlantSearchItemLoading,
  UserSearchItem,
  UserSearchItemLoading,
} from "@/components/app";

export const SearchPage = () => {
  const {
    state: { searchResults, query },
  } = useSearchPage();

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
        <Box mb="30px" mt="30px">
          <Heading as="h2" size="lg" fontWeight="300" mb="25px">
            Search
          </Heading>
          <Text>{`Search results for "${query}"`}</Text>
        </Box>
        <Box>
          <Box mb="20px">
            <Heading as="h4" size="md" color="teal" mb="15px">
              Plants
            </Heading>
            <UnorderedList listStyleType="none" ml="0px">
              {/* {!searchResults.plants.length &&
                [0, 1, 2].map(() => <PlantSearchItemLoading />)} */}
              {searchResults.plants.map((plant: any) => (
                <PlantSearchItem data={plant} />
              ))}
            </UnorderedList>
          </Box>
          <Divider mb="20px" />
          <Box>
            <Heading as="h4" size="md" color="teal" mb="15px">
              Users
            </Heading>
            <UnorderedList listStyleType="none" ml="0px">
              {/* {!searchResults.users.length &&
                [0, 1, 2].map(() => <UserSearchItemLoading />)} */}
              {searchResults.users.map((user: any) => (
                <UserSearchItem data={user} />
              ))}
            </UnorderedList>
          </Box>
        </Box>
      </>
    ),
    [searchResults]
  );

  return (
    <>
      <Helmet>
        <title>{`"${query}"`} - Search on World of Plant</title>
      </Helmet>
      <Wrapper>
        <MainGrid compLeft={SideBar} compMid={Body} compRight={<div></div>} />
      </Wrapper>
    </>
  );
};
