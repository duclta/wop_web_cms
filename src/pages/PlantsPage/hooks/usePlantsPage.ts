import { useEffect, useMemo, useRef } from "react";
import { usePlantState } from "@/models";
import { UsePlantsPageProps } from '../PlantsPageProps'
import { useHistory } from "react-router-dom";
import { routerPaths } from "@/routers";
import { toLongDateTime } from "@/utils";
import { useDisclosure, useToast } from "@chakra-ui/react";

export const usePlantsPage = (props: UsePlantsPageProps) => {
    const { queries, commands } = usePlantState();
    const { componentsRender } = props;
    const history = useHistory();

    const { isOpen, onOpen, onClose } = useDisclosure();
    const cancelRef = useRef();
    const indexRef = useRef<string>();
    const toast = useToast();

    const handleBtnViewActionClick = (id: string) => {
        history.push(`${routerPaths.plants}/${id}`)
    }

    const handleBtnEditActionClick = (id: string) => {
        history.push(`${routerPaths.plants}/edit/${id}`)
    }

    const handleBtnRemoveActionClick = (name: string) => {
        indexRef.current = name;
        onOpen();
    }

    const handleBtnAcceptRemoveClick = async () => {
        try {
            await commands.removePlant(indexRef.current);
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
        commands.fetchListPlants();
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
            title: "Request count",
            dataIndex: "requestCount",
            key: "requestCount",
        },
        {
            title: "Contribute count",
            dataIndex: "contributeCount",
            key: "contributeCount",
        },
        {
            title: "Created at",
            key: "createdAt",
            dataIndex: "createdAt",
            render: (dateTime: string) => toLongDateTime(dateTime),
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
            dataIndex: "tag",
            render: (id: string) => componentsRender.action({ id, handleBtnViewActionClick, handleBtnEditActionClick, handleBtnRemoveActionClick }),
        },
    ], [queries.state])

    useEffect(() => {
        commands.fetchListPlants();
    }, []);

    return {
        state: {
            listPlants: queries.state,
            columns,
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