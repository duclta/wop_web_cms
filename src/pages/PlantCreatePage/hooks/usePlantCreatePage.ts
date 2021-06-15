import { Attribute, useAttributeState, useFamilyState, usePlantState, useTabState } from "@/models";
import { routerPaths } from "@/routers";
import { CreatePlantReq } from "@/services/plant/plantServiceTypes";
import { useToast } from "@chakra-ui/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

export const usePlantCreatePage = (props: {
    renderComponents: {
        attribute: (props: {
            listAttributes: Attribute[];
            handleChange: any;
        }) => JSX.Element
    }
}) => {
    const { renderComponents } = props;
    const useCreatePlantForm = useForm();
    const toast = useToast();
    const history = useHistory();

    const { queries: plantQueries, commands: plantCommands } = usePlantState();
    const { queries: familyQueries, commands: familyCommands } = useFamilyState();
    const { queries: tabQueries, commands: tabCommands } = useTabState();
    const { queries: attributeQueries, commands: attributeCommands } = useAttributeState();


    const [panes, setPanes] = useState<{ title: string, value: string, content: JSX.Element }[]>([])
    const [tabsSelected, setTabsSelected] = useState<string[]>([]);
    const refTabAttr = useRef<{ [tab: string]: string[] }>({});

    const handleSubmitCreatePlantForm = useCallback(() => {
        return useCreatePlantForm.handleSubmit(async (data: CreatePlantReq) => {
            const dataTabAttr = refTabAttr.current;
            try {
                await plantCommands.createPlant(data);
                await plantCommands.addTabToPlant({
                    tag: data.tag,
                    tabs: tabsSelected,
                });
                await Promise.all(tabsSelected.map(tab => plantCommands.addAttributeToPlant({
                    tag: data.tag,
                    tab: tab,
                    attributes: dataTabAttr[tab],
                })));

                toast({
                    title: "Create plant successfully",
                    status: "success",
                    duration: 1000,
                    isClosable: true,
                });
                // history.push(routerPaths.plants)
            } catch (error) {
                toast({
                    title: "Plant name already exists",
                    status: "error",
                    duration: 1000,
                    isClosable: true,
                });
            }
        })
    }, [tabsSelected]);

    const handleTabsSelectChange = (value: string[]) => {
        setTabsSelected(value);
        Object.keys(refTabAttr.current).filter(key => !value.includes(key)).forEach(key => {
            refTabAttr.current[key] = []
        })
    }

    const handleAttributesSelectChange = (value: string[], tab: string) => {
        refTabAttr.current[tab] = value
    }

    const handleAddTabsClick = () => {
        setPanes(tabsSelected.map(tab => {
            return { title: tab, value: tab, content: renderComponents.attribute({ listAttributes: attributeQueries.state, handleChange: (value: string[]) => (handleAttributesSelectChange(value, tab)) }) }
        }))
    }

    useEffect(() => {
        familyCommands.getListFamilies();
        tabCommands.getListTabs();
        attributeCommands.getListAttributes()
    }, [])

    return {
        states: {
            families: familyQueries.state,
            listTabs: tabQueries.state,
            panes,
            tabsSelected,
        },
        form: {
            createPlantForm: {
                hook: useCreatePlantForm,
                state: {
                    isSubmitting: useCreatePlantForm.formState.isSubmitting,
                },
                methods: {
                    handleSubmitCreatePlantForm,
                }
            }
        },
        methods: {
            handleAddTabsClick,
            handleTabsSelectChange
        }
    }
}