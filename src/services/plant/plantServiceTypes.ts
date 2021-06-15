export type EvaluateReq = {
    tag: string;
    tab: string;
    attribute: string;
    contribute_id: string;
}

export type CreatePlantReq = {
    created_by: string;
    tag: string;
    family: string;
}


export type AddTabToPlantReq = {
    tag: string;
    tabs: string[];
}

export type AddAttributeToPlantReq = {
    tag: string;
    tab: string;
    attributes: string[];
}