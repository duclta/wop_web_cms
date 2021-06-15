import { useRest, HttpMethods } from '@/utils';
import { CreateAttributeReq, ListAttributesRes } from './attributeServiceTypes';

const PATH = "http://localhost:3000/plants/all-attribute";
const CREATE_ATTRIBUTE_PATH = "http://localhost:3000/plants/create-attribute";
const REMOVE_ATTRIBUTE_PATH = "http://localhost:3000/plants/remove-attribute";

export const getListAttributes = async (): Promise<ListAttributesRes> => {
    const { data } = await useRest(HttpMethods.GET, PATH);
    return data;
}

export const createAttribute = async (req: CreateAttributeReq): Promise<void> => {
    await useRest(HttpMethods.POST, CREATE_ATTRIBUTE_PATH, {
        data: req
    });
}

export const removeAttribute = async (req: string): Promise<void> => {
    await useRest(HttpMethods.POST, `${REMOVE_ATTRIBUTE_PATH}/${req}`, {
        data: req
    });
}
