import { useRest, HttpMethods } from '@/utils';
import { CreateContributorReq, GetListContributorsRes } from './contributorServiceTypes';

const PATH = "http://localhost:3000/users";
const CREATE_POST_PATH = "http://localhost:3000/users/create-user";

export const getListContributors = async (): Promise<GetListContributorsRes> => {
    const { data } = await useRest(HttpMethods.GET, PATH);
    return data;
}

export const createContributor = async (req: CreateContributorReq): Promise<void> => {
    await useRest(HttpMethods.POST, CREATE_POST_PATH, {
        data: req
    });
}