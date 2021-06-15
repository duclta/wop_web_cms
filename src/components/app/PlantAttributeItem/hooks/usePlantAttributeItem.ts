import { usePlantAttributeState } from "@/models";
import { useEffect } from "react";

export const usePlantAttributeItem = (props: { id: string }) => {
    const { id } = props;
    const { queries, commands } = usePlantAttributeState();

    useEffect(() => {
        commands.fetchPlantAttribute(id)
    }, [])
    return {
        state: {
            attrDetails: queries.state
        },
    }
}