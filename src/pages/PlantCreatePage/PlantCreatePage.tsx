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
  Text
} from "@chakra-ui/react";
import { Select as SelectMulti } from "antd";
import { usePlantCreatePage } from "./hooks";
import { Helmet } from "react-helmet";
import { MainGrid, SidebarNav } from "@/components/layout";
import { AiFillSetting } from "react-icons/ai";
import { USERNAME } from "@/constants";
import { Tabs } from "antd";
import { Attribute } from "@/models";

const { TabPane } = Tabs;

const attribute = (props: {
  listAttributes: Attribute[];
  handleChange: any;
}) => {
  const { listAttributes, handleChange } = props;
  return (
    <>
      <Text>Choose attributes</Text>
      <SelectMulti
        mode="multiple"
        showArrow
        style={{ width: "100%" }}
        options={listAttributes.map((attr) => {
          return {
            label: attr.name,
            value: attr.name,
          };
        })}
        size="large"
        onChange={handleChange}
      />
    </>
  );
};

export const PlantCreatePage = () => {
  const {
    states: { families, listTabs, panes },
    form: { createPlantForm },
    methods: { handleAddTabsClick, handleTabsSelectChange },
  } = usePlantCreatePage({
    renderComponents: {
      attribute,
    },
  });

  const SideBar = useMemo(
    () => (
      <Box pt="30px" position="sticky" top="70px">
        <SidebarNav />
      </Box>
    ),
    []
  );

  console.log(listTabs);

  const Body = useMemo(
    () => (
      <>
        <Box mb="30px" mt="30px">
          <Heading as="h2" size="lg" fontWeight="300">
            Create plant
          </Heading>
        </Box>
        <Divider mb="30px" />
        <Box>
          <Box w="100%" maxW="450px" mb="30px">
            <form
              onSubmit={createPlantForm.methods.handleSubmitCreatePlantForm()}
            >
              <Box mb="30px">
                <FormControl mb="20px">
                  <FormLabel htmlFor="name" color="#2b6766" fontWeight="300">
                    Name
                  </FormLabel>
                  <Input
                    name="tag"
                    placeholder="Enter name"
                    ref={createPlantForm.hook.register({ required: true })}
                  />
                </FormControl>
                <FormControl mb="20px">
                  <FormLabel htmlFor="name" color="#2b6766" fontWeight="300">
                    Family
                  </FormLabel>
                  <Select
                    placeholder="Select family"
                    name="family"
                    ref={createPlantForm.hook.register({ required: true })}
                  >
                    {families.map((family) => (
                      <option value={family.name}>{family.name}</option>
                    ))}
                  </Select>
                </FormControl>
                <FormControl mb="20px">
                  <FormLabel htmlFor="name" color="#2b6766" fontWeight="300">
                    Tabs
                  </FormLabel>
                  <Flex mb="10px">
                    <SelectMulti
                      mode="multiple"
                      showArrow
                      style={{ width: "100%" }}
                      options={listTabs.map((tab) => {
                        return {
                          label: tab.name,
                          value: tab.name,
                        };
                      })}
                      size="large"
                      onChange={handleTabsSelectChange}
                    />
                    <Button ml="5px" onClick={handleAddTabsClick}>
                      APPLY
                    </Button>
                  </Flex>
                  <Tabs
                    hideAdd
                  >
                    {panes.map((pane: any) => (
                      <TabPane tab={pane.title} key={pane.value}>
                        {pane.content}
                      </TabPane>
                    ))}
                  </Tabs>
                </FormControl>
                <Input
                  hidden
                  name="created_by"
                  ref={createPlantForm.hook.register({ required: true })}
                  value={localStorage.getItem(USERNAME)}
                />
              </Box>
              <Button
                colorScheme="teal"
                type="submit"
                isLoading={createPlantForm.state.isSubmitting}
              >
                Create
              </Button>
            </form>
          </Box>
        </Box>
      </>
    ),
    [families, listTabs, panes]
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
        <title>Create plant - WOP CMS</title>
      </Helmet>
      <Wrapper>
        <MainGrid compLeft={SideBar} compMid={Body} compRight={Setting} />
      </Wrapper>
    </>
  );
};
