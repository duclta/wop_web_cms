import { USERNAME } from '@/constants';
import { useRest, HttpMethods } from '@/utils';
import { CreatePostReq, FetchListMyPostsRes, FetchPostDetailsRes, FetchListPostsRes, CreatePostCommentReq, LikePostCommentReq } from './postServiceTypes';

const PATH = "http://localhost:3000/post";
const CREATE_POST_PATH = "http://localhost:3000/users/create-post";
const CREATE_POST_COMMENT_PATH = "http://localhost:3000/users/comment-post";
const LIKE_POST_COMMENT_PATH = "http://localhost:3000/users/like-comment";


export const fetchListPosts = async (): Promise<FetchListPostsRes> => {
    const { data } = await useRest(HttpMethods.GET, PATH);
    return data;
}

export const fetchPostDetails = async (id: string): Promise<FetchPostDetailsRes> => {
    const { data } = await useRest(HttpMethods.GET, `${PATH}/${id}`);
    return data;
}

export const createPost = async (req: CreatePostReq): Promise<void> => {
    await useRest(HttpMethods.POST, CREATE_POST_PATH, {
        data: req
    });
}

export const createPostComments = async (req: CreatePostCommentReq): Promise<void> => {
    await useRest(HttpMethods.POST, CREATE_POST_COMMENT_PATH, {
        data: req
    });
}

export const likePostComments = async (req: LikePostCommentReq): Promise<void> => {
    await useRest(HttpMethods.POST, LIKE_POST_COMMENT_PATH, {
        data: req
    });
}

export const fetchListMyPosts = async (): Promise<FetchListMyPostsRes> => {
    const { data } = await useRest(HttpMethods.GET, `http://localhost:3000/users/${localStorage.getItem(USERNAME)}/posts`);
    return Object.values(data);
}