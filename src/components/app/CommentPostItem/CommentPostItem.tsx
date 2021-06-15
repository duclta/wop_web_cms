import React from "react";
import { Avatar, Box, Flex, IconButton, Text } from "@chakra-ui/react";
import { PostComment } from "@/models";
import { RiThumbDownLine, RiThumbUpFill, RiThumbUpLine } from "react-icons/ri";
import { useCommentPostItem } from "./hooks";
import moment from "moment";

export const CommentPostItem = (props: { data: PostComment }) => {
  const { data } = props;
  const {
    states: { comment, btnLikeLoading, isLiked },
    methods: { handleBtnLikeClick: handleBtnLikeOrDislikeClick },
  } = useCommentPostItem(data);

  return (
    <Box p="15px" bg="#F0F2F5" mb="10px" borderRadius="10px">
      <Box d="flex" mb="5px">
        <Avatar
          size="sm"
          name={comment.user.name}
          src={comment.user.avatar}
          mr="10px"
        />
        <Text fontSize="15px">{comment.content}</Text>
      </Box>
      <Box
        d="flex"
        alignItems="flex-end"
        justifyContent="space-between"
        mt="10px"
      >
        <Box>
          <Text fontSize="10px" color="#555">
            {moment(comment.createdAt).fromNow()}
          </Text>
        </Box>
        <Flex>
          <IconButton
            bg="transparent"
            aria-label="like"
            icon={isLiked ? <RiThumbUpFill /> : <RiThumbUpLine />}
            mr="5px"
            w="20px"
            h="20px"
            onClick={handleBtnLikeOrDislikeClick}
            loading={btnLikeLoading}
          />
          <Text fontSize="10px" color="#555">
            {comment.like}
          </Text>
        </Flex>
      </Box>
    </Box>
  );
};
