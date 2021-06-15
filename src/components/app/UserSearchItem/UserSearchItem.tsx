import React from "react";
import { Button, Flex, Image, ListItem, Square, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { routerPaths } from "@/routers";
import { User } from "@/models";
import avatarDefault from "@/assets/images/avatar_default.svg";

export const UserSearchItem = (props: { data: User }) => {
  const { data } = props;

  return (
    <ListItem mb="10px">
      <Flex
        p={"4px"}
        w="100%"
        borderWidth="1px"
        borderRadius="lg"
        alignItems="center"
        justifyContent="space-between"
      >
        <Flex alignItems="center">
          <Link to={`${routerPaths.contributors}/${data.username}`}>
            <Square
              bg="gray.200"
              size="100px"
              borderRadius="50%"
              overflow="hidden"
            >
              <Image
                objectFit="cover"
                src={data.profile ? data.profile.avatar : avatarDefault}
                h="100%"
                w="100%"
              />
            </Square>
          </Link>
          <Text fontSize="17px" fontWeight="600" ml="15px" color="#226417">
            {data.username}
          </Text>
        </Flex>
        <Button colorScheme="teal" size="md">
          View details
        </Button>
      </Flex>
    </ListItem>
  );
};
