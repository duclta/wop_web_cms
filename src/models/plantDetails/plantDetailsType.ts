export type PlantDetails = {
    id?: string;
    tag?: string;
    name?: string;
    description?: string;
    thumbnail?: string;
    labels?: string[];
    updatedAt?: Date;
    requestCount?: number;
    contributeCount?: number;
    progress?: number;
    tabs?: PlantTab[]
}

export type PlantTab = {
    id?: string
    name?: string;
    description?: string;
    attributes?: PlantAttribute[];
}

export type PlantAttribute = {
    id?: string;
    name?: string;
    value?: string;
    description?: string;
    contributes?: PlantContribute[];
}

export type PlantContribute = {
    id?: string;
    tag?: string;
    tab?: string;
    attribute?: string;
    user?: {
        id?: string;
        name?: string;
        avatar?: string;
    };
    value?: string;
    verified?: boolean;
    downVote?: number;
    upVote?: number;
    check?: number;
    createdAt?: Date;
}