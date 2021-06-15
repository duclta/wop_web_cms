import { useRest, HttpMethods } from '@/utils';
import { CreateFamilyReq, ListFamiliesRes } from './familyServiceTypes';

const PATH = "http://localhost:3000/plants/families";
const CREATE_FAMILY_PATH = "http://localhost:3000/plants/create-family";
const REMOVE_FAMILY_PATH = "http://localhost:3000/plants/remove-family";

export const getListFamilies = async (): Promise<ListFamiliesRes> => {
    const { data } = await useRest(HttpMethods.GET, PATH);
    return data;
}

export const createFamily = async (req: CreateFamilyReq): Promise<void> => {
    await useRest(HttpMethods.POST, CREATE_FAMILY_PATH, {
        data: req
    });
}

export const removeFamily = async (req: string): Promise<void> => {
    await useRest(HttpMethods.POST, `${REMOVE_FAMILY_PATH}/${req}`, {
        data: req
    });
}

