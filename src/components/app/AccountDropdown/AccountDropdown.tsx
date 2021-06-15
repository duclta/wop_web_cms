import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Box,
  Button,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React from "react";
import { AccountDropdownProps } from "./AccountDropdownProps";
import { useAccountDropdown } from "./hooks";

export const AccountDropdown = (props: AccountDropdownProps) => {
  const { avatar } = props;
  const {
    states: { alertDialogLogout },
    methods: {
      handleBtnLogoutClick,
      handleBtnMyAccountClick,
      alertDialogLogoutMethods,
    },
  } = useAccountDropdown();
  return (
    <>
      <Menu>
        <MenuButton
          as={Button}
          rightIcon={<ChevronDownIcon />}
          borderRadius="25px"
          p="5px"
        >
          <Box borderRadius="50%" overflow="hidden" w="35px" h="35px">
            <Image src={avatar} w="100%" h="100%" image objectFit="cover" />
          </Box>
        </MenuButton>
        <MenuList>
          <MenuItem onClick={handleBtnMyAccountClick}>My account</MenuItem>
          <MenuItem onClick={handleBtnLogoutClick}>Logout</MenuItem>
        </MenuList>
      </Menu>
      <AlertDialog
        motionPreset="slideInBottom"
        leastDestructiveRef={alertDialogLogout.cancelRef}
        onClose={alertDialogLogoutMethods.onClose}
        isOpen={alertDialogLogout.isOpen}
        isCentered
      >
        <AlertDialogOverlay />
        <AlertDialogContent>
          <AlertDialogHeader>Logout</AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>Are you sure you want to logout?</AlertDialogBody>
          <AlertDialogFooter>
            <Button
              ref={alertDialogLogout.cancelRef}
              onClick={alertDialogLogoutMethods.onClose}
            >
              No
            </Button>

            <Button
              colorScheme="red"
              ml={3}
              onClick={alertDialogLogoutMethods.onYes}
            >
              Yes
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};
