
export type RequestModerator = {
    id: string;
    content: string;
    images: string[];
    createdAt: Date;
    updateAt: Date;
    user: {
        username: string;
        name: string;
        avatar: string;
    }
}