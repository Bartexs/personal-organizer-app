// export interface Notification {
//     title: string, 
//     typeOfObject: string, 
//     message: string
// }
import { StatusTypes } from "../statusTypesEnum/StatusTypes.model"

export interface Notification {
    statusType: StatusTypes, 
    message: string
}

