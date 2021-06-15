import { createState, useState } from '@hookstate/core';
import { ContributorDetails } from '.';
import services from '../../services';
import { fromFetchListCollectionResToCollections } from '../collection';
import { fromFetchListPostResToPosts } from '../post';
import { fromUserDetailsResToUserProfile } from '../user';

const initialState: ContributorDetails = {
    id: undefined,
    username: undefined,
    profile: undefined,
    contributes: [],
    posts: [],
    collections: [],
}

const contributorState = createState<ContributorDetails>(initialState);

export function useContributorDetailsState() {
    const state = useState<ContributorDetails>(contributorState);

    const getContributorDetails = async (input: string) => {
        const res = await services.user.fetchUserDetails({ username: input })
        const profile = res.profile && fromUserDetailsResToUserProfile(res);
        state.merge({ id: res.id, username: res.username, profile });
    }

    const getListPostsOfContributor = async (username: string) => {
        const res = await services.post.fetchListPostsByUsername(username);
        state.merge({ posts: fromFetchListPostResToPosts(res) })
    }

    const getListCollectionsOfContributor = async (username: string) => {
        const res = await services.collection.fetchListCollectionsByUsername(username);
        state.merge({ collections: fromFetchListCollectionResToCollections(res) })
    }

    return ({
        queries: {
            get state() {
                return state.value;
            },
        },
        commands: {
            getContributorDetails,
            getListPostsOfContributor,
            getListCollectionsOfContributor,
        }
    })
}