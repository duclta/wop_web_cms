import React from "react";
import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Grid,
  GridItem,
  IconButton,
  Image,
  Text,
} from "@chakra-ui/react";
import habitatIcon from "@/assets/icons/habitat_icon.svg";
import commonNamesIcon from "@/assets/icons/common_name_icon.svg";
import leafIcon from "@/assets/icons/leaf_icon.svg";
import flowerIcon from "@/assets/icons/flower_icon.svg";
import trunkIcon from "@/assets/icons/trunk_icon.svg";
import rootIcon from "@/assets/icons/root_icon.svg";
import { BiEditAlt } from "react-icons/bi";
import { CgDetailsMore } from "react-icons/cg";
import { usePlantTabItem } from "./hooks";
import { PlantTabModal } from "../PlantTabModal";
import { PlantAttribute, PlantTab } from "@/models";
export const PlantTabItem = (props: { data: PlantTab }) => {
  const {
    state: { usePlantTabModal },
  } = usePlantTabItem();

  const { data } = props;
  return (
    <>
      <AccordionItem>
        <AccordionButton _focus={{ boxShadow: "none" }}>
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
          <Flex>
            <IconButton
              aria-label="edit"
              borderRadius="50%"
              icon={<CgDetailsMore fontSize="20px" />}
              mr="5px"
              onClick={(e) => {
                e.preventDefault();
                usePlantTabModal.onOpen();
              }}
              bg="transparent"
            />
            <IconButton
              aria-label="edit"
              borderRadius="50%"
              icon={<AccordionIcon fontSize="25px" />}
              bg="transparent"
            />
          </Flex>
        </AccordionButton>
        <AccordionPanel pb={4}>
          <Grid templateColumns="1fr 1fr" gap={"20px"}>
            {data.attributes.map((attr) => renderPlantAtribute(attr))}
          </Grid>
        </AccordionPanel>
      </AccordionItem>
      <PlantTabModal useModal={usePlantTabModal} data={data} />
    </>
  );
};

const renderPlantAtribute = (data: PlantAttribute) => {
  switch (data.name) {
    case "Image":
      return (
        <GridItem rowSpan={2} colSpan={1}>
          <Box lineHeight="30px">
            <Text fontSize="17px" fontWeight="600" mb="10px">
              {data.name}
            </Text>
            <Image src={data.value} maxWidth="200px" borderRadius="5px" maxHeight="200px"/>
          </Box>
        </GridItem>
      );
    default:
      return (
        <GridItem rowSpan={1} colSpan={1}>
          <Box lineHeight="30px">
            <Text fontSize="17px" fontWeight="600">
              {data.name}
            </Text>
            <Text fontSize="15px" fontWeight="300">
              {data.value}
            </Text>
          </Box>
        </GridItem>
      );
  }
};
