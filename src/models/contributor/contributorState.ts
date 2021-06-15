import { createState, useState } from '@hookstate/core';
import services, { CreateContributorReq, getListContributors } from '../../services';
import { fromListContributorResToContributors } from './contributorMappers';
import { Contributor } from './contributorType';

const contributorState = createState<Contributor[]>([]);

export function useContributorState() {
    const state = useState<Contributor[]>(contributorState);

    return ({
        queries: {
            get state() {
                return state.value;
            },
        },
        commands: {
            async getListContributors() {
                const res = await services.contributor.getListContributors();
                state.set(fromListContributorResToContributors(res))
            },
            async createContributor(input: CreateContributorReq) {
                await services.contributor.createContributor(input);
            },
        }
    })
}