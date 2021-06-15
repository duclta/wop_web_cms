import { FetchListPostsRes } from '@/services';
import { Post } from './postType';

export const fromFetchListPostResToPosts = (res: FetchListPostsRes): Post[] => {
    return Object.values(res).map(item => {
        return {
            id: item.id,
            title: item.title,
            description: item.title,
            content: item.content,
            thumbnail: item.image,
            createdAt: item.createdAt,
            follow: item.follow,
            user: {
                name: item.user.profile ? item.user.profile.firstName + " " + item.user.profile.lastName : item.user.username,
                avatar: item.user.profile && item.user.profile.avata,
            },
            comments: item.comments
        }
    })
}