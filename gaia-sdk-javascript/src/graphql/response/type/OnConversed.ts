

import {Uuid, Timestamp, Struct, Long} from "../../GaiaClient";

export interface OnConversed {
    id?:Uuid, 
    name?:String, 
    type?:String
}