export type FetchListRequestModeratorRes = {
    id: string;
    content: string;
    image: string;
    createdAt: Date;
    updatedAt: Date;
    user: {
        username: string;
        profile: {
            firstName: string;
            lastName: string;
            avata: string;
            email: string;
        };
    }
}[]