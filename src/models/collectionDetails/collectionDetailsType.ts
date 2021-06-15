export type CollectionDetails = {
    id?: string;
    name?: string;
    tag?: string;
    createdAt?: Date;
    updatedAt?: Date;
    user?: {
        name: string;
        avatar: string;
    };
    images: CollectionImage[];
}

export type CollectionImage = {
    id: string;
    url: string;
    createdAt: Date;
    updatedAt: Date;
};