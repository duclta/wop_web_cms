import { createState, useState } from '@hookstate/core';
import services, { UserDetailsReq } from '../../services';
import { fromListMyCollectionsResToMyCollections, fromRegisterInputToRegisterReq, fromUserDetailsResToCommentsLiked, fromUserDetailsResToMyPosts, fromUserDetailsResToUserProfile } from './userMappers';
import { User, RegisterInput, UserDetailsInput } from './userType';

const initialState: User = {
    id: undefined,
    username: undefined,
    profile: undefined,
    myContributes: [],
    myPosts: [],
    myCollections: [],
}

const userState = createState<User>(initialState);

export function useUserState() {
    const state = useState<User>(userState);

    const requestRegister = async (input: RegisterInput) => {
        await services.user.register(fromRegisterInputToRegisterReq(input));
    }

    const fetchUserDetails = async (input: UserDetailsInput) => {
        const res = await services.user.fetchUserDetails(input);
        console.log(res);
        const profile = fromUserDetailsResToUserProfile(res);
        const commentsLiked = fromUserDetailsResToCommentsLiked(res);

        state.merge({ profile, commentsLiked });
    }

    const fetchListMyPosts = async () => {
        const res = await services.post.fetchListMyPosts();
        state.merge({ myPosts: res })
    }

    const fetchListMyCollections = async () => {
        const res = await services.collection.fetchListMyCollections();
        state.merge({ myCollections: fromListMyCollectionsResToMyCollections(res) })
    }

    return ({
        queries: {
            get state() {
                return state.value;
            },
        },
        commands: {
            requestRegister,
            fetchUserDetails,
            fetchListMyPosts,
            fetchListMyCollections
        }
    })
}