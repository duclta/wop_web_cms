import { USER_ID } from "@/constants";
import { CreateCollectionInput, CreatePostInput, useCollectionState, usePlantState, usePostState } from "@/models";
import { routerPaths } from "@/routers";
import { useToast } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import ReactQuill from "react-quill";
import { useHistory } from "react-router-dom";

export const useCollectionCreatePage = () => {
    const { queries: plantQueries, commands: plantCommands } = usePlantState();
    const { queries: collectionQueries, commands: collectionCommands } = useCollectionState();
    const [btnPublishLoading, setBtnPublishLoading] = useState<boolean>(false);
    const refImage = useRef<any>();
    const refTag = useRef<HTMLSelectElement>();

    const history = useHistory();
    const toast = useToast();

    const handleSelectPlantChange = (value: string) => {
        refTag.current.value = value
    }

    const handleBtnPublishClick = async () => {
        console.log(refTag)
        const createCollectionInput: CreateCollectionInput = {
            userId: localStorage.getItem(USER_ID),
            tag: refTag.current.value,
        }

        console.log(createCollectionInput)

        setBtnPublishLoading(true);
        try {
            await collectionCommands.requestCreateCollection(createCollectionInput);
            await Promise.all(refImage.current.value.map((imgUrl: string) =>
                collectionCommands.addImageToCollection({
                    userId: localStorage.getItem(USER_ID),
                    tag: refTag.current.value,
                    image: imgUrl,
                })
            ))

            toast({
                title: "Publish collection successfully",
                status: "success",
                duration: 3000,
                isClosable: true,
            })
            history.push(`${routerPaths.myAccount}`)
        } catch (error) {
            toast({
                title: "Publish collection failed",
                status: "error",
                duration: 3000,
                isClosable: true,
            })
        } finally {
            setBtnPublishLoading(false);
        }
    }

    useEffect(() => {
        plantCommands.fetchListPlants();
    }, []);

    const listPlantNames: { label: string, value: string }[] = plantQueries.state.map(plant => { return { label: plant.name, value: plant.tag } })

    return {
        state: {
            listPlantNames,
            btnPublishLoading,
            refImage,
            refTag
        },
        methods: {
            handleBtnPublishClick,
            handleSelectPlantChange
        }
    }
}