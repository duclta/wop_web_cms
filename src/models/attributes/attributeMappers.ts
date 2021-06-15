import { ListAttributesRes, FetchListPostsRes } from '@/services';
import { Attribute } from './attributeType';

export const fromFetchListAttributesResToAttributes = (res: ListAttributesRes): Attribute[] => {
    return Object.values(res).map(item => {
        return {
            id: item._id,
            name: item.name,
            description: item.description,
            createdAt: item.createdAt,
            updatedAt: item.updatedAt,
        }
    })
}