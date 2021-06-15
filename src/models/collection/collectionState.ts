import { createState, useState } from '@hookstate/core';
import services from '../../services';
import { fromFetchListCollectionResToCollections } from './collectionMappers';
import { CreateCollectionInput, Collection, AddImageToCollectionInput } from './collectionType';

const collectionState = createState<Collection[]>([]);

export function useCollectionState() {
    const state = useState<Collection[]>(collectionState);

    return ({
        queries: {
            get state() {
                return state.value;
            },
        },
        commands: {
            async fetchListCollections() {
                const res = await services.collection.fetchListCollections();
                state.set(fromFetchListCollectionResToCollections(res))
            },

            async requestCreateCollection(input: CreateCollectionInput) {
                await services.collection.createCollection(input);
            },

            async addImageToCollection(input: AddImageToCollectionInput) {
                await services.collection.addImageToCollection(input);
            },
        }
    })
}