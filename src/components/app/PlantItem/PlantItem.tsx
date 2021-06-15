import React from "react";
import {
  AspectRatio,
  Box,
  Button,
  Center,
  CircularProgress,
  CircularProgressLabel,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { routerPaths } from "@/routers";
import { Plant } from "@/models";

export const PlantItem = (props: { data: Plant }) => {
  const { data } = props;

  return (
    <Box p={"4px"} borderWidth="1px" borderRadius="lg">
      <Box mb="10px">
        <Link to={`${routerPaths.plants}/${data.tag}`}>
          <AspectRatio
            maxW="100%"
            ratio={4 / 3}
            bg="gray.200"
            size="150px"
            borderRadius="lg"
            overflow="hidden"
          >
            <Box>
              {!data.thumbnail && (
                <Box
                  h="100%"
                  w="100%"
                  bg="gray.100"
                  d="flex"
                  alignItems="center"
                  justifyContent="center"
                  color="whitesmoke.300"
                  fontWeight="600"
                >
                  EMPTY
                </Box>
              )}
              {data.thumbnail && (
                <Image
                  objectFit="cover"
                  src={data.thumbnail}
                  h="100%"
                  w="100%"
                />
              )}
            </Box>
          </AspectRatio>
        </Link>
      </Box>
      <Box mb="10px">
        <Flex alignItems="center" justifyContent="space-between" w="100%">
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
          </Box>
        </Flex>
      </Box>
      <Box mb="10px" h="45px">
        <Link to={`${routerPaths.plants}/${data.id}`}>
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
            Contribute now
          </Button>
        </Link>
      </Center>
    </Box>
  );
};
