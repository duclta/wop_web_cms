import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { usePlantContributeModal } from "./hooks";
import { PlantContributeModalProps } from "./PlantContributeModalProps";

export const PlantContributeModal = (props: PlantContributeModalProps) => {
  const { useModal, data } = props;
  const {} = usePlantContributeModal();
  return (
    <Modal isOpen={useModal.isOpen} onClose={useModal.onClose} size="lg">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Box flex="1" textAlign="left" d="flex" alignItems="center">
            <Text fontSize="18px" fontWeight="600" color="#285E61">
              {`Contribute for ${data.name}`}
            </Text>
          </Box>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>Body</ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3}>
            OK
          </Button>
          <Button onClick={useModal.onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
