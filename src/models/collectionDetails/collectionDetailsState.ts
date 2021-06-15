import { createState, useState } from '@hookstate/core';
import services from '../../services';
import { fromCollectionDetailsResToCollectionDetails } from './collectionDetailsMappers';
import { CollectionDetails } from './collectionDetailsType';

const initialState: CollectionDetails = {
    user: {} as any,
    images: [],
}

const collectionDetailsState = createState<CollectionDetails>(initialState);

export function useCollectionDetailsState() {
    const state = useState<CollectionDetails>(collectionDetailsState);

    return ({
        queries: {
            get state() {
                return state.value;
            },
        },
        commands: {
            async fetchCollectionDetails(id: string) {
                const res = await services.collection.fetchCollectionDetails(id);
                console.log(fromCollectionDetailsResToCollectionDetails(res))
                state.set(fromCollectionDetailsResToCollectionDetails(res))
            },
        }
    })
}