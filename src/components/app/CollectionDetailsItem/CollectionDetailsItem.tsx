import React from "react";
import { Badge, Box, Image, Text } from "@chakra-ui/react";
import { CollectionImage } from "@/models";
import { TimeIcon } from "@chakra-ui/icons";
import moment from "moment";

export const CollectionDetailsItem = (props: {
  data: CollectionImage;
  h?: string;
}) => {
  const { data, h } = props;

  return (
    <Box
      borderRadius="lg"
      d="inline-block"
      w="100%"
      h={h ? h : "auto"}
      mb="20px"
      position="relative"
    >
      <Box borderRadius="lg" overflow="hidden" h="100%">
        <Image objectFit="cover" src={data.url} h="100%" w="100%" />
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
        <Badge d="flex" alignItems="center">
          <TimeIcon />
          <Text ml="2px">{moment(data.createdAt).fromNow()}</Text>
        </Badge>
      </Box>
    </Box>
  );
};
