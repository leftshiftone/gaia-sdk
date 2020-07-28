

import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../../request/enumeration/RuntimeState";
import {SkillState} from "../../request/enumeration/SkillState";

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