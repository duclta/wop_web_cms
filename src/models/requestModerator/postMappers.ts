import { FetchListRequestModeratorRes } from '../../services';
import { RequestModerator } from './postType';

export const fromFetchListRequestModeratorResToRequestModerators = (res: FetchListRequestModeratorRes): RequestModerator[] => {
    return Object.values(res).map(item => {
        return {
            id: item.id,
            content: item.content,
            images: JSON.parse(item.image),
            createdAt: item.createdAt,
            updateAt: item.updatedAt,
            user: {
                username: item.user.username,
                name: item.user.profile ? item.user.profile.firstName + " " + item.user.profile.lastName : item.user.username,
                avatar: item.user.profile && item.user.profile.avata,
            },
        }
    })
}