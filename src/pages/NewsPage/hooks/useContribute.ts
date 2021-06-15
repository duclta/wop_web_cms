import { useEffect } from "react";
import { useRequestState } from "@/models/request";

export const useContribute = () => {

    const { queries, commands } = useRequestState();

    useEffect(() => {
        commands.fetchListRequestHome();
    }, []);

    return {
        state: {
            listRequest: queries.state
        }
    }
}