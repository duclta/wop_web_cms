import { AuthPermissions } from "@/constants"
import { AttributeCreatePage, AttributesPage, FamiliesPage, FamilyCreatePage, HomePage, Login, PostsPage, TabCreatePage, PlantsPage, PlantCreatePage, CollectionsPage, TabsPage, ContributorsPage } from "@/pages"


type RouterConfig = {
    page: (props?: any) => JSX.Element,
    path: string,
    exact: boolean,
    permissions: Array<AuthPermissions>,
    isHideHeader?: boolean;
    isHideFooter?: boolean;
    pathRedirect?: string;
}

export const routerPaths = {
    home: '/',
    attributes: '/attributes',
    tabs: '/tabs',
    families: '/families',
    plants: '/plants',
    posts: '/posts',
    collections: '/collections',
    contributors: '/contributors',
    login: '/login',
}

export const routerConfigs: RouterConfig[] = [
    {
        page: HomePage,
        path: routerPaths.home,
        exact: true,
        permissions: [AuthPermissions.USER],
        pathRedirect: routerPaths.login,
    },
    {
        page: Login,
        path: routerPaths.login,
        exact: true,
        permissions: [AuthPermissions.GUEST],
        pathRedirect: routerPaths.home,
        isHideHeader: true,
        isHideFooter: true,
    },
    {
        page: AttributeCreatePage,
        path: `${routerPaths.attributes}/create`,
        exact: true,
        permissions: [AuthPermissions.USER],
        pathRedirect: routerPaths.login,
    },
    {
        page: AttributesPage,
        path: routerPaths.attributes,
        exact: true,
        permissions: [AuthPermissions.USER],
        pathRedirect: routerPaths.login,
    },
    {
        page: TabsPage,
        path: routerPaths.tabs,
        exact: true,
        permissions: [AuthPermissions.USER],
        pathRedirect: routerPaths.login,
    },
    {
        page: TabCreatePage,
        path: `${routerPaths.tabs}/create`,
        exact: true,
        permissions: [AuthPermissions.USER],
        pathRedirect: routerPaths.login,
    },
    {
        page: FamiliesPage,
        path: routerPaths.families,
        exact: true,
        permissions: [AuthPermissions.USER],
        pathRedirect: routerPaths.login,
    },
    {
        page: FamilyCreatePage,
        path: `${routerPaths.families}/create`,
        exact: true,
        permissions: [AuthPermissions.USER],
        pathRedirect: routerPaths.login,
    },
    {
        page: PlantCreatePage,
        path: `${routerPaths.plants}/create`,
        exact: true,
        permissions: [AuthPermissions.USER],
        pathRedirect: routerPaths.login,
    },
    {
        page: PlantsPage,
        path: routerPaths.plants,
        exact: true,
        permissions: [AuthPermissions.USER],
        pathRedirect: routerPaths.login,
    },
    {
        page: PostsPage,
        path: routerPaths.posts,
        exact: true,
        permissions: [AuthPermissions.USER],
        pathRedirect: routerPaths.login,
    },
    {
        page: CollectionsPage,
        path: routerPaths.collections,
        exact: true,
        permissions: [AuthPermissions.USER],
        pathRedirect: routerPaths.login,
    },
    {
        page: ContributorsPage,
        path: routerPaths.contributors,
        exact: true,
        permissions: [AuthPermissions.USER],
        pathRedirect: routerPaths.login,
    },
]
