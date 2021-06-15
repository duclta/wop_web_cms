import { FetchPostDetailsRes } from '@/services';
import { convertTagToName } from '@/utils';
import { PostDetails } from './postDetailsType';

export const fromPostDetailsResToPostDetails = (res: FetchPostDetailsRes): PostDetails => {
    return {
        id: res.id,
        title: res.title,
        description: res.title,
        content: res.content,
        thumbnail: res.image,
        createdAt: res.createdAt,
        user: {
            name: res.user.profile.firstName + " " + res.user.profile.lastName,
            avatar: res.user.profile.avata,
        },
        comments: res.comments.map(cm => {
            return {
                id: cm.id,
                content: cm.content,
                createdAt: cm.createdAt,
                like: cm.like,
                user: {
                    avatar: cm.user.profile.avata,
                    name: cm.user.profile.firstName + " " + cm.user.profile.lastName,
                }
            }
        })
    }
}