import React, { useMemo } from "react";
import { Wrapper } from "@/components/base/Wrapper";
import {
  Box,
  Divider,
  Button,
  Heading,
  Flex,
  FormControl,
  Input,
  FormLabel,
  Select,
} from "@chakra-ui/react";
import { useTabCreatePage } from "./hooks";
import { Helmet } from "react-helmet";
import { MainGrid, SidebarNav } from "@/components/layout";
import { AiFillSetting } from "react-icons/ai";
import { ImageUpload } from "@/components/app";

export const TabCreatePage = () => {
  const {
    states: { refImage },
    form: { createTabForm },
  } = useTabCreatePage();

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
        <Box mb="30px" mt="30px">
          <Heading as="h2" size="lg" fontWeight="300">
            Create tab
          </Heading>
        </Box>
        <Divider mb="30px" />
        <Box>
          <Box w="100%" maxW="450px" mb="30px">
            <form onSubmit={createTabForm.methods.handleSubmitCreateTabForm()}>
              <Box mb="30px">
                <FormControl mb="20px">
                  <FormLabel htmlFor="name" color="#2b6766" fontWeight="300">
                    Name
                  </FormLabel>
                  <Input
                    name="name"
                    placeholder="Enter name"
                    ref={createTabForm.hook.register({ required: true })}
                  />
                </FormControl>
                <FormControl mb="20px">
                  <FormLabel htmlFor="name" color="#2b6766" fontWeight="300">
                    Description
                  </FormLabel>
                  <Input
                    name="description"
                    placeholder="Enter description"
                    ref={createTabForm.hook.register({ required: true })}
                  />
                </FormControl>
                <FormControl mb="20px">
                  <FormLabel htmlFor="name" color="#2b6766" fontWeight="300">
                    Icon
                  </FormLabel>
                  <Box w="200px">
                    <ImageUpload refCustom={refImage} aspect={1} />
                  </Box>
                </FormControl>
              </Box>
              <Button
                colorScheme="teal"
                type="submit"
                isLoading={createTabForm.state.isSubmitting}
              >
                Create
              </Button>
            </form>
          </Box>
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
            Actions
          </Heading>
        </Flex>
        <Button
          colorScheme="teal"
          size="sm"
          w="100%"
          // onClick={handleBtnCreateClick}
          // isLoading={btnCreateLoading}
        >
          Create
        </Button>
      </Box>
    ),
    []
  );

  return (
    <>
      <Helmet>
        <title>Create tab - WOP CMS</title>
      </Helmet>
      <Wrapper>
        <MainGrid compLeft={SideBar} compMid={Body} compRight={Setting} />
      </Wrapper>
    </>
  );
};
