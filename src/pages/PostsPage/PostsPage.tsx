import React, { useMemo } from "react";
import { Wrapper } from "@/components/base/Wrapper";
import {
  Box,
  Heading,
  Flex,
  AspectRatio,
  IconButton,
  Image,
  Avatar,
} from "@chakra-ui/react";
import { usePostsPage } from "./hooks";
import { Helmet } from "react-helmet";
import { MainGrid, SidebarNav } from "@/components/layout";
import Table from "antd/lib/table";
import { ViewIcon, EditIcon } from "@chakra-ui/icons";

const thumbnail = (props: { src: string }) => (
  <AspectRatio ratio={4 / 3}>
    <Image src={props.src} />
  </AspectRatio>
);

const user = (props: { name: string; avatar: string }) => (
  <Flex alignItems="center">
    <Avatar src={props.avatar} size="xs" name={props.name} mr={2} />
    {props.name}
  </Flex>
);

const action = (props: {
  id: string;
  handleBtnViewActionClick: (id: string) => void;
  handleBtnEditActionClick: (id: string) => void;
}) => (
  <Flex justifyContent="space-around">
    <IconButton
      aria-label="view"
      icon={<ViewIcon fontSize="20px" color="#555" />}
      bg="transparent"
      mr="10px"
      size="50px"
      onClick={() => props.handleBtnViewActionClick(props.id)}
    />
    <IconButton
      aria-label="edit"
      icon={<EditIcon fontSize="20px" color="#555" />}
      bg="transparent"
      size="50px"
      onClick={() => props.handleBtnEditActionClick(props.id)}
    />
  </Flex>
);

export const PostsPage = () => {
  const {
    state: { listPosts, columns },
  } = usePostsPage({
    componentsRender: {
      thumbnail,
      user,
      action,
    },
  });

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
        <Box
          mb="30px"
          mt="30px"
          d="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Heading as="h2" size="lg" fontWeight="300">
            Posts
          </Heading>
          {/* <Flex justifyContent="flex-end">
            <Link to={`${routerPaths.posts}/create`}>
              <Button
                colorScheme="teal"
                size="sm"
                leftIcon={<AddIcon fontSize="12px" marginBottom="2px" />}
              >
                Create post
              </Button>
            </Link>
          </Flex> */}
        </Box>
        <Box w="100%">
          <Table columns={columns} dataSource={listPosts} />
        </Box>
      </>
    ),
    [listPosts]
  );

  return (
    <>
      <Helmet>
        <title>Posts - WOP CMS</title>
      </Helmet>
      <Wrapper>
        <MainGrid compLeft={SideBar} compMid={Body} compRight={<div></div>} />
      </Wrapper>
    </>
  );
};
