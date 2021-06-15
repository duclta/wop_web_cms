import { GetListContributorsRes } from "../../services"
import { Contributor } from "./contributorType"

export const fromListContributorResToContributors = (res: GetListContributorsRes): Contributor[] => {
    return Object.values(res).map(item => {
        return {
            id: item.id,
            username: item.username,
            profile: item.profile && {
                id: item.profile.id,
                firstName: item.profile.firstName,
                lastName: item.profile.lastName,
                email: item.profile.email,
                avatar: item.profile.avata,
            },
            followings: item.followings,
            followed: item.followed,
            name: item.profile ? `${item.profile.firstName} ${item.profile.lastName}` : item.username,
            role: item.role,
        }
    })
}