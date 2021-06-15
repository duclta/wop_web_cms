import React, { useMemo } from "react";
import { Wrapper } from "@/components/base/Wrapper";
import {
  Center,
  Box,
  UnorderedList,
  Heading,
  SimpleGrid,
  Stat,
  StatArrow,
  StatGroup,
  Image,
  StatLabel,
  StatNumber,
  Flex,
  Button,
  AspectRatio,
  Avatar,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { useHomePage } from "./hooks";
import { Helmet } from "react-helmet";
import { MainGrid, SidebarNav } from "@/components/layout";
import { RiRefreshLine } from "react-icons/ri";
import Table from "antd/lib/table";
import { ViewIcon } from "@chakra-ui/icons";

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
  </Flex>
);

export const HomePage = () => {
  const {
    state: {
      listPlants,
      listCollections,
      listPosts,
      listContributors,
      columnsRequestModerator,
      listRequestModerator,
      btnRefreshRequestModeratorLoading,
      btnAcceptRequestModeratorLoading,
      currentModerator,
    },
    methods: { handleBtnRefreshRequestModeratorClick },
    modal,
  } = useHomePage({
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
        <Box mb="30px" mt="30px">
          <Heading as="h2" size="lg" fontWeight="300" mb="25px">
            Dashboard
          </Heading>
          <Box></Box>
        </Box>
        <Box>
          <StatGroup mb="30px">
            <Stat>
              <StatLabel>Plants</StatLabel>
              <StatNumber>{listPlants.length}</StatNumber>
            </Stat>
            <Stat>
              <StatLabel>Contributors</StatLabel>
              <StatNumber>{listContributors.length}</StatNumber>
            </Stat>
            <Stat>
              <StatLabel>Posts</StatLabel>
              <StatNumber>{listPosts.length}</StatNumber>
            </Stat>
            <Stat>
              <StatLabel>Collections</StatLabel>
              <StatNumber>{listCollections.length}</StatNumber>
            </Stat>
          </StatGroup>
          <SimpleGrid columns={1} spacing={10}>
            {/* <Box> */}
            {/* <Flex justifyContent="space-between" alignItems="center">
                <Heading size="sm">Requests create new plant</Heading>
                <Button
                  colorScheme="teal"
                  size="sm"
                  leftIcon={<RiRefreshLine fontSize="17px" />}
                >
                  Refresh
                </Button>
              </Flex> */}
            {/* <Box >
                <Table columns={columns} dataSource={listPosts} />
              </Box> */}
            {/* </Box> */}
            <Box>
              <Flex justifyContent="space-between" alignItems="center">
                <Heading size="sm">Requests become moderator</Heading>
                <Button
                  colorScheme="teal"
                  size="sm"
                  leftIcon={<RiRefreshLine fontSize="17px" />}
                  isLoading={btnRefreshRequestModeratorLoading}
                  onClick={handleBtnRefreshRequestModeratorClick}
                >
                  Refresh
                </Button>
              </Flex>
              <Box>
                <Table
                  columns={columnsRequestModerator}
                  dataSource={listRequestModerator}
                />
              </Box>
            </Box>
          </SimpleGrid>
        </Box>
        <Modal isOpen={modal.isOpen} onClose={modal.onClose} size="full">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Details request become moderator</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {[
                listRequestModerator.find(
                  (r) => r.user.username == currentModerator
                ),
              ].map((item) => {
                if (item)
                  return (
                    <SimpleGrid columns={2} spacing={10}>
                      <Box>
                        <Box>
                          <Heading size="sm">ID</Heading>
                          <Box>{item.id}</Box>
                        </Box>
                        <Box>
                          <Heading size="sm">Content</Heading>
                          <Box>
                            <div
                              dangerouslySetInnerHTML={{
                                __html: item.content,
                              }}
                            />
                          </Box>
                        </Box>
                      </Box>
                      <Box overflow="auto" maxH="600px">
                        <Heading size="sm">Images</Heading>
                        <Box>
                          {item.images.map((img) => (
                            <Image src={img} mb="10px" />
                          ))}
                        </Box>
                      </Box>
                    </SimpleGrid>
                  );
              })}
            </ModalBody>
            <ModalFooter>
              <Button
                colorScheme="blue"
                mr={3}
                onClick={() => modal.onAccept(currentModerator)}
                variant="outline"
                isLoading={btnAcceptRequestModeratorLoading}
              >
                Accept
              </Button>
              <Button colorScheme="blue" mr={3} onClick={modal.onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    ),
    [
      listPlants,
      listPosts,
      listCollections,
      listContributors,
      listRequestModerator,
      btnRefreshRequestModeratorLoading,
    ]
  );

  return (
    <>
      <Helmet>
        <title>Dashboard - WOP CMS</title>
      </Helmet>
      <Wrapper>
        <MainGrid compLeft={SideBar} compMid={Body} compRight={<div></div>} />
      </Wrapper>
    </>
  );
};
