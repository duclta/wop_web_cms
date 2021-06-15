import React from "react";
import { Box, Button, Center, Flex, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { routerPaths } from "@/routers";
import { Plant } from "@/models";

export const ContributorItem = (props: { data: Plant }) => {
  const { data } = props;

  return (
    <Box p={"4px"} borderWidth="1px" borderRadius="lg">
      <Box mb="10px" width="100%" d="flex" justifyContent="center">
        <Link to={`${routerPaths.contributors}/${data.tag}`}>
          <Box borderRadius="50%" overflow="hidden">
            {data.thumbnail && (
              <Image
                objectFit="cover"
                src={data.thumbnail}
                h="150px"
                w="150px"
              />
            )}
          </Box>
        </Link>
      </Box>

      <Box mb="10px" h="45px">
        <Link to={`${routerPaths.contributors}/${data.tag}`}>
          <Text
            color="#226417"
            fontWeight={500}
            fontSize="15px"
            textAlign="center"
          >
            {data.name}
          </Text>
        </Link>
      </Box>
      <Box mb="10px">
        <Flex alignItems="center" justifyContent="center" w="100%">
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
      </Box>
      <Center>
        <Link to={`${routerPaths.contributors}/${data.name}`}>
          <Button
            colorScheme="teal"
            variant="outline"
            fontSize="12px"
            h="30px"
            w="100%"
            border="none"
          >
            Follow
          </Button>
        </Link>
      </Center>
    </Box>
  );
};
