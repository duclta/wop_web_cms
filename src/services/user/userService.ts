import { HttpMethods, useRest } from "@/utils/httpClients/rest";
import { RegisterReq, UserDetailsReq, UserDetailsRes } from "./userServiceTypes";

const REGISTER_PATH = "http://localhost:3000/users/create-user";
const USER_PATH = "http://localhost:3000/users";


export const register = async (req: RegisterReq): Promise<void> => {
    const { data } = await useRest(HttpMethods.POST, REGISTER_PATH, {
        data: req
    });
    return data;
}


export const fetchUserDetails = async (req: UserDetailsReq): Promise<UserDetailsRes> => {
    const { data } = await useRest(HttpMethods.GET, `${USER_PATH}/${req.username}`)
    return data;
}