import React from "react";
import {
  Box,
  Button,
  CircularProgress,
  CircularProgressLabel,
  Flex,
  Image,
  ListItem,
  Square,
  Text,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { routerPaths } from "@/routers";
import moment from "moment";
import { Plant } from "@/models";

export const PlantSearchItem = (props: { data: Plant }) => {
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
          <Link to={`${routerPaths.plants}/${data.tag}`}>
            <Square
              bg="gray.200"
              size="100px"
              borderRadius="lg"
              overflow="hidden"
            >
              <Image objectFit="cover" src={data.thumbnail} h="100%" w="100%" />
            </Square>
          </Link>
          <Text fontSize="17px" fontWeight="600" ml="15px" color="#226417">
            {data.name}
          </Text>
        </Flex>
        <Button colorScheme="teal" size="md">
          View details
        </Button>
      </Flex>
    </ListItem>
  );
};
