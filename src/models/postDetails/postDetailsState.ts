import { createState, useState } from '@hookstate/core';
import services from '../../services';
import { fromPostDetailsResToPostDetails } from './postDetailsMappers';
import { CreatePostCommentInput, LikePostCommentInput, PostComment, PostDetails } from './postDetailsType';

const initialState: PostDetails = {
    user: {} as any,
    comments: []
}

const postState = createState<PostDetails>(initialState);

export function usePostDetailsState() {
    const state = useState<PostDetails>(postState);

    return ({
        queries: {
            get state() {
                return state.value;
            },
        },
        commands: {
            async fetchPostDetails(id: string) {
                const res = await services.post.fetchPostDetails(id);
                state.set(fromPostDetailsResToPostDetails(res))
            },
            async fetchPostComments(id: string) {
                const res = await services.post.fetchPostDetails(id);
                state.set(fromPostDetailsResToPostDetails(res))
            },
            async createPostComments(input: CreatePostCommentInput) {
                await services.post.createPostComments(input);
            },
        }
    })
}


export function usePostCommentState(initialState: PostComment) {
    const state = useState<PostComment>(JSON.parse(JSON.stringify(initialState)));
    return ({
        queries: {
            get state() {
                return state.value;
            },
        },
        commands: {
            async likeComment(input: LikePostCommentInput) {
                await services.post.likePostComments(input);
                state.merge({ like: state.value.like + 1 })
            },
            async dislikeComment(input: LikePostCommentInput) {
                await services.post.likePostComments(input);
                state.merge({ like: state.value.like - 1 })
            },
        }
    })
}
