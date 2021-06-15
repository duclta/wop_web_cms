import { useEffect, useMemo, useRef } from "react";
import { useFamilyState, useTabState } from "@/models";
import { UseTabsPageProps } from '../FamiliesPageProps'
import { useHistory } from "react-router-dom";
import { routerPaths } from "@/routers";
import { toLongDateTime } from "@/utils";
import { useDisclosure, useToast } from "@chakra-ui/react";

export const useFamiliesPage = (props: UseTabsPageProps) => {
    const { componentsRender } = props;
    const history = useHistory();
    const { queries, commands } = useFamilyState();

    const { isOpen, onOpen, onClose } = useDisclosure();
    const cancelRef = useRef();
    const indexRef = useRef<string>();
    const toast = useToast();

    const handleBtnViewActionClick = (id: string) => {
        history.push(`${routerPaths.families}/${id}`)
    }

    const handleBtnEditActionClick = (id: string) => {
        history.push(`${routerPaths.families}/edit/${id}`)
    }

    const handleBtnRemoveActionClick = (name: string) => {
        indexRef.current = name;
        onOpen();
    }

    const handleBtnAcceptRemoveClick = async () => {
        try {
            await commands.removeFamily(indexRef.current);
            toast({
                title: "Remove family successfully",
                status: "success",
                duration: 1000,
                isClosable: true,
            });
        } catch (error) {
            toast({
                title: "Remove family failed",
                status: "error",
                duration: 1000,
                isClosable: true,
            });
        }
        commands.getListFamilies();
        onClose();
    }

    const columns = useMemo<any[]>(() => [
        {
            title: "ID",
            dataIndex: "id",
            key: "id",
        },
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Description",
            dataIndex: "description",
            key: "description",
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
        commands.getListFamilies();
    }, []);

    return {
        state: {
            columns,
            listFamilies: queries.state,
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