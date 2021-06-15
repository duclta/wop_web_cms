export type CreateTabReq = {
    name: string;
    description: string;
    image: string;
}

export type ListTabsRes = TabRes[]

export type TabRes = {
    _id: string;
    name: string;
    description: string;
    image: string;
    createdAt: Date;
    updatedAt: Date;
}