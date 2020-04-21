

import {Uuid, Timestamp, Struct, Long} from "../../GaiaClient";

export interface OnUpdated {
    id?:Uuid, 
    identityId?:Uuid, 
    reference?:Uuid, 
    type?:String
}