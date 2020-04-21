
import {Experience} from "./Experience";
import {Knowledge} from "./Knowledge";

import {Uuid, Timestamp, Struct, Long} from "../../GaiaClient";

export interface Retrieval {
    /**
    * Container element which collects all information static data
    */
    knowledge?:Knowledge, 
    /**
    * Container element which collects all information about runtime data
    */
    experience?:Experience
}