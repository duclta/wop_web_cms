import { Plant } from "@/models";
import { UseDisclosureReturn } from "@chakra-ui/react";

export type PlantContributeModalProps = {
  useModal: UseDisclosureReturn;
  data: Plant;
};
