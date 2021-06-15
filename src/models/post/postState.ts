import { createState, useState } from '@hookstate/core';
import services from '../../services';
import { fromFetchListPostResToPosts } from './postMappers';
import { CreatePostInput, Post } from './postType';

const postState = createState<Post[]>([]);

export function usePostState() {
    const state = useState<Post[]>(postState);

    return ({
        queries: {
            get state() {
                return state.value;
            },
        },
        commands: {
            async fetchListPost() {
                const res = await services.post.fetchListPosts();
                state.set(fromFetchListPostResToPosts(res))
            },

            async requestCreatePost(input: CreatePostInput) {
                await services.post.createPost(input);
            },
        }
    })
}