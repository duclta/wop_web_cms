import { createState, useState } from '@hookstate/core';
import services from '../../services';
import { fromListPlantsResToListPlant } from '../plant/plantMappers';
import { fromListUsersResToListUserProfile } from '../user/userMappers';

import { Search, SearchInput } from './searchType';


const searchSuggestionInitialState: { [key: string]: any[] } = {
    users: [],
    plants: [],
}
const searchInitialState: Search = {
    users: [],
    plants: [],
    suggestions: searchSuggestionInitialState
}
const searchState = createState<Search>(searchInitialState);

export function useSearchState() {
    const state = useState<Search>(searchState);

    return ({
        queries: {
            get state() {
                return state.value;
            },
        },
        commands: {
            async fetchSearchSuggestions(input: SearchInput) {
                const res = await services.search.fetchSearch(input);
                const plants = fromListPlantsResToListPlant(res.plants);
                const users = fromListUsersResToListUserProfile(res.users);
                const suggestions = {
                    plants, users
                }
                state.merge({ suggestions });
            },

            async fetchSearch(input: SearchInput) {
                const res = await services.search.fetchSearch(input);
                const plants = fromListPlantsResToListPlant(res.plants);
                const users = fromListUsersResToListUserProfile(res.users);
                state.merge({ plants, users });
            },

            clearSuggestions() {
                state.suggestions.set(searchSuggestionInitialState)
            }
        }
    })
}