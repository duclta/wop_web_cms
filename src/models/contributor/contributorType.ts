import { Optional } from '@/common';
import { UserProfile } from '../user';

export type Contributor = {
    id?: Optional<string>;
    username?: Optional<string>;
    profile?: Optional<UserProfile>;
    followings?: any[];
    followed?: any[];
    name?: Optional<string>;
    role?: Optional<string>;
}