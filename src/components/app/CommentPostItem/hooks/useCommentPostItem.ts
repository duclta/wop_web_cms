import { USERNAME, USER_ID } from "@/constants";
import { LikePostCommentInput, PostComment, usePostCommentState, useUserState } from "@/models"
import { useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export const useCommentPostItem = (data: PostComment) => {
    const { queries: commentQueries, commands: commentCommands } = usePostCommentState(data);
    const { queries: userQueries, commands: userCommands } = useUserState();

    const [btnLikeLoading, setBtnLikeLoading] = useState(false);
    const [isLiked, setIsLiked] = useState(false);
    const toast = useToast();

    useEffect(() => {
        if (userQueries.state.commentsLiked && userQueries.state.commentsLiked.includes(data.id))
            setIsLiked(true);
    }, [userQueries.state.commentsLiked])

    const handleBtnLikeClick = async () => {
        const input: LikePostCommentInput = {
            userId: localStorage.getItem(USER_ID),
            commentId: data.id,
        }

        setBtnLikeLoading(true);
        try {
            if (isLiked)
                await commentCommands.dislikeComment(input);
            else
                await commentCommands.likeComment(input);
            await userCommands.fetchUserDetails({ username: localStorage.getItem(USERNAME) });
            toast({
                title: isLiked ? "Dislike comment successfully" : "Like comment successfully",
                status: "success",
                duration: 3000,
                isClosable: true,
            })
        } catch (error) {
            toast({
                title: isLiked ? "Dislike comment has error" : "Like comment has error",
                status: "error",
                duration: 3000,
                isClosable: true,
            })
        }
        setBtnLikeLoading(false);
        console.log(!isLiked)
        setIsLiked(!isLiked);
    }
    return {
        states: {
            comment: commentQueries.state,
            btnLikeLoading,
            isLiked
        },
        methods: {
            handleBtnLikeClick
        }
    }
}