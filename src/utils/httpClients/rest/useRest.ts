import Axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export enum HttpMethods {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE',
}

export function useRest(method: HttpMethods, url: string, configs?: AxiosRequestConfig): Promise<AxiosResponse> {
    switch (method) {
        case HttpMethods.GET:
            return Axios({ method: HttpMethods.GET, url, ...configs });
        case HttpMethods.POST:
            return Axios({ method: HttpMethods.POST, url, ...configs });
        case HttpMethods.PUT:
            return Axios({ method: HttpMethods.PUT, url, ...configs });
        case HttpMethods.DELETE:
            return Axios({ method: HttpMethods.DELETE, url, ...configs });
        default:
            break;
    }
}
