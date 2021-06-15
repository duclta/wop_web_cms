export type CreatePostReq = {
    userId: string;
    title: string;
    content: string;
    image: string;
}

export type FetchListPostsRes = {
    id: string;
    title: string;
    content: string;
    follow: number;
    image: string;
    createdAt: Date;
    updatedAt: Date;
    comments: any[]
    user: {
        username: string;
        profile: {
            firstName: string;
            lastName: string;
            avata: string;
        };
    }
}[]

export type FetchListMyPostsRes = {
    id: string;
    title: string;
    content: string;
    follow: number;
    image: string;
    createdAt: Date;
    updatedAt: Date;
}[]

export type FetchPostDetailsRes = {
    id: string;
    title: string;
    content: string;
    image: string;
    follow: number;
    createdAt: Date;
    updatedAt: Date;
    comments: {
        id: string;
        content: string;
        image: string;
        createdAt: Date;
        like: number;
        user: {
            username: string;
            profile: {
                firstName: string;
                lastName: string;
                avata: string;
            };
        };
    }[];
    user: {
        username: string;
        profile: {
            firstName: string;
            lastName: string;
            avata: string;
        };
    }
}

export type CreatePostCommentReq = {
    userId: string;
    postId: string;
    content: string;
    image: string;
}

export type LikePostCommentReq = {
    userId: string;
    commentId: string;
}

