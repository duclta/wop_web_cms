import { UseMyPostsProps } from "../MyPostsProps"
import { toLongDateTime } from '@/utils'
import { useUserState } from "@/models";
import { useEffect, useMemo } from "react";
import { useHistory } from "react-router-dom";
import { routerPaths } from "@/routers";

export const useMyPosts = (props: UseMyPostsProps) => {
    const { componentsRender } = props;
    const { queries, commands } = useUserState();
    const history = useHistory();

    const handleBtnViewActionClick = (id: string) => {
        history.push(`${routerPaths.posts}/${id}`)
    }

    const handleBtnEditActionClick = (id: string) => {
        history.push(`${routerPaths.posts}/edit/${id}`)
    }

    const columns = useMemo<any[]>(() => [
        {
            title: "Thumbnail",
            dataIndex: "image",
            key: "thumbnail",
            render: (src: string) => {
                return componentsRender.thumbnail({ src })
            },
        },
        {
            title: "Title",
            dataIndex: "title",
            key: "title",
        },
        {
            title: "Follow",
            dataIndex: "follow",
            key: "follow",
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
    ], [queries.state.myPosts])

    useEffect(() => {
        commands.fetchListMyPosts();
    }, [])

    return {
        states: {
            columns,
            myPosts: queries.state.myPosts,
        }
    }
}