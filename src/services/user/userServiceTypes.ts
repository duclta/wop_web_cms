import { Optional } from "@/common"

export type RegisterReq = {
    username: string;
    role: string;
    password: string;
}

export type UserDetailsReq = {
    username: string;
}

export type UserDetailsRes = {
    id: string;
    username: string;
    password: string;
    role: string;
    createdAt: Date,
    updatedAt: Date,
    profile: Optional<{
        id: string,
        firstName: string,
        lastName: string;
        email: string;
        avata: string;
        point: number;
        createdAt: Date;
        updatedAt: Date;
    }>,
    voteHistory: [],
    checkHistory: [],
    contributeHistory: [],
    requestHistory: [],
    posts: [],
    followHistory: [],
    likeHistory: { id: string, createdAt: Date, updatedAt: Date, comment: { id: string, createdAt: Date } }[],
    collections: [],
}