export type CreateAttributeReq = {
    name: string;
    type: string;
    description: string;
}

export type ListAttributesRes = AttributeRes[]

export type AttributeRes = {
    _id: string;
    name: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
}