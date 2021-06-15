import { createState, useState } from '@hookstate/core';
import services, { CreateFamilyReq } from '../../services';
import { fromFetchListFamiliesResToFamilies } from './familyMappers';
import { Family } from './familyType';

const familyState = createState<Family[]>([]);

export function useFamilyState() {
    const state = useState<Family[]>(familyState);

    return ({
        queries: {
            get state() {
                return state.value;
            },
        },
        commands: {
            async getListFamilies() {
                const res = await services.family.getListFamilies();
                state.set(fromFetchListFamiliesResToFamilies(res))
            },

            async createFamily(input: CreateFamilyReq) {
                await services.family.createFamily(input);
            },

            async removeFamily(input: string) {
                await services.family.removeFamily(input);
            },
        }
    })
}