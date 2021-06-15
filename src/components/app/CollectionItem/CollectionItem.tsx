import React from "react";
import { AspectRatio, Avatar, Badge, Box, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { routerPaths } from "@/routers";
import { IoMdImages } from "react-icons/io";
import { Collection } from "@/models";

export const CollectionItem = (props: { data: Collection }) => {
  const { data } = props;

  return (
    <Box p={"4px"} borderWidth="1px" borderRadius="lg">
      <Box position="relative">
        <Link to={`${routerPaths.collections}/${data.id}`}>
          <AspectRatio
            maxW="100%"
            ratio={3 / 4}
            bg="gray.200"
            size="150px"
            borderRadius="lg"
            overflow="hidden"
          >
            <Box>
              {!data.images[0] && (
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
              {data.images[0] && (
                <Image
                  objectFit="cover"
                  src={data.images[0].url}
                  h="100%"
                  w="100%"
                />
              )}
            </Box>
          </AspectRatio>
          <Box d="flex" position="absolute" top="0" left="0" p="5px" w="100%">
            <Text
              fontSize="15px"
              fontWeight="600"
              color="#fff"
              textShadow="2px 2px #555;"
            >
              {data.name}
            </Text>
          </Box>
          <Box
            d="flex"
            justifyContent="space-between"
            alignItems="center"
            position="absolute"
            bottom="0"
            left="0"
            p="5px"
            w="100%"
          >
            <Avatar
              size="sm"
              name={data.user.name}
              src={data.user.avatar}
              mr="10px"
            />
            <Badge d="flex" alignItems="center">
              <IoMdImages />
              <Text ml="2px">{data.images.length}</Text>
            </Badge>
          </Box>
        </Link>
      </Box>
    </Box>
  );
};
