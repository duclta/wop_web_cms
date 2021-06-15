import { createState, useState } from '@hookstate/core';
import services from '../../services';
import { Request } from './requestType';

export type MetaState = {
    loading: boolean
    error: Error | undefined
}

const requestState = createState<Request[]>([]);

export function useRequestState() {
    const state = useState<Request[]>(requestState);

    return ({
        queries: {
            get state() {
                return state.value;
            },
        },
        commands: {
            async fetchListRequestHome() {
                // state.meta.loading.set(true);
                const res = await services.request.fetchListRequestHome();
                // state.meta.loading.set(false);
                state.set(res.data)
            },
        }
    })
}