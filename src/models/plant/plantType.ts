export type Plant = {
    id?: string;
    tag?: string;
    name?: string;
    family?: string;
    thumbnail?: string;
    labels?: string[];
    updatedAt?: Date;
    requestCount?: number;
    contributeCount?: number;
    progress?: number;
}