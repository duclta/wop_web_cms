import { Optional } from '@/common'
import { AuthPermissions } from '@/constants'

export type Auth = {
    hasRequestLogin?: Optional<boolean>;
    isLogin?: Optional<boolean>;
    accessToken?: Optional<string>;
    role?: Optional<AuthPermissions>;
    id?: Optional<string>;
    username?: Optional<string>;
    userRole?: Optional<string>;
}


export type LoginInput = {
    username: string;
    password: string;
}