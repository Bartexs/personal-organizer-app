// export interface Notification {
//     title: string, 
//     typeOfObject: string, 
//     message: string
// }
import { StatusTypes } from "../notifications/statusTypesEnum/StatusTypes.model"

export interface OrganizerNotification {
    statusType: StatusTypes, 
    message: string
}

