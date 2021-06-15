import { useEffect, useMemo } from "react";
import { useContributorState, usePostState } from "@/models";
import { UseContributorsPageProps } from '../ContributorsPageProps'
import { useHistory } from "react-router-dom";
import { routerPaths } from "@/routers";
import { toLongDateTime } from "@/utils";

export const useContributorsPage = (props: UseContributorsPageProps) => {
    const { componentsRender } = props;
    const history = useHistory();
    const { queries, commands } = useContributorState();

    const handleBtnViewActionClick = (id: string) => {
        history.push(`${routerPaths.contributors}/${id}`)
    }

    const handleBtnEditActionClick = (id: string) => {
        history.push(`${routerPaths.contributors}/edit/${id}`)
    }

    const columns = useMemo<any[]>(() => [
        {
            title: "ID",
            dataIndex: "id",
            key: "id",
        },
        {
            title: "Username",
            dataIndex: "username",
            key: "username",
        },
        {
            title: "Role",
            key: "role",
            dataIndex: "role",
        },
        {
            title: "Avatar",
            dataIndex: "profile",
            key: "avatar",
            render: (data: any) => componentsRender.thumbnail({ src: data?.avatar }),
        },
        {
            title: "First name",
            key: "firstName",
            dataIndex: "profile",
            render: (data: any) => data?.firstName,
        },
        {
            title: "Last name",
            key: "lastName",
            dataIndex: "profile",
            render: (data: any) => data?.lastName,
        },
        {
            title: "Email",
            key: "email",
            dataIndex: "profile",
            render: (data: any) => data?.email,
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
        commands.getListContributors();
    }, []);

    return {
        state: {
            columns,
            listContributors: queries.state
        }
    }
}