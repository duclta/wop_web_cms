import { createState, useState } from '@hookstate/core';
import services from '../../services';
import { PlantAttribute, PlantDetails } from './plantDetailsType';
import { fromPlantDetailsResToPlant } from './plantDetailsMappers';
import { EvaluateReq } from '@/services/plant/plantServiceTypes';

const initialState: PlantDetails = {
    requestCount: 0,
    contributeCount: 0,
    progress: 0,
    tabs: [],
}
const plantState = createState<PlantDetails>(initialState);

export function usePlantDetailsState() {
    const state = useState<PlantDetails>(plantState);

    return ({
        queries: {
            get state() {
                return state.value;
            },
        },
        commands: {
            async fetchPlantDetails(tag: string) {
                // state.meta.loading.set(true);
                const res = await services.plant.fetchPlantDetails(tag);
                // state.meta.loading.set(false);
                state.merge(fromPlantDetailsResToPlant(res))
            },

            async requestPlantsRequest(tag: string) {
                const res = await services.plant.requestPlantRequest(tag);
            },
        }
    })
}

export function usePlantAttributeState() {
    const state = useState<PlantAttribute>({});
    return ({
        queries: {
            get state() {
                return state.value;
            },
        },
        commands: {
            async fetchPlantAttribute(id: string) {
                // state.meta.loading.set(true);
                const res = await services.plant.fetchPlantAttribute(id);
                console.log(res.data)
                // state.meta.loading.set(false);
                state.set(res.data)
            },
        }
    })
}


export function usePlantContributeState() {
    // const state = useState<PlantContribute>({});

    return ({
        queries: {
            // get state() {
            //     // return state.value;
            // },
        },
        commands: {
            async requestDownVote(input: EvaluateReq) {
                const res = await services.plant.requestDownVote(input);
            },
            async requestUpVote(input: EvaluateReq) {
                const res = await services.plant.requestUpVote(input);
            },
        }
    })
}