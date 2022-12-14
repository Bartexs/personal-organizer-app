import { AppUserRole } from "./AppUserRoles.model";


export interface AppUser {
    id?: number;
    name: string;
    username: string;
    password: string;
    appUserRole: AppUserRole
}
