export type CreateCollectionReq = {
    userId: string;
    tag: string;
}

export type AddImageToCollectionReq = {
    userId: string;
    tag: string;
    image: string;
}

export type FetchListCollectionsRes = {
    id: string;
    tag: string;
    createdAt: Date;
    updatedAt: Date;
    user: {
        username: string;
        profile: {
            firstName: string;
            lastName: string;
            avata: string;
        };
    };
    images: {
        id: string;
        image: string;
        createdAt: Date;
        updatedAt: Date;
    }[]
}[]

export type FetchListMyCollectionsRes = {
    id: string;
    tag: string;
    createdAt: Date;
    updatedAt: Date;
    images: {
        id: string;
        image: string;
        createdAt: Date;
        updatedAt: Date;
    }[]
}[]

export type FetchCollectionDetailsRes = {
    id: string;
    tag: string;
    createdAt: Date;
    updatedAt: Date;
    user: {
        username: string;
        profile: {
            firstName: string;
            lastName: string;
            avata: string;
        };
    };
    images: {
        id: string;
        image: string;
        createdAt: Date;
        updatedAt: Date;
    }[]
}