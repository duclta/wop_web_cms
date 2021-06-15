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
} from "@chakra-ui/react";
import { useFamilyCreatePage } from "./hooks";
import { Helmet } from "react-helmet";
import { MainGrid, SidebarNav } from "@/components/layout";
import { AiFillSetting } from "react-icons/ai";

export const FamilyCreatePage = () => {
  const {
    form: { createFamilyForm },
  } = useFamilyCreatePage();

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
            Create family
          </Heading>
        </Box>
        <Divider mb="30px" />
        <Box>
          <Box w="100%" maxW="450px" mb="30px">
            <form
              onSubmit={createFamilyForm.methods.handleSubmitCreateFamilyForm()}
            >
              <Box mb="30px">
                <FormControl mb="20px">
                  <FormLabel htmlFor="name" color="#2b6766" fontWeight="300">
                    Name
                  </FormLabel>
                  <Input
                    name="family"
                    placeholder="Enter name"
                    ref={createFamilyForm.hook.register({ required: true })}
                  />
                </FormControl>
                <FormControl mb="20px">
                  <FormLabel htmlFor="name" color="#2b6766" fontWeight="300">
                    Description
                  </FormLabel>
                  <Input
                    name="description"
                    placeholder="Enter description"
                    ref={createFamilyForm.hook.register({ required: true })}
                  />
                </FormControl>
              </Box>
              <Button
                colorScheme="teal"
                type="submit"
                isLoading={createFamilyForm.state.isSubmitting}
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
        <title>Create family - WOP CMS</title>
      </Helmet>
      <Wrapper>
        <MainGrid compLeft={SideBar} compMid={Body} compRight={Setting} />
      </Wrapper>
    </>
  );
};
