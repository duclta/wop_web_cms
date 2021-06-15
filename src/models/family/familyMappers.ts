import { ListFamiliesRes } from '../../services';
import { Family } from './familyType';

export const fromFetchListFamiliesResToFamilies = (res: ListFamiliesRes): Family[] => {
    return Object.values(res).map(item => {
        return {
            id: item._id,
            name: item.family,
            description: item.description,
            focus: item.focus,
            createdAt: item.createdAt,
            updatedAt: item.updatedAt,
        }
    })
}