import { routerPaths } from "@/routers";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styles from "../css/sidebarNav.module.css";

export const useSidebarNav = (props: any) => {
    const history = useHistory();
    const navs = [
        {
            name: "Dashboard",
            url: routerPaths.home,
        },
        {
            name: "Attributes",
            url: routerPaths.attributes,
        },
        {
            name: "Tabs",
            url: routerPaths.tabs,
        },
        {
            name: "Families",
            url: routerPaths.families,
        },
        {
            name: "Plants",
            url: routerPaths.plants,
        },
        {
            name: "Posts",
            url: routerPaths.posts,
        },
        {
            name: "Collections",
            url: routerPaths.collections,
        },
        {
            name: "Contributors",
            url: routerPaths.contributors,
        },
    ]

    const [navActive, setNavActive] = useState<string>()
    useEffect(() => {
        switch ("/" + history.location.pathname.split('/')[1]) {
            case routerPaths.home:
                setNavActive(routerPaths.home);
                break;
            case routerPaths.attributes:
                setNavActive(routerPaths.attributes);
                break;
            case routerPaths.tabs:
                setNavActive(routerPaths.tabs);
                break;
            case routerPaths.families:
                setNavActive(routerPaths.families);
                break;
            case routerPaths.plants:
                setNavActive(routerPaths.plants);
                break;
            case routerPaths.posts:
                setNavActive(routerPaths.posts);
                break;
            case routerPaths.collections:
                setNavActive(routerPaths.collections);
                break;
            case routerPaths.contributors:
                setNavActive(routerPaths.contributors);
                break;
            default: break;
        }
    });

    return {
        state: {
            navs,
            navActive
        },
        method: {},
        styles,
    }
}