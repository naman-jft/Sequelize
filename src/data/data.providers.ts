import { User } from "./user.entity";

export const dataProviders = [{
    provide: 'USER_REPOSITORY',
    useValue: User
},
]