import React, { useMemo } from "react";
import { Wrapper } from "@/components/base/Wrapper";
import { Center, Box, UnorderedList, Heading } from "@chakra-ui/react";
import { ItemRequest, ItemRequestLoading } from "@/components/app/ItemRequest";
import { useContribute } from "./hooks";
import { Helmet } from "react-helmet";
import { MainGrid, SidebarNav } from "@/components/layout";

export const NewsPage = () => {
  const {
    state: { listRequest },
  } = useContribute();

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
            News
          </Heading>
          <Box></Box>
        </Box>
        <Center>
          <Box>
            <UnorderedList listStyleType="none" ml="0px">
              {!listRequest.length &&
                [0, 1, 2, 3, 4].map(() => <ItemRequestLoading />)}
              {listRequest.map((request) => (
                <ItemRequest data={request} />
              ))}
            </UnorderedList>
          </Box>
        </Center>
      </>
    ),
    [listRequest]
  );

  return (
    <>
      <Helmet>
        <title>News - WOP CMS</title>
      </Helmet>
      <Wrapper>
        <MainGrid compLeft={SideBar} compMid={Body} compRight={<div></div>} />
      </Wrapper>
    </>
  );
};
