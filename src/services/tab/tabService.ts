import { useRest, HttpMethods } from '@/utils';
import { CreateTabReq, ListTabsRes } from './tabServiceTypes';

const PATH = "http://localhost:3000/plants/all-tab";
const CREATE_TAB_PATH = "http://localhost:3000/plants/create-tab";
const REMOVE_TAB_PATH = "http://localhost:3000/plants/remove-tab";


export const getListTabs = async (): Promise<ListTabsRes> => {
    const { data } = await useRest(HttpMethods.GET, PATH);
    return data;
}

export const createTab = async (req: CreateTabReq): Promise<void> => {
    await useRest(HttpMethods.POST, CREATE_TAB_PATH, {
        data: req
    });
}

export const removeTab = async (req: string): Promise<void> => {
    await useRest(HttpMethods.POST, `${REMOVE_TAB_PATH}/${req}`, {
        data: req
    });
}

