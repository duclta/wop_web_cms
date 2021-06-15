import React, { useMemo } from "react";
import { Wrapper } from "@/components/base/Wrapper";
import {
  Box,
  Image,
  Divider,
  Flex,
  Heading,
  Text,
  Button,
  IconButton,
  Textarea,
  Avatar,
} from "@chakra-ui/react";
import { usePostDetailsPage } from "./hooks";
import { Helmet } from "react-helmet";
import { MainGrid, SidebarNav } from "@/components/layout";
import { Link } from "react-router-dom";
import { routerPaths } from "@/routers";
import moment from "moment";
import { FaFacebook, FaGoogle, FaThumbsUp, FaTwitter } from "react-icons/fa";
import { RiThumbUpLine } from "react-icons/ri";
import { CommentPostItem } from "@/components/app";
export const PostDetailsPage = () => {
  const {
    state: { postDetails, refCommentBox },
    methods: { handleBtnCommentClick },
  } = usePostDetailsPage();

  const SideBar = useMemo(
    () => (
      <Box pt="30px" position="sticky" top="70px">
        <SidebarNav />
      </Box>
    ),
    []
  );

  const Body = useMemo(
    () => (
      <>
        <Box mb="20px" mt="30px">
          <Heading as="h2" size="lg" fontSize="40px" fontWeight="500" mb="25px">
            {postDetails.title}
          </Heading>
          <Flex justifyContent="space-between" alignItems="center">
            <Flex alignItems="center" w="100%">
              <Box
                w="60px"
                h="60px"
                overflow="hidden"
                mr="15px"
                borderRadius="50%"
              >
                <Image src={postDetails.user.avatar} />
              </Box>
              <Box>
                <Flex alignItems="center">
                  <Link to={`${routerPaths.plants}/${postDetails.id}`}>
                    <Text fontWeight={600} fontSize="15px" color="#555">
                      {postDetails.user.name}
                    </Text>
                  </Link>
                  <Button
                    ml="10px"
                    colorScheme="teal"
                    size="sm"
                    fontSize="12px"
                    h="22px"
                  >
                    Follow
                  </Button>
                </Flex>
                <Text
                  mt="5px"
                  fontSize="13px"
                  color="gray.500"
                >{`Posted at ${moment(postDetails.createdAt).fromNow()}`}</Text>
              </Box>
            </Flex>
            <Flex>
              <IconButton
                fontSize="25px"
                borderRadius="50%"
                mr="5px"
                color="#777"
                bg="transparent"
                aria-label="facebook"
                icon={<FaFacebook />}
              />
              <IconButton
                fontSize="25px"
                borderRadius="50%"
                mr="5px"
                color="#777"
                bg="transparent"
                aria-label="twitter"
                icon={<FaTwitter />}
              />
              <IconButton
                fontSize="25px"
                borderRadius="50%"
                color="#777"
                bg="transparent"
                aria-label="google"
                icon={<FaGoogle />}
              />
            </Flex>
          </Flex>
        </Box>
        <Divider mb="30px" />
        <Box mb="30px">
          <div dangerouslySetInnerHTML={{ __html: postDetails.content }}></div>
        </Box>
        <Divider mb="30px" />
        <Box>
          <Heading size="md" mb="20px">
            Comments
          </Heading>
          <Box mb="20px">
            {postDetails.comments.map((comment) => (
              <CommentPostItem data={comment} />
            ))}
          </Box>
          <Box mb="20px" textAlign="right">
            <Textarea
              placeholder="Enter your comment here"
              size="sm"
              resize="vertical"
              ref={refCommentBox}
            />
            <Button
              colorScheme="teal"
              size="sm"
              onClick={handleBtnCommentClick}
            >
              Comment
            </Button>
          </Box>
        </Box>
      </>
    ),
    [postDetails]
  );

  return (
    <>
      <Helmet>
        <title>{postDetails.title} - WOP CMS</title>
      </Helmet>
      <Wrapper>
        <MainGrid compLeft={SideBar} compMid={Body} compRight={<div></div>} />
      </Wrapper>
    </>
  );
};
