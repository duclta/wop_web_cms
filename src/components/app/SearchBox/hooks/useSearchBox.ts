import { useSearchState } from "@/models"
import { routerPaths } from "@/routers";
import { useRef, useState } from "react";
import { useHistory } from "react-router-dom";

const TIME_DELAY: number = 200;

export const useSearchBox = () => {
    const history = useHistory();
    const { queries, commands } = useSearchState();
    const [suggestIsLoading, setSuggestIsLoading] = useState(false);
    const timer = useRef<any>();
    const refSearchBoxInput = useRef<any>();

    const handleSearchBoxChange = (e: any) => {
        clearTimeout(timer.current);
        timer.current = setTimeout(async () => {
            const query: string = e.target.value;
            console.log(query)
            if (query.trim() === '') {
                commands.clearSuggestions();
                return;
            }
            setSuggestIsLoading(true);
            await commands.fetchSearchSuggestions({ query })
            setSuggestIsLoading(false);
        }, TIME_DELAY)
    }

    const handleSearchBoxKeyUp = (e: any) => {
        const query: string = e.target.value;
        if (e.keyCode === 13) {
            e.preventDefault();
            if (query.trim() === '') {
                commands.clearSuggestions();
                return;
            }
            commands.clearSuggestions();
            history.push(routerPaths.search + '/' + e.target.value)
            e.target.value = '';
        }
    }

    const handleSearchResultClick = () => {
        commands.clearSuggestions();
        refSearchBoxInput.current.value = ''
    }

    return {
        states: {
            plants: queries.state.plants,
            users: queries.state.users,
            suggestions: queries.state.suggestions,
            suggestIsLoading,
            refSearchBoxInput,
        },
        methods: {
            handleSearchBoxChange,
            handleSearchBoxKeyUp,
            handleSearchResultClick
        }
    }

}