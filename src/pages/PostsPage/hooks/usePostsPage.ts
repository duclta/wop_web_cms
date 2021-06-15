import { useEffect, useMemo } from "react";
import { usePostState } from "@/models";
import { UsePostsPageProps } from '../PostsPageProps'
import { useHistory } from "react-router-dom";
import { routerPaths } from "@/routers";
import { toLongDateTime } from "@/utils";

export const usePostsPage = (props: UsePostsPageProps) => {
    const { componentsRender } = props;
    const history = useHistory();
    const { queries, commands } = usePostState();


    const handleBtnViewActionClick = (id: string) => {
        history.push(`${routerPaths.posts}/${id}`)
    }

    const handleBtnEditActionClick = (id: string) => {
        history.push(`${routerPaths.posts}/edit/${id}`)
    }

    const columns = useMemo<any[]>(() => [
        {
            title: "Thumbnail",
            dataIndex: "thumbnail",
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
            title: "User",
            dataIndex: "user",
            key: "user",
            render: (data: { name: string, avatar: string }) => {
                return componentsRender.user(data)
            },
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
    ], [queries.state])


    useEffect(() => {
        commands.fetchListPost();
    }, []);

    return {
        state: {
            columns,
            listPosts: queries.state
        }
    }
}