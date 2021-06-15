import { Optional } from '@/common'
import { MyCollection } from '../collection'
import { PlantContribute } from '../plantDetails'
import { MyPost, Post } from '../post'

export type User = {
    id?: Optional<string>;
    username?: Optional<string>;
    profile?: Optional<UserProfile>;
    myContributes?: Optional<PlantContribute[]>;
    myPosts?: Optional<MyPost[]>;
    myCollections?: Optional<MyCollection[]>;
    commentsLiked?: Optional<string[]>;
}

export type UserProfile = {
    id?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    avatar?: string;
    point?: number
}

export type RegisterInput = {
    username: string;
    password: string;
}

export type UserDetailsInput = {
    username: string;
}