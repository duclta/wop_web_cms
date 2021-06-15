import { createState, useState } from '@hookstate/core';
import services from '../../services';
import { fromFetchListRequestModeratorResToRequestModerators } from './postMappers';
import { RequestModerator } from './postType';

const requestModeratorState = createState<RequestModerator[]>([]);

export function useRequestModeratorState() {
    const state = useState<RequestModerator[]>(requestModeratorState);

    return ({
        queries: {
            get state() {
                return state.value;
            },
        },
        commands: {
            async fetchListRequestModerator() {
                const res = await services.request.fetchListRequestModerator();
                state.set(fromFetchListRequestModeratorResToRequestModerators(res))
            },
            async acceptRequestModerator(username: string) {
                await services.request.acceptRequestModerator(username);
            },
        }
    })
}