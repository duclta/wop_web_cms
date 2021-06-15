import React, { useMemo } from "react";
import { Wrapper } from "@/components/base/Wrapper";
import {
  Box,
  Divider,
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
import { useCollectionCreatePage } from "./hooks";
import { Helmet } from "react-helmet";
import { MainGrid, SidebarNav } from "@/components/layout";
import { Select } from "antd";
import { MultiImagesUpload } from "@/components/app";
import { AiFillSetting } from "react-icons/ai";
import { RiPlantFill } from "react-icons/ri";

export const CollectionCreatePage = () => {
  const {
    state: { listPlantNames, btnPublishLoading, refImage, refTag },
    methods: { handleBtnPublishClick, handleSelectPlantChange },
  } = useCollectionCreatePage();

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
          <Heading as="h2" size="lg" fontWeight="300" mb="25px">
            Create collection
          </Heading>
        </Box>
        <Divider mb="30px" />
        <Box>
          <MultiImagesUpload refCustom={refImage} />
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
            Collection setting
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
                showArrow
                style={{ width: "100%" }}
                options={listPlantNames}
                ref={refTag}
                onChange={handleSelectPlantChange}
              />
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
          Publish this collection
        </Button>
      </Box>
    ),
    [listPlantNames]
  );

  return (
    <>
      <Helmet>
        <title>Create collection - WOP CMS</title>
      </Helmet>
      <Wrapper>
        <MainGrid compLeft={SideBar} compMid={Body} compRight={Setting} />
      </Wrapper>
    </>
  );
};
