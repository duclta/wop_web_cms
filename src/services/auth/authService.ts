import { HttpMethods, useRest } from "@/utils/httpClients/rest";
import { LoginReq, LoginRes } from "./authServiceTypes";

const LOGIN_PATH = "http://localhost:3000/login";

export const login = async (req: LoginReq): Promise<LoginRes> => {
    const { data } = await useRest(HttpMethods.POST, LOGIN_PATH, {
        data: req
    });
    return data;
}