

import {Uuid, ISO8601, Struct} from "../../GaiaFunctionClient";
import {RuntimeState} from "../../request/enumeration/RuntimeState";
import {SkillState} from "../../request/enumeration/SkillState";

/**
* Represents behaviour information
*/
export interface Behaviour {
    /**
    * The behaviour id
    */
    identityId?:Uuid,
    /**
    * The behaviour reference id
    */
    reference?:Uuid,
    /**
    * The name of the behaviour
    */
    qualifier?:string,
    /**
    * Detailed description about the behaviour
    */
    appendent?:string,
    /**
    * The list of labels of the behaviour
    */
    labelList?:[string],
    /**
    * The behaviour xml
    */
    behaviour?:string
}
