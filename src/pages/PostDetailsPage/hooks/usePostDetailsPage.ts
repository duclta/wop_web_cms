import { useEffect, useRef, useState } from "react";
import { CreatePostCommentInput, usePostDetailsState } from "@/models";
import { useParams } from "react-router-dom";
import { USER_ID } from "@/constants";
import { useToast } from "@chakra-ui/react";

export const usePostDetailsPage = () => {
    const { id } = useParams<{ id: string }>();
    const { queries, commands } = usePostDetailsState();
    const refCommentBox = useRef<HTMLTextAreaElement>();
    const [btnCommentLoading, setBtnCommentLoading] = useState(false);
    const toast = useToast();

    useEffect(() => {
        commands.fetchPostDetails(id);
    }, [id]);


    const handleBtnCommentClick = async () => {
        const input: CreatePostCommentInput = {
            userId: localStorage.getItem(USER_ID),
            postId: id,
            content: refCommentBox.current.value,
            image: ''
        }
        setBtnCommentLoading(true)
        try {
            await commands.createPostComments(input);
            toast({
                title: "Comment successfully",
                status: "success",
                duration: 3000,
                isClosable: true,
            })
            await commands.fetchPostComments(id);
        } catch (error) {
            toast({
                title: "Comment has error",
                status: "error",
                duration: 3000,
                isClosable: true,
            })
        }
        setBtnCommentLoading(false);
        refCommentBox.current.value = '';
    }

    return {
        state: {
            postDetails: queries.state,
            refCommentBox
        },
        methods: {
            handleBtnCommentClick
        }
    }
}