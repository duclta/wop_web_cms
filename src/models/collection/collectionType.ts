import { AddImageToCollectionReq, CreateCollectionReq } from "../../services"

export type Collection = {
    id: string;
    name: string;
    tag: string;
    createdAt: Date;
    updatedAt: Date;
    user: {
        name: string;
        avatar: string;
    };
    images: {
        id: string;
        url: string;
        createdAt: Date;
        updatedAt: Date;
    }[]
}

export type MyCollection = {
    id: string;
    name: string;
    tag: string;
    createdAt: Date;
    updatedAt: Date;
    images: {
        id: string;
        url: string;
        createdAt: Date;
        updatedAt: Date;
    }[]
}

export type CreateCollectionInput = CreateCollectionReq
export type AddImageToCollectionInput = AddImageToCollectionReq