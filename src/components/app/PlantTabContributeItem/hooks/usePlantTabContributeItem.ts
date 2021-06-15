import { useDisclosure } from "@chakra-ui/react";

export const usePlantTabContributeItem = () => {
    const usePlantTabModal = useDisclosure();
    return {
        state: {
            usePlantTabModal
        },
    }
}