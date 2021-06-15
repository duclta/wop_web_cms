import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSearchState } from "@/models";

export const useSearchPage = () => {
    const { query } = useParams<{ query: string }>();
    const { queries, commands } = useSearchState();

    useEffect(() => {
        commands.fetchSearch({ query });
    }, []);

    return {
        state: {
            query,
            searchResults: queries.state
        }
    }
}