import { USERNAME } from "@/constants";
import { HttpMethods, useRest } from "@/utils/httpClients/rest";
import { CreateCollectionReq, FetchListMyCollectionsRes, FetchCollectionDetailsRes, FetchListCollectionsRes, AddImageToCollectionReq } from './collectionServiceTypes';

const PATH = "http://localhost:3000/users/collections";
const CREATE_COLLECTION_PATH = "http://localhost:3000/users/create-collection";
const ADD_IMAGE_TO_COLLECTION_PATH = "http://localhost:3000/users/add-image-to-collection";

export const fetchListCollections = async (): Promise<FetchListCollectionsRes> => {
    const { data } = await useRest(HttpMethods.GET, PATH);
    return data;
}

export const fetchCollectionDetails = async (id: string): Promise<FetchCollectionDetailsRes> => {
    const { data } = await useRest(HttpMethods.GET, `${PATH}/${id}`);
    return data;
}

export const createCollection = async (req: CreateCollectionReq): Promise<void> => {
    await useRest(HttpMethods.POST, CREATE_COLLECTION_PATH, {
        data: req
    });
}

export const addImageToCollection = async (req: AddImageToCollectionReq): Promise<void> => {
    await useRest(HttpMethods.POST, ADD_IMAGE_TO_COLLECTION_PATH, {
        data: req
    });
}

export const fetchListMyCollections = async (): Promise<FetchListMyCollectionsRes> => {
    const { data } = await useRest(HttpMethods.GET, `http://localhost:3000/users/${localStorage.getItem(USERNAME)}/collections`);
    return data;
}