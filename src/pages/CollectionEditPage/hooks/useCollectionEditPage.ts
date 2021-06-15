import { USER_ID } from "@/constants";
import { CreateCollectionInput, CreatePostInput, useCollectionDetailsState, useCollectionState, usePlantState, usePostState } from "@/models";
import { routerPaths } from "@/routers";
import { useToast } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

export const useCollectionEditPage = () => {
    const { queries: collectionDetailsQueries, commands: collectionDetailsCommands } = useCollectionDetailsState();
    const [btnPublishLoading, setBtnPublishLoading] = useState<boolean>(false);
    const refImage = useRef<any>();
    const refTag = useRef<HTMLSelectElement>();

    const history = useHistory();
    const params = useParams<{ id: string }>();

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
        // try {
        //     await collectionDetailsCommands.requestCreateCollection(createCollectionInput);
        //     await Promise.all(refImage.current.value.map((imgUrl: string) =>
        //         collectionDetailsCommands.addImageToCollection({
        //             userId: localStorage.getItem(USER_ID),
        //             tag: refTag.current.value,
        //             image: imgUrl,
        //         })
        //     ))

        //     toast({
        //         title: "Publish collection successfully",
        //         status: "success",
        //         duration: 3000,
        //         isClosable: true,
        //     })
        //     history.push(`${routerPaths.myAccount}`)
        // } catch (error) {
        //     toast({
        //         title: "Publish collection failed",
        //         status: "error",
        //         duration: 3000,
        //         isClosable: true,
        //     })
        // } finally {
        //     setBtnPublishLoading(false);
        // }
    }

    useEffect(() => {
        collectionDetailsCommands.fetchCollectionDetails(params.id);
    }, []);


    return {
        state: {
            collectionDetails: collectionDetailsQueries.state,
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