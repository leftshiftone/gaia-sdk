

import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../../request/enumeration/RuntimeState";
import {SkillState} from "../../request/enumeration/SkillState";
import {Order} from "../enumeration/Order";
import {OrderBy} from "../enumeration/OrderBy";

/**
* Represents identity information
*/
export interface Identity {
    /**
    * The identity id
    */
    identityId?:Uuid, 
    /**
    * The name of the identity
    */
    qualifier?:string
}