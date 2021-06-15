import { Plant, User } from "@/models";
import { routerPaths } from "@/routers";
import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Text,
  Divider,
  Input,
  InputGroup,
  InputLeftElement,
  SlideFade,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./css/searchBox.module.css";
import { useSearchBox } from "./hooks";

export const SearchBoxHeader = (props: any) => {
  const {
    states: {
      suggestions: { plants, users },
      refSearchBoxInput: refSearchInput,
    },
    methods: {
      handleSearchBoxChange,
      handleSearchBoxKeyUp,
      handleSearchResultClick,
    },
  } = useSearchBox();

  return (
    <Box w="100%" maxW="500px" d="flex" alignItems="center">
      <InputGroup h="40px" position="relative">
        <InputLeftElement
          pointerEvents="none"
          h="100%"
          children={<SearchIcon color="gray.300" fontSize="15px" />}
        />
        <Input
          size="md"
          variant="filled"
          type="text"
          placeholder="Search plants"
          onChange={handleSearchBoxChange}
          onKeyUp={handleSearchBoxKeyUp}
          ref={refSearchInput}
        />
        <SlideFade in={!!plants.length || !!users.length} offsetY="20px">
          <Box
            mt="5px"
            position="absolute"
            top="100%"
            left="0"
            w="100%"
            bg="#F4F4F4"
            borderRadius="5px"
            overflow="hidden"
          >
            <Box>
              {plants.map((p: Plant) => (
                <Link
                  to={`${routerPaths.plants}/${p.tag}`}
                  onClick={handleSearchResultClick}
                >
                  <Box
                    p="10px 20px"
                    d="flex"
                    justifyContent="space-between"
                    _hover={{ background: "#E4E4E4" }}
                  >
                    <Text size="md">{p.name}</Text>
                    <Text size="sm" fontStyle="italic" color="#CCC">
                      Plant
                    </Text>
                  </Box>
                </Link>
              ))}
            </Box>
            {!!plants.length && <Divider />}
            <Box>
              {users.map((user: User) => (
                <Link
                  to={`${routerPaths.contributors}/${user.username}`}
                  onClick={handleSearchResultClick}
                >
                  <Box
                    p="10px 20px"
                    d="flex"
                    justifyContent="space-between"
                    mb="5px"
                    _hover={{ background: "#E4E4E4" }}
                  >
                    <Text size="lg">{user.username}</Text>
                    <Text size="md" fontStyle="italic" color="#CCC">
                      User
                    </Text>
                  </Box>
                </Link>
              ))}
            </Box>
          </Box>
        </SlideFade>
      </InputGroup>
    </Box>
  );
};
