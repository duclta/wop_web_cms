import { useEffect, useState } from "react";
import { usePlantDetailsState } from "@/models";
import { useParams } from "react-router-dom";
import { useToast } from "@chakra-ui/react";

export const usePlantDetailsPage = () => {
    const toast = useToast();
    const { id } = useParams<{ id: string }>();
    const { queries, commands } = usePlantDetailsState();
    const [btnRequestIsLoading, setBtnRequestIsLoading] = useState(false);

    useEffect(() => {
        commands.fetchPlantDetails(id);
    }, [id]);

    const handleBtnRequestClick = async () => {
        setBtnRequestIsLoading(true);
        try {
            await commands.requestPlantsRequest(id);
            toast({
                title: "Request successfully",
                status: "success",
                duration: 3000,
                isClosable: true,
            })
        } catch (error) {
            toast({
                title: error.response.data.error,
                status: "error",
                duration: 3000,
                isClosable: true,
            })
        }
        setBtnRequestIsLoading(false);
    }

    return {
        state: {
            plantDetails: queries.state,
            btnRequestIsLoading
        },
        methods: {
            handleBtnRequestClick,
        }
    }
}