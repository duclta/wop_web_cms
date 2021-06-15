import { useEffect, useMemo, useState } from "react";
import { useCollectionState, useContributorState, usePlantState, usePostState, useRequestModeratorState } from "@/models";
import { toLongDateTime } from "@/utils";
import { routerPaths } from "@/routers";
import { useHistory } from "react-router-dom";
import { useDisclosure, useToast } from "@chakra-ui/react";

export const useHomePage = (props: any) => {
    const { componentsRender } = props;

    const { queries: plantQueries, commands: plantCommands } = usePlantState();
    const { queries: postQueries, commands: postCommands } = usePostState();
    const { queries: collectionQueries, commands: collectionCommands } = useCollectionState();
    const { queries: contributorQueries, commands: contributorCommands } = useContributorState();
    const { queries: moderatorQueries, commands: moderatorCommands } = useRequestModeratorState();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [currentModerator, setCurrentModerator] = useState('');

    useEffect(() => {
        plantCommands.fetchListPlants();
        postCommands.fetchListPost();
        collectionCommands.fetchListCollections();
        contributorCommands.getListContributors();
        moderatorCommands.fetchListRequestModerator();
    }, []);


    const history = useHistory();

    const [btnRefreshRequestModeratorLoading, setBtnRefreshRequestModeratorLoading] = useState(false);
    const [btnAcceptRequestModeratorLoading, setBtnAcceptRequestModeratorLoading] = useState(false);


    const handleBtnViewActionClick = (id: string) => {
        setCurrentModerator(id);
        onOpen();
    }

    const toast = useToast();

    const onAccept = async (id: string) => {
        setBtnAcceptRequestModeratorLoading(true);
        try {
            await moderatorCommands.acceptRequestModerator(id);
            await moderatorCommands.fetchListRequestModerator();
            toast({
                title: "Accept request successfully",
                status: "success",
                duration: 3000,
                isClosable: true,
            })
            onClose();
        } catch (error) {
            toast({
                title: "Accept request failed",
                status: "error",
                duration: 3000,
                isClosable: true,
            })
        }
        setBtnAcceptRequestModeratorLoading(false)
    }

    const handleBtnEditActionClick = (id: string) => {
        history.push(`${routerPaths.posts}/edit/${id}`)
    }

    const handleBtnRefreshRequestModeratorClick = async () => {
        setBtnRefreshRequestModeratorLoading(true);
        await moderatorCommands.fetchListRequestModerator();
        setBtnRefreshRequestModeratorLoading(false)
    }

    const columnsRequestModerator = useMemo<any[]>(() => [
        {
            title: "ID",
            dataIndex: "id",
            key: "id",
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
            title: "Action",
            key: "action",
            dataIndex: "user",
            render: (user: any) => componentsRender.action({ id: user.username, handleBtnViewActionClick }),
        },
    ], [])


    return {
        state: {
            listPlants: plantQueries.state,
            listPosts: postQueries.state,
            listCollections: collectionQueries.state,
            listContributors: contributorQueries.state,
            listRequestModerator: moderatorQueries.state,
            columnsRequestModerator,
            btnRefreshRequestModeratorLoading,
            btnAcceptRequestModeratorLoading,
            currentModerator
        },
        methods: {
            handleBtnRefreshRequestModeratorClick,
        },
        modal: { isOpen, onOpen, onClose, onAccept }
    }
}