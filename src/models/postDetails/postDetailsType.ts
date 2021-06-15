import { CreatePostCommentReq, LikePostCommentReq } from "@/services"

export type PostDetails = {
    id?: string;
    title?: string;
    description?: string;
    content?: string;
    thumbnail?: string;
    createdAt?: Date;
    user?: {
        name: string,
        avatar: string,
    }
    comments?: PostComment[]
}

export type PostComment = {
    user: {
        name: string,
        avatar: string,
    }
    id: string;
    content: string;
    createdAt: Date;
    like: number;
}

export type CreatePostCommentInput = CreatePostCommentReq;
export type LikePostCommentInput = LikePostCommentReq;

