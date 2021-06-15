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
  Button,
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
} from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import { MainGrid, SidebarNav } from "@/components/layout";
import Table from "antd/lib/table";
import { ViewIcon, EditIcon, AddIcon } from "@chakra-ui/icons";
import { usePlantsPage } from "./hooks";
import { Link } from "react-router-dom";
import { routerPaths } from "@/routers";
import { BiTrash } from "react-icons/bi";

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
  handleBtnRemoveActionClick: (id: string) => void;
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
      mr="10px"
      size="50px"
      onClick={() => props.handleBtnEditActionClick(props.id)}
    />
    <IconButton
      aria-label="remove"
      icon={<BiTrash fontSize="22px" color="#555" />}
      bg="transparent"
      size="50px"
      onClick={() => props.handleBtnRemoveActionClick(props.id)}
    />
  </Flex>
);

export const PlantsPage = () => {
  const {
    state: { listPlants, columns, alertDialogRemove },
    methods: { alertDialogRemoveMethods },
  } = usePlantsPage({
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
            Plants
          </Heading>
          <Flex justifyContent="flex-end">
            <Link to={`${routerPaths.plants}/create`}>
              <Button
                colorScheme="teal"
                size="sm"
                leftIcon={<AddIcon fontSize="12px" marginBottom="2px" />}
              >
                Create plant
              </Button>
            </Link>
          </Flex>
        </Box>
        <Box w="100%">
          <Table columns={columns} dataSource={listPlants} />
        </Box>
        <AlertDialog
          motionPreset="slideInBottom"
          leastDestructiveRef={alertDialogRemove.cancelRef}
          onClose={alertDialogRemoveMethods.onClose}
          isOpen={alertDialogRemove.isOpen}
          isCentered
        >
          <AlertDialogOverlay />
          <AlertDialogContent>
            <AlertDialogHeader>Warning</AlertDialogHeader>
            <AlertDialogCloseButton />
            <AlertDialogBody>
              Are you sure you want to delete it?
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button
                ref={alertDialogRemove.cancelRef}
                onClick={alertDialogRemoveMethods.onClose}
              >
                No
              </Button>

              <Button
                colorScheme="red"
                ml={3}
                onClick={alertDialogRemoveMethods.onYes}
              >
                Yes
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </>
    ),
    [listPlants]
  );

  return (
    <>
      <Helmet>
        <title>Plants - WOP CMS</title>
      </Helmet>
      <Wrapper>
        <MainGrid compLeft={SideBar} compMid={Body} compRight={<div></div>} />
      </Wrapper>
    </>
  );
};
