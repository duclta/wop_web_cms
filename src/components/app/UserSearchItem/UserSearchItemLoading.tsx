import React from "react";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  ListItem,
  Square,
  Skeleton,
  SkeletonText,
  SkeletonCircle,
} from "@chakra-ui/react";

export const UserSearchItemLoading = () => {
  return (
    <ListItem mb="10px">
      <Box p={"4px"} borderWidth="1px" borderRadius="lg">
        <Grid
          h="100%"
          templateRows="35px 1fr"
          templateColumns="repeat(6, 1fr)"
          gap={2}
        >
          <GridItem rowSpan={3} colSpan={1}>
            <Square size="150px" borderRadius="lg" overflow="hidden">
              <Skeleton w="100%" h="100%" />
            </Square>
          </GridItem>
          <GridItem colSpan={3}>
            <Flex alignItems="center" h="100%">
              <SkeletonCircle mt="5px" mr="5px" minW="30px" h="30px" />
              <Skeleton h="12px" w="100%" />
            </Flex>
          </GridItem>
          <GridItem colSpan={2} height="35px" />
          <GridItem colSpan={5}>
            <Box overflow="hidden" maxHeight="100px">
              <SkeletonText noOfLines={4} spacing="4" />
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </ListItem>
  );
};
