import { FetchListCollectionsRes } from '@/services';
import { convertTagToName } from '@/utils';
import { Collection } from './collectionType';

export const fromFetchListCollectionResToCollections = (res: FetchListCollectionsRes): Collection[] => {
    return Object.values(res).map(item => {
        return {
            id: item.id,
            name: convertTagToName(item.tag),
            tag: item.tag,
            createdAt: item.createdAt,
            updatedAt: item.updatedAt,
            user: {
                name: item.user.profile ? item.user.profile.firstName + " " + item.user.profile.lastName : item.user.username,
                avatar: item.user.profile && item.user.profile.avata,
            },
            images: item.images.map(img => {
                return {
                    id: img.id,
                    url: img.image,
                    createdAt: img.createdAt,
                    updatedAt: img.updatedAt,
                }
            })
        }
    })
}