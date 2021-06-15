import { createState, useState } from '@hookstate/core';
import services, { CreateAttributeReq } from '../../services';
import { Plant } from './plantType';
import { fromListPlantsResToListPlant } from './plantMappers';
import { AddAttributeToPlantReq, AddTabToPlantReq, CreatePlantReq } from '@/services/plant/plantServiceTypes';

const plantState = createState<Plant[]>([]);

export function usePlantState() {
    const state = useState<Plant[]>(plantState);

    return ({
        queries: {
            get state() {
                return state.value;
            },
        },
        commands: {
            async fetchListPlants() {
                const res = await services.plant.fetchListPlants();
                state.set(fromListPlantsResToListPlant(res))
            },
            async searchPlants() {
                const res = await services.plant.fetchListPlants();
                state.set(fromListPlantsResToListPlant(res))
            },
            async createPlant(data: CreatePlantReq) {
                await services.plant.createPlant(data);
            },
            async removePlant(data: string) {
                await services.plant.removePlant(data);
            },
            async addTabToPlant(data: AddTabToPlantReq) {
                await services.plant.addTabToPlant(data);
            },
            async addAttributeToPlant(data: AddAttributeToPlantReq) {
                await services.plant.addAttributeToPlant(data);
            },
        }
    })
}