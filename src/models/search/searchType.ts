export type Search = {
    users?: any[];
    plants?: any[];
    suggestions?: {
        users?: any[];
        plants?: any[];
    }
}

export type SearchInput = {
    query: string;
}
