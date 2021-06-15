import { CreatePostReq } from "@/services/post/postServiceTypes"

export type Post = {
    id: string;
    title: string;
    description: string;
    thumbnail: string;
    createdAt: Date;
    follow: number;
    user: {
        name: string;
        avatar: string;
    }
}

export type MyPost = {
    id: string;
    title: string;
    content: string;
    follow: number;
    image: string;
    createdAt: Date;
    updatedAt: Date;
}

export type CreatePostInput = CreatePostReq