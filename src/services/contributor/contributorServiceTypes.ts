import { Optional } from "@/common"

export type CreateContributorReq = {
    userId: string;
    title: string;
    content: string;
    image: string;
}

export type GetListContributorsRes = {
    id: string;
    username: string;
    password: string;
    role: string;
    createdAt: Date;
    updatedAt: Date;
    profile: Optional<{
        id: string;
        firstName: string;
        lastName: string;
        email: string;
        avata: string;
        point: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    followed: [];
    followings: [];
}[]