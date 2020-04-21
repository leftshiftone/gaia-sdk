

import {Uuid, Timestamp, Struct, Long} from "../../GaiaClient";

export interface OnCreated {
    id?:Uuid, 
    identityId?:Uuid, 
    reference?:Uuid, 
    type?:String
}