import { useEffect, useMemo, useRef } from "react";
import { useCollectionState, useTabState } from "@/models";
import { UseTabsPageProps } from '../CollectionsPageProps'
import { useHistory } from "react-router-dom";
import { routerPaths } from "@/routers";
import { toLongDateTime } from "@/utils";
import { useDisclosure, useToast } from "@chakra-ui/react";

export const useCollectionsPage = (props: UseTabsPageProps) => {
    const { componentsRender } = props;
    const history = useHistory();
    const { queries, commands } = useCollectionState();

    const { isOpen, onOpen, onClose } = useDisclosure();
    const cancelRef = useRef();
    const indexRef = useRef<string>();
    const toast = useToast();

    const handleBtnViewActionClick = (id: string) => {
        history.push(`${routerPaths.collections}/${id}`)
    }

    const handleBtnEditActionClick = (id: string) => {
        history.push(`${routerPaths.collections}/edit/${id}`)
    }

    const handleBtnRemoveActionClick = (name: string) => {
        indexRef.current = name;
        onOpen();
    }

    const handleBtnAcceptRemoveClick = async () => {
        // try {
        //     await commands.removeTab(indexRef.current);
        //     toast({
        //         title: "Remove collection successfully",
        //         status: "success",
        //         duration: 1000,
        //         isClosable: true,
        //     });
        // } catch (error) {
        //     toast({
        //         title: "Remove collection failed",
        //         status: "error",
        //         duration: 1000,
        //         isClosable: true,
        //     });
        // }
        // commands.getListTabs();
        // onClose();
    }

    const columns = useMemo<any[]>(() => [
        {
            title: "ID",
            dataIndex: "id",
            key: "id",
        },
        {
            title: "Thumbnail",
            dataIndex: "images",
            key: "thumbnail",
            render: (images: any[]) => {
                return componentsRender.thumbnail({ src: images[0] && images[0].url })
            },
        },
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "User",
            dataIndex: "user",
            key: "user",
            render: (data: { name: string, avatar: string }) => {
                return componentsRender.user(data)
            },
        },
        {
            title: "Created at",
            key: "createdAt",
            dataIndex: "createdAt",
            render: (dateTime: string) => toLongDateTime(dateTime),
        },
        {
            title: "Updated at",
            key: "updatedAt",
            dataIndex: "updatedAt",
            render: (dateTime: string) => toLongDateTime(dateTime),
        },
        {
            title: "Action",
            key: "action",
            dataIndex: "name",
            render: (id: string) => componentsRender.action({ id, handleBtnViewActionClick, handleBtnEditActionClick, handleBtnRemoveActionClick }),
        },
    ], [queries.state])


    useEffect(() => {
        commands.fetchListCollections();
    }, []);

    return {
        state: {
            columns,
            listCollections: queries.state,
            alertDialogRemove: {
                cancelRef,
                isOpen,
            },
        },
        methods: {
            alertDialogRemoveMethods: {
                onClose,
                onYes: handleBtnAcceptRemoveClick
            }
        }
    }
}