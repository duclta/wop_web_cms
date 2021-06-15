import { ListTabsRes } from '@/services';
import { Tab } from './tabType';

export const fromFetchListTabsResToTabs = (res: ListTabsRes): Tab[] => {
    return Object.values(res).map(item => {
        return {
            id: item._id,
            name: item.name,
            description: item.description,
            image: item.image,
            createdAt: item.createdAt,
            updatedAt: item.updatedAt,
        }
    })
}