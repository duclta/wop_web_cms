import { FetchListMyCollectionsRes, RegisterReq, UserDetailsRes } from '@/services'
import { convertTagToName } from '@/utils'
import { MyCollection } from '../collection'
import { MyPost } from '../post'
import { RegisterInput, User, UserProfile } from './userType'

export const fromRegisterInputToRegisterReq = (input: RegisterInput): RegisterReq => {
    return {
        username: input.username,
        password: input.password,
        role: 'user'
    }
}

export const fromUserDetailsResToUserProfile = (res: UserDetailsRes): UserProfile => {
    return {
        id: res.profile?.id,
        firstName: res.profile?.firstName,
        lastName: res.profile?.lastName,
        email: res.profile?.email,
        avatar: res.profile?.avata,
        point: res.profile?.point,
    }
}

export const fromUserDetailsResToMyPosts = (res: UserDetailsRes): MyPost[] => {
    return res.posts;
}

export const fromUserDetailsResToCommentsLiked = (res: UserDetailsRes): string[] => {
    return res.likeHistory.map(l => l.comment.id);
}

export const fromListUsersResToListUserProfile = (res: any): User[] => {
    return Object.keys(res).map(key => {
        const data = res[key];
        const plant: User = {
            id: data.id,
            username: data.username,
            profile: data.profile ? {
                firstName: data.profile.firstName,
                lastName: data.profile.lastName,
                email: data.profile.email,
                avatar: data.profile.avata,
                point: data.profile.point,
            } : undefined
        }
        return plant;
    })
}


export const fromListMyCollectionsResToMyCollections = (res: FetchListMyCollectionsRes): MyCollection[] => {
    return Object.values(res).map(data => {
        const plant: MyCollection = {
            id: data.id,
            name: convertTagToName(data.tag),
            tag: data.tag,
            createdAt: data.createdAt,
            updatedAt: data.updatedAt,
            images: data.images.map((img) => {
                return {
                    id: img.id,
                    url: img.image,
                    createdAt: img.createdAt,
                    updatedAt: img.updatedAt,
                }
            })
        }

        return plant;
    })
}