import { useEffect } from "react";
import { usePlantDetailsState } from "@/models";
import { useParams } from "react-router-dom";

export const usePlantContributePage = () => {
    const { id } = useParams<{ id: string }>();
    const { queries, commands } = usePlantDetailsState();
    useEffect(() => {
        commands.fetchPlantDetails(id);
    }, [id]);

    return {
        state: {
            plantDetails: queries.state,
        },
    }
}