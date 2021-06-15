import { AddAttributeToPlantReq, AddTabToPlantReq, CreatePlantReq, EvaluateReq } from "./plantServiceTypes"
import { HttpMethods, useRest } from "@/utils/httpClients/rest";
import { USERNAME, USER_ROLE } from "@/constants";

const PATH = "http://localhost:3000/plants";
const GET_ALL_PLANTS = "http://localhost:3000/plants/all-plant"
const CREATE_PLANT_PATH = "http://localhost:3000/plants/create-plant"
const REMOVE_PLANT_PATH = "http://localhost:3000/plants/remove-plant"
const ADD_TAB_TO_PLANT = "http://localhost:3000/plants/add-tab-to-tag"
const ADD_ATTRIBUTE_TO_PLANT = "http://localhost:3000/plants/add-attribute-to-tab-of-tag"

export const fetchListPlants = async () => {
    const { data } = await useRest(HttpMethods.GET, GET_ALL_PLANTS);
    return data;
}

export const fetchPlantDetails = async (tag: string) => {
    const { data } = await useRest(HttpMethods.GET, `${PATH}/${tag}`);
    return data;
}

export const fetchPlantAttribute = async (id: string) => {
    const { data } = await useRest(HttpMethods.GET, `${PATH}/attributes/${id}`);
    return data;
}

export const requestUpVote = async (req: EvaluateReq) => {
    const { data } = await useRest(HttpMethods.POST, `${PATH}/evaluate`, {
        data: {
            username: localStorage.getItem(USERNAME),
            userrole: localStorage.getItem(USER_ROLE),
            type: "upvote",
            status: "upvote",
            tag: req.tag,
            tab: req.tab,
            attribute: req.attribute,
            contribute_id: req.contribute_id,
            count_moderator: 2
        }
    });
    return data;
}

export const requestDownVote = async (req: EvaluateReq) => {
    const { data } = await useRest(HttpMethods.POST, `${PATH}/evaluate`, {
        data: {
            username: localStorage.getItem(USERNAME),
            userrole: localStorage.getItem(USER_ROLE),
            type: "downvote",
            status: "downvote",
            tag: req.tag,
            tab: req.tab,
            attribute: req.attribute,
            contribute_id: req.contribute_id,
            count_moderator: 2
        }
    });
    return data;
}


export const requestPlantRequest = async (tag: string) => {
    const { data } = await useRest(HttpMethods.POST, `${PATH}/request`, {
        data: {
            tag,
            username: localStorage.getItem(USERNAME)
        }
    });
    return data;
}

export const createPlant = async (req: CreatePlantReq): Promise<void> => {
    await useRest(HttpMethods.POST, CREATE_PLANT_PATH, {
        data: req
    });
}

export const removePlant = async (req: string): Promise<void> => {
    await useRest(HttpMethods.POST, `${REMOVE_PLANT_PATH}/${req}`, {
        data: req
    });
}

export const addTabToPlant = async (req: AddTabToPlantReq): Promise<void> => {
    await useRest(HttpMethods.POST, ADD_TAB_TO_PLANT, {
        data: req
    });
}

export const addAttributeToPlant = async (req: AddAttributeToPlantReq): Promise<void> => {
    await useRest(HttpMethods.POST, ADD_ATTRIBUTE_TO_PLANT, {
        data: req
    });
}