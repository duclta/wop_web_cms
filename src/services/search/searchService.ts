import { HttpMethods, useRest } from "@/utils/httpClients/rest";
import { SearchReq, SearchRes } from "./searchServiceTypes";

const PATH = "http://localhost:3000/search";

export const fetchSearch = async (req: SearchReq): Promise<SearchRes> => {
    const { data } = await useRest(HttpMethods.GET, `${PATH}?query=${req.query}`);
    return data;
}