

import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../../request/enumeration/RuntimeState";
import {SkillState} from "../../request/enumeration/SkillState";
import {Order} from "../../request/enumeration/Order";
import {OrderByField} from "../../request/enumeration/OrderByField";
import {EdgeOrderByField} from "../../request/enumeration/EdgeOrderByField";

/**
* Represents prompt information
*/
export interface Prompt {
    /**
    * The prompt id
    */
    identityId?:Uuid, 
    /**
    * The prompt reference id
    */
    reference?:Uuid, 
    /**
    * The name of the prompt
    */
    qualifier?:string, 
    /**
    * Detailed description about the prompt
    */
    appendent?:string, 
    /**
    * The utterance dictionary. The key is a language key and the value is a list of utterances
    */
    utterance?:Struct, 
    /**
    * The list of labels of the prompt
    */
    labelList?:[string], 
    /**
    * The version of the prompt
    */
    version?:string
}