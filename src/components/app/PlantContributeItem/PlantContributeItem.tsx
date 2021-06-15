import React, { useEffect, useState } from "react";
import { Box, Flex, GridItem, IconButton, Image, Text } from "@chakra-ui/react";
import { PlantContribute } from "@/models";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { usePlantContributeItem } from "./hooks";
import services from "@/services";

export const PlantContributeItem = (props: { data: PlantContribute }) => {
  const { data } = props;
  const [avatar, setAvatar] = useState(undefined);

  useEffect(() => {
    (async () => {
      const avatar = (
        await services.user.fetchUserDetails({ username: data.user.name })
      ).profile.avata;
      setAvatar(avatar);
    })();
  });

  const {
    states: { btnUpVoteIsLoading, btnDownVoteIsLoading },
    methods: { handleBtnUpVoteClick, handleBtnDownVoteClick },
  } = usePlantContributeItem({ data });

  return (
    <GridItem rowSpan={2} colSpan={1}>
      <Box d="flex" alignItems="center" mb="5px">
        <Box w="30px" h="30px" borderRadius="50%" overflow="hidden" mr="10px">
          <Image src={avatar} objectFit="cover" />
        </Box>
        <Flex borderRadius="5px" bg="#EAEAEA" w="100%">
          <Box mr="20px">
            <Flex alignItems="center" mb="5px">
              <IconButton
                aria-label="up vote"
                icon={<ChevronUpIcon fontSize="25px" color="#555" />}
                bg="transparent"
                mr="2px"
                size="50px"
                onClick={handleBtnUpVoteClick}
                isLoading={btnUpVoteIsLoading}
              />
              <Text fontSize="12px" color="#777">
                {data.upVote}
              </Text>
            </Flex>
            <Flex alignItems="center">
              <IconButton
                aria-label="down vote"
                icon={<ChevronDownIcon fontSize="25px" color="#555" />}
                bg="transparent"
                mr="2px"
                size="50px"
                onClick={handleBtnDownVoteClick}
                isLoading={btnDownVoteIsLoading}
              />
              <Text fontSize="12px" color="#777">
                {data.downVote}
              </Text>
            </Flex>
          </Box>
          <Flex alignItems="center" p="5px">
            {data.value.includes("http") ? (
              <Image src={data.value} maxWidth="100px" maxHeight="100px" />
            ) : (
              <Text fontSize="16px" fontWeight="600">
                {data.value}
              </Text>
            )}
          </Flex>
        </Flex>
      </Box>
    </GridItem>
  );
};
