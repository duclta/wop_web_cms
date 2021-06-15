import { PlantContribute, usePlantContributeState } from "@/models"
import { useToast } from "@chakra-ui/react";
import { useState } from "react";

export const usePlantContributeItem = (props: { data: PlantContribute }) => {
    const toast = useToast();
    const { data } = props;
    const { commands: { requestUpVote, requestDownVote } } = usePlantContributeState();
    const [btnUpVoteIsLoading, setBtnUpVoteIsLoading] = useState(false);
    const [btnDownVoteIsLoading, setBtnDownVoteIsLoading] = useState(false);

    const handleBtnUpVoteClick = async () => {
        setBtnUpVoteIsLoading(true);
        try {
            await requestUpVote({
                tag: data.tag,
                tab: data.tab,
                attribute: data.attribute,
                contribute_id: data.id
            });
            toast({
                title: "Vote successfully",
                status: "success",
                duration: 3000,
                isClosable: true,
            })
        } catch (error) {
            toast({
                title: error.response.data.error,
                status: "error",
                duration: 3000,
                isClosable: true,
            })
        }
        setBtnUpVoteIsLoading(false);
    }

    const handleBtnDownVoteClick = async () => {
        setBtnDownVoteIsLoading(true);
        try {
            await requestDownVote({
                tag: data.tag,
                tab: data.tab,
                attribute: data.attribute,
                contribute_id: data.id
            });
            toast({
                title: "Voted successfully",
                status: "success",
                duration: 3000,
                isClosable: true,
            })
        } catch (error) {
            toast({
                title: error.response.data.error,
                status: "error",
                duration: 3000,
                isClosable: true,
            })
        }
        setBtnDownVoteIsLoading(false);
    }

    return {
        states: {
            btnUpVoteIsLoading,
            btnDownVoteIsLoading
        },
        methods: {
            handleBtnUpVoteClick,
            handleBtnDownVoteClick
        }
    }

}