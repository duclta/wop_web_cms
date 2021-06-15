export type CreateFamilyReq = {
    family: string;
    description: string;
}

export type ListFamiliesRes = FamilyRes[]

export type FamilyRes = {
    _id: string;
    family: string;
    description: string;
    focus: any[];
    createdAt: Date;
    updatedAt: Date;
}