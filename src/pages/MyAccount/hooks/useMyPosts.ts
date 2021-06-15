import { useEffect } from "react";
import { usePostState, useUserState } from "@/models";

export const useMyPosts = () => {

    const { queries, commands } = useUserState();

    return {
        state: {
            myPosts: queries.state.myPosts
        }
    }
}