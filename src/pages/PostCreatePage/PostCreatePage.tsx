import React, { useMemo } from "react";
import { Wrapper } from "@/components/base/Wrapper";
import {
  Box,
  Divider,
  EditablePreview,
  Editable,
  EditableInput,
  Button,
  Heading,
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Flex,
  Text,
} from "@chakra-ui/react";
import { usePostCreatePage } from "./hooks";
import { Helmet } from "react-helmet";
import { MainGrid, SidebarNav } from "@/components/layout";
import { QuillEditor } from "@/components/base";
import { Select } from "antd";
import { ImageUpload } from "@/components/app";
import { AiFillSetting } from "react-icons/ai";
import { RiPlantFill } from "react-icons/ri";
import { BsImageFill } from "react-icons/bs";

export const PostCreatePage = () => {
  const {
    state: {
      listPlantNames,
      refTitleInput,
      refPostContent,
      refImage,
      btnPublishLoading,
    },
    methods: { handleBtnPublishClick },
  } = usePostCreatePage();

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
          <Editable
            size="lg"
            fontSize="40px"
            fontWeight="500"
            mb="25px"
            placeholder="Title of post"
          >
            <EditablePreview />
            <EditableInput ref={refTitleInput} />
          </Editable>
        </Box>
        <Divider mb="30px" />
        <Box>
          <QuillEditor refCustom={refPostContent} />
        </Box>
      </>
    ),
    []
  );

  const Setting = useMemo(
    () => (
      <Box mt="30px">
        <Flex alignItems="center" mb="10px" p="0 16px">
          <AiFillSetting width="25px" height="25px" />
          <Heading size="sm" ml="5px">
            Post setting
          </Heading>
        </Flex>
        <Accordion mb="20px" defaultIndex={[0, 1, 2, 3]} allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  d="flex"
                  alignItems="center"
                  flex="1"
                  textAlign="left"
                  color="#555"
                >
                  <RiPlantFill width="15px" height="15px" />
                  <Text ml="5px" fontSize="14px">
                    Plants
                  </Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Select
                mode="multiple"
                showArrow
                style={{ width: "100%" }}
                options={listPlantNames}
              />
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  d="flex"
                  alignItems="center"
                  flex="1"
                  textAlign="left"
                  color="#555"
                >
                  <BsImageFill width="15px" height="15px" />
                  <Text ml="5px" fontSize="14px">
                    Thumbnail
                  </Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <ImageUpload refCustom={refImage} aspect={1} />
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        <Button
          colorScheme="teal"
          variant="outline"
          size="sm"
          w="100%"
          mb="10px"
        >
          Preview
        </Button>
        <Button
          colorScheme="teal"
          size="sm"
          w="100%"
          onClick={handleBtnPublishClick}
          isLoading={btnPublishLoading}
        >
          Publish this post
        </Button>
      </Box>
    ),
    [listPlantNames]
  );

  return (
    <>
      <Helmet>
        <title>Create post - WOP CMS</title>
      </Helmet>
      <Wrapper>
        <MainGrid compLeft={SideBar} compMid={Body} compRight={Setting} />
      </Wrapper>
    </>
  );
};
