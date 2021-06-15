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
  Flex,
  Link,
  FormControl,
  Input,
  FormLabel,
  Select,
} from "@chakra-ui/react";
import { useAttributeCreatePage } from "./hooks";
import { Helmet } from "react-helmet";
import { MainGrid, SidebarNav } from "@/components/layout";
import { AiFillSetting } from "react-icons/ai";
import { AddIcon } from "@chakra-ui/icons";
import { routerPaths } from "@/routers";

export const AttributeCreatePage = () => {
  const {
    form: { createAttributeForm },
  } = useAttributeCreatePage();

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
            Attributes
          </Heading>
        </Box>
        <Divider mb="30px" />
        <Box>
          <Box w="100%" maxW="450px" mb="30px">
            <form
              onSubmit={createAttributeForm.methods.handleSubmitCreateAttributeForm()}
            >
              <Box mb="30px">
                <FormControl mb="20px">
                  <FormLabel htmlFor="name" color="#2b6766" fontWeight="300">
                    Name
                  </FormLabel>
                  <Input
                    name="name"
                    placeholder="Enter name"
                    ref={createAttributeForm.hook.register({ required: true })}
                  />
                </FormControl>
                <FormControl mb="20px">
                  <FormLabel htmlFor="name" color="#2b6766" fontWeight="300">
                    Description
                  </FormLabel>
                  <Input
                    name="description"
                    placeholder="Enter description"
                    ref={createAttributeForm.hook.register({ required: true })}
                  />
                </FormControl>
                <FormControl mb="20px">
                  <FormLabel htmlFor="name" color="#2b6766" fontWeight="300">
                    Type
                  </FormLabel>
                  <Select
                    placeholder="Select type"
                    ref={createAttributeForm.hook.register({ required: true })}
                  >
                    <option value="string">string</option>
                    <option value="number">number</option>
                    <option value="boolean">boolean</option>
                  </Select>
                </FormControl>
              </Box>
              <Button
                colorScheme="teal"
                type="submit"
                isLoading={createAttributeForm.state.isSubmitting}
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
        <title>Create attribute - WOP CMS</title>
      </Helmet>
      <Wrapper>
        <MainGrid compLeft={SideBar} compMid={Body} compRight={Setting} />
      </Wrapper>
    </>
  );
};
