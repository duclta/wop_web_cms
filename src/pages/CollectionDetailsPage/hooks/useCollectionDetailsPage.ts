import { useEffect } from "react";
import { useCollectionDetailsState } from "@/models";
import { useParams } from "react-router-dom";

export const useCollectionDetailsPage = () => {
    const { id } = useParams<{ id: string }>();
    const { queries, commands } = useCollectionDetailsState();

    useEffect(() => {
        commands.fetchCollectionDetails(id);
    }, [id]);

    return {
        state: {
            collectionDetails: queries.state,
        },
    }
}