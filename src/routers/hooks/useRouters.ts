import { AuthPermissions, ROLE } from '@/constants';

export const useRouters = () => {
    const authPermission:AuthPermissions = localStorage.getItem(ROLE) as AuthPermissions || AuthPermissions.GUEST;
    return {
        states: {
            authPermission
        }
    }
}