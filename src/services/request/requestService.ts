import { useRest, HttpMethods } from '@/utils';
import { FetchListRequestModeratorRes } from './requestServiceTypes';

const REQUEST_MODERATOR_PATH = "http://localhost:3000/users/get-list-request-moderator";
const ACCEPT_MODERATOR_PATH = "http://localhost:3000/users/update-moderator";

export const fetchListRequestModerator = async (): Promise<FetchListRequestModeratorRes> => {
    const { data } = await useRest(HttpMethods.GET, REQUEST_MODERATOR_PATH);
    return data;
}

export const acceptRequestModerator = async (username: string): Promise<void> => {
    await useRest(HttpMethods.POST, `${ACCEPT_MODERATOR_PATH}/${username}`);
}