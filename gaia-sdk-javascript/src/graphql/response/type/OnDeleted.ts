

import {Uuid, Timestamp, Struct, Long} from "../../GaiaClient";

export interface OnDeleted {
    id?:Uuid, 
    identityId?:Uuid, 
    reference?:Uuid, 
    type?:String
}