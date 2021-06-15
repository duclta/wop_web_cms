import { Optional } from '@/common'
import { UserProfile } from '..'
import { Collection, MyCollection } from '../collection'
import { PlantContribute } from '../plantDetails'
import { MyPost, Post } from '../post'

export type ContributorDetails = {
    id?: Optional<string>;
    username?: Optional<string>;
    profile?: Optional<UserProfile>;
    contributes?: Optional<PlantContribute[]>;
    posts?: Optional<Post[]>;
    collections?: Optional<Collection[]>;
}