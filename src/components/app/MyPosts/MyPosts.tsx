import { EditIcon, ViewIcon } from "@chakra-ui/icons";
import {
  AspectRatio,
  Box,
  Flex,
  Heading,
  IconButton,
  Image,
  TabPanel,
} from "@chakra-ui/react";
import { Table } from "antd";
import React from "react";
import { useMyPosts } from "./hooks";

const thumbnail = (props: { src: string }) => (
  <AspectRatio ratio={4 / 3}>
    <Image src={props.src} />
  </AspectRatio>
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

export const MyPosts = () => {
  const {
    states: { columns, myPosts },
  } = useMyPosts({
    componentsRender: {
      thumbnail,
      action,
    },
  });

  return (
    <Box mb="20px">
      <Heading as="h4" size="md" color="teal" mb="15px">
        Post
      </Heading>
      <Table columns={columns} dataSource={myPosts} />
    </Box>
  );
};
