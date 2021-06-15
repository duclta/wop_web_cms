import { UseMyCollectionsProps } from "../MyCollectionsProps"
import { toLongDateTime } from '@/utils'
import { CollectionImage, useUserState } from "@/models";
import { useEffect, useMemo } from "react";
import { useHistory } from "react-router-dom";
import { routerPaths } from "@/routers";

export const useMyCollections = (props: UseMyCollectionsProps) => {
    const { componentsRender } = props;
    const { queries, commands } = useUserState();
    const history = useHistory();

    const handleBtnViewActionClick = (id: string) => {
        history.push(`${routerPaths.collections}/${id}`)
    }

    const handleBtnEditActionClick = (id: string) => {
        history.push(`${routerPaths.collections}/edit/${id}`)
    }

    const columns = useMemo<any[]>(() => [
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Images",
            dataIndex: "images",
            key: "images",
            render: (images: CollectionImage[]) => images ? images.length : 0
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
            dataIndex: "id",
            render: (id: string) => componentsRender.action({ id, handleBtnViewActionClick, handleBtnEditActionClick }),
        },
    ], [queries.state.myCollections])

    useEffect(() => {
        commands.fetchListMyCollections();
    }, [])

    return {
        states: {
            columns,
            myCollections: queries.state.myCollections,
        }
    }
}