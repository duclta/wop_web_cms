import { useDisclosure } from "@chakra-ui/react";

export const usePlantTabItem = () => {
    const usePlantTabModal = useDisclosure();
    return {
        state: {
            usePlantTabModal
        },
    }
}