import { USER_ID } from "@/constants";
import { CreatePostInput, usePlantState, usePostDetailsState, usePostState } from "@/models";
import { routerPaths } from "@/routers";
import { useToast } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import ReactQuill from "react-quill";
import { useHistory, useParams } from "react-router-dom";

export const usePostEditPage = () => {
    const { queries: plantQueries, commands: plantCommands } = usePlantState();
    const { queries: postQueries, commands: postCommands } = usePostState();
    const { queries: postDetailsQueries, commands: postDetailsCommands } = usePostDetailsState();

    const [btnPublishLoading, setBtnPublishLoading] = useState<boolean>(false);
    const refTitleInput = useRef<HTMLInputElement>();
    const refPostContent = useRef<ReactQuill>();
    const refImage = useRef<any>();
    const history = useHistory();
    const toast = useToast();
    const { id } = useParams<{ id: string }>();

    const handleBtnPublishClick = async () => {
        const createPostInput: CreatePostInput = {
            userId: localStorage.getItem(USER_ID),
            title: refTitleInput.current.value,
            content: refPostContent.current.props.value as string,
            image: refImage.current.value,
        }

        setBtnPublishLoading(true);
        try {
            await postCommands.requestCreatePost(createPostInput);
            toast({
                title: "Publish post successfully",
                status: "success",
                duration: 3000,
                isClosable: true,
            })
            history.push(`${routerPaths.myAccount}`)
        } catch (error) {
            toast({
                title: "Publish post failed",
                status: "error",
                duration: 3000,
                isClosable: true,
            })
        } finally {
            setBtnPublishLoading(false);
        }
    }

    useEffect(() => {
        postDetailsCommands.fetchPostDetails(id);
        plantCommands.fetchListPlants();
    }, []);

    useEffect(() => {
        console.log(postDetailsQueries.state.id)
        if (postDetailsQueries.state.id && postDetailsQueries.state.id == id) {
            console.log(id)
            refTitleInput.current.value = postDetailsQueries.state.title;
            refPostContent.current.getEditor().root.innerHTML = postDetailsQueries.state.content;
            // refImage.current.value = postDetailsQueries.state.thumbnail;
        }
    }, [postDetailsQueries.state]);

    const listPlantNames: { label: string, value: string }[] = plantQueries.state.map(plant => { return { label: plant.name, value: plant.tag } })

    return {
        state: {
            listPlantNames,
            btnPublishLoading,
            refTitleInput,
            refPostContent,
            refImage,
            postDetails: postDetailsQueries.state
        },
        methods: {
            handleBtnPublishClick,
        }
    }
}