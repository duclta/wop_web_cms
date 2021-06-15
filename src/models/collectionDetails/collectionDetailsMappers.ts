import { FetchCollectionDetailsRes } from '@/services';
import { convertTagToName } from '@/utils';
import { CollectionDetails } from './collectionDetailsType';

export const fromCollectionDetailsResToCollectionDetails = (res: FetchCollectionDetailsRes): CollectionDetails => {
    return {
        id: res.id,
        name: convertTagToName(res.tag),
        tag: res.tag,
        createdAt: res.createdAt,
        updatedAt: res.updatedAt,
        user: {
            name: res.user.profile ? res.user.profile.firstName + " " + res.user.profile.lastName : res.user.username,
            avatar: res.user.profile && res.user.profile.avata,
        },
        images: res.images.map(img => {
            return {
                id: img.id,
                url: img.image,
                createdAt: img.createdAt,
                updatedAt: img.updatedAt,
            }
        })
    }
}