import React from "react";
import {
  Box,
  Flex,
  Skeleton,
  SkeletonText,
  SkeletonCircle,
  AspectRatio,
} from "@chakra-ui/react";

export const PlantTabContributeItemLoading = () => {
  return (
    <Box p={"4px"} borderWidth="1px" borderRadius="lg">
      <Box mb="10px">
        <AspectRatio
          maxW="100%"
          ratio={4 / 3}
          bg="gray.200"
          size="150px"
          borderRadius="lg"
          overflow="hidden"
        >
          <Skeleton w="100%" h="100%" />
        </AspectRatio>
      </Box>
      <Box mb="10px">
        <Flex alignItems="center" justifyContent="space-between" w="100%">
          <SkeletonCircle mt="5px" mr="5px" minW="30px" h="30px" />
          <Box w="100%">
            <Flex justifyContent="flex-end" alignItems="center" w="100%">
              <SkeletonText noOfLines={1} spacing="4" w="75%" />
            </Flex>
          </Box>
        </Flex>
      </Box>
      <Box mb="10px" h="40px">
        <SkeletonText noOfLines={3} spacing="4" w="100%" />
      </Box>
      <Box w="70%" h="30px" />
    </Box>
  );
};
