
export type LoginReq = {
    username: string;
    password: string;
}

export type LoginRes = {
    token: string;
    id: string;
    username: string;
    role: string;
}