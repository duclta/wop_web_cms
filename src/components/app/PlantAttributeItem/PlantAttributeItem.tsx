import React from "react";
import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  IconButton,
  Text,
} from "@chakra-ui/react";
import { PlantAttribute } from "@/models";
import { PlantContributeItem } from "../PlantContributeItem";

export const PlantAttributeItem = (props: { data: PlantAttribute }) => {
  const { data } = props;
  // const {
  //   state: { attrDetails },
  // } = usePlantAttributeItem({ id: data.id });

  return (
    <>
      <AccordionItem>
        <AccordionButton _focus={{ boxShadow: "none" }}>
          <Box flex="1" textAlign="left" d="flex" alignItems="center">
            <Text fontSize="17px" fontWeight="600">
              {data.name}
            </Text>
          </Box>
          <Flex>
            <IconButton
              aria-label="edit"
              borderRadius="50%"
              icon={<AccordionIcon fontSize="25px" />}
              bg="transparent"
            />
          </Flex>
        </AccordionButton>
        <AccordionPanel pb={4}>
          {data.contributes &&
            data.contributes.map((contribute) => (
              <PlantContributeItem data={contribute} />
            ))}
        </AccordionPanel>
      </AccordionItem>
    </>
  );
}