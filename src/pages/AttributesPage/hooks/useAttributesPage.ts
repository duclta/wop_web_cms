import { useEffect, useMemo, useRef } from "react";
import { useAttributeState } from "@/models";
import { UseAttributesPageProps } from '../AttributesPageProps'
import { useHistory } from "react-router-dom";
import { routerPaths } from "@/routers";
import { toLongDateTime } from "@/utils";
import { useDisclosure, useToast } from "@chakra-ui/react";

export const useAttributesPage = (props: UseAttributesPageProps) => {
    const { componentsRender } = props;
    const history = useHistory();
    const { queries, commands } = useAttributeState();

    const { isOpen, onOpen, onClose } = useDisclosure();
    const cancelRef = useRef();
    const indexRef = useRef<string>();
    const toast = useToast();

    const handleBtnViewActionClick = (id: string) => {
        history.push(`${routerPaths.attributes}/${id}`)
    }

    const handleBtnEditActionClick = (id: string) => {
        history.push(`${routerPaths.attributes}/edit/${id}`)
    }

    const handleBtnRemoveActionClick = (name: string) => {
        indexRef.current = name;
        onOpen();
    }

    const handleBtnAcceptRemoveClick = async () => {
        try {
            await commands.removeAttribute(indexRef.current);
            toast({
                title: "Remove attribute successfully",
                status: "success",
                duration: 1000,
                isClosable: true,
            });
        } catch (error) {
            toast({
                title: "Remove attribute failed",
                status: "error",
                duration: 1000,
                isClosable: true,
            });
        }
        commands.getListAttributes();
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
        commands.getListAttributes();
    }, []);

    return {
        state: {
            columns,
            listAttributes: queries.state,
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