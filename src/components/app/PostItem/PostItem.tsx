import React from "react";
import {
  AspectRatio,
  Box,
  Flex,
  Grid,
  GridItem,
  Image,
  ListItem,
  Text,
} from "@chakra-ui/react";
import { Post } from "@/models";
import { Link } from "react-router-dom";
import { routerPaths } from "@/routers";
import moment from "moment";

export const PostItem = (props: { data: Post }) => {
  const { data } = props;

  return (
    <ListItem mb="10px">
      <Box p={"10px"} borderWidth="1px">
        <Grid
          h="100%"
          templateRows="20px 25px 1fr 15px"
          templateColumns="repeat(5, 1fr) 200px"
          gap={2}
        >
          <GridItem rowSpan={1} colSpan={5}>
            <Flex alignItems="center" h="100%">
              <Box
                w="20px"
                h="20px"
                overflow="hidden"
                mr="5px"
                borderRadius="50%"
              >
                <Image src={data.user.avatar} />
              </Box>
              <Box>
                <Link to={`${routerPaths.plants}/${data.id}`}>
                  <Text fontWeight={600} fontSize="12px" color="#555">
                    {data.user.name}
                  </Text>
                </Link>
              </Box>
            </Flex>
          </GridItem>
          <GridItem rowSpan={4} colSpan={1}>
            <Link to={`${routerPaths.posts}/${data.id}`}>
              <AspectRatio
                ratio={4 / 3}
                bg="gray.200"
                overflow="hidden"
                w="100%"
              >
                <Image
                  objectFit="cover"
                  src={data.thumbnail}
                  h="100%"
                  w="100%"
                />
              </AspectRatio>
            </Link>
          </GridItem>
          <GridItem rowSpan={1} colSpan={5}>
            <Box>
              <Link to={`${routerPaths.posts}/${data.id}`}>
                <Text
                  fontSize={"20px"}
                  fontWeight={600}
                  textOverflow="ellipsis"
                  noOfLines={1}
                >
                  {data.title}
                </Text>
              </Link>
            </Box>
          </GridItem>
          <GridItem rowSpan={1} colSpan={5}>
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
          <GridItem rowSpan={1} colSpan={5}>
            <Flex alignItems="flex-end" justifyContent="space-between">
              <Box>
                <Text fontSize="10px" color="gray.500">{`Posted at ${moment(
                  data.createdAt
                ).fromNow()}`}</Text>
              </Box>
            </Flex>
          </GridItem>
        </Grid>
      </Box>
    </ListItem>
  );
};
