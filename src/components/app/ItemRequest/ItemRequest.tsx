import React from "react";
import {
  Box,
  Button,
  CircularProgress,
  CircularProgressLabel,
  Flex,
  Grid,
  GridItem,
  Image,
  ListItem,
  Square,
  Text,
} from "@chakra-ui/react";
import { Request } from "@/models/request";
import { CheckIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { routerPaths } from "@/routers";
import moment from "moment";

export const ItemRequest = (props: { data: Request }) => {
  const { data } = props;

  return (
    <ListItem mb="10px">
      <Box p={"4px"} borderWidth="1px" borderRadius="lg">
        <Grid
          h="100%"
          templateRows="35px 1fr 35px"
          templateColumns="repeat(6, 1fr)"
          gap={2}
        >
          <GridItem rowSpan={3} colSpan={1}>
            <Link to={`${routerPaths.plants}/${data.id}`}>
              <Square
                bg="gray.200"
                size="150px"
                borderRadius="lg"
                overflow="hidden"
              >
                <Image
                  objectFit="cover"
                  src={data.thumnail}
                  h="100%"
                  w="100%"
                />
              </Square>
            </Link>
          </GridItem>
          <GridItem colSpan={3}>
            <Flex alignItems="center" h="100%">
              <CircularProgress
                size={30}
                value={data.progress}
                color="green.400"
                mr={"5px"}
              >
                <CircularProgressLabel>
                  {data.progress === 100 ? (
                    <CheckIcon fontSize="12px" color="green.400" />
                  ) : (
                    `${data.progress}%`
                  )}
                </CircularProgressLabel>
              </CircularProgress>
              <Box>
                <Link to={`${routerPaths.plants}/${data.id}`}>
                  <Text color="#226417" fontWeight={500}>
                    {data.name}
                  </Text>
                </Link>
              </Box>
            </Flex>
          </GridItem>
          <GridItem colSpan={2} height="35px">
            <Flex justifyContent="flex-end" alignItems="center" h="100%">
              <Box mr="15px">
                <Text d="inline" fontWeight="600" fontSize="12px">
                  {data.requestCount}
                </Text>
                &nbsp;
                <Text d="inline" fontWeight="300" fontSize="10px">
                  request
                </Text>
              </Box>
              <Box>
                <Text d="inline" fontWeight="600" fontSize="12px">
                  {data.contributeCount}
                </Text>
                &nbsp;
                <Text d="inline" fontWeight="300" fontSize="10px">
                  contribute
                </Text>
              </Box>
            </Flex>
          </GridItem>
          <GridItem colSpan={5}>
            <Box overflow="hidden" maxHeight={"100px"}>
              <Text
                fontSize={"14px"}
                fontWeight={300}
                color="#444"
                textOverflow="ellipsis"
              >
                {data.description}
              </Text>
            </Box>
          </GridItem>
          <GridItem colSpan={5}>
            <Flex alignItems="flex-end" justifyContent="space-between">
              <Box>
                <Text
                  fontSize="10px"
                  color="gray.500"
                >{`Last updated at ${moment(data.updatedAt).fromNow()}`}</Text>
              </Box>
              <Box>
                <Button
                  colorScheme="teal"
                  variant="outline"
                  fontSize="12px"
                  h="30px"
                >
                  Contribute now
                </Button>
              </Box>
            </Flex>
          </GridItem>
        </Grid>
      </Box>
    </ListItem>
  );
};
