import {
  Accordion,
  Box,
  Button,
  FormControl,
  FormLabel,
  Image,
  Input,
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
import { PlantTabModalProps } from "./PlantTabModalProps";
import { usePlantTabModal } from "./hooks";
import habitatIcon from "@/assets/icons/habitat_icon.svg";
import commonNamesIcon from "@/assets/icons/common_name_icon.svg";
import leafIcon from "@/assets/icons/leaf_icon.svg";
import flowerIcon from "@/assets/icons/flower_icon.svg";
import trunkIcon from "@/assets/icons/trunk_icon.svg";
import rootIcon from "@/assets/icons/root_icon.svg";
import { PlantAttributeItem } from "../PlantAttributeItem";

export const PlantTabModal = (props: PlantTabModalProps) => {
  const { useModal, data } = props;
  const {} = usePlantTabModal();
  return (
    <Modal isOpen={useModal.isOpen} onClose={useModal.onClose} size="lg">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Box flex="1" textAlign="left" d="flex" alignItems="center">
            <Box
              w="40px"
              h="40px"
              bg="#E6FFFA"
              borderRadius="50%"
              d="flex"
              justifyContent="center"
              alignItems="center"
              mr="10px"
            >
              {data.name === "Habitat" && (
                <Image src={habitatIcon} w="20px" h="20px" />
              )}
              {data.name === "Common names" && (
                <Image src={commonNamesIcon} w="20px" h="20px" />
              )}
              {data.name === "Flower" && (
                <Image src={flowerIcon} w="20px" h="20px" />
              )}
              {data.name === "Leaf" && (
                <Image src={leafIcon} w="20px" h="20px" />
              )}
              {data.name === "Trunk" && (
                <Image src={trunkIcon} w="20px" h="20px" />
              )}
              {data.name === "Root" && (
                <Image src={rootIcon} w="20px" h="20px" />
              )}
            </Box>
            <Text fontSize="18px" fontWeight="600" color="#285E61">
              {data.name}
            </Text>
          </Box>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          {data.attributes &&
            data.attributes.map((attr) => (
              <Accordion
                defaultIndex={[0, 1, 2, 3, 4, 5, 5, 6, 7, 8, 10]}
                allowMultiple
              >
                <PlantAttributeItem data={attr} />
              </Accordion>
            ))}
        </ModalBody>
        <ModalFooter>
          <Button onClick={useModal.onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
