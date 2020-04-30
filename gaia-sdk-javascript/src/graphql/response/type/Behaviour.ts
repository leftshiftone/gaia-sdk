

import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../../request/enumeration/RuntimeState";
import {SkillState} from "../../request/enumeration/SkillState";

/**
* this type represents the behaviour information
*/
export interface Behaviour {
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
    labellist?:[string], 
    /**
    * The version of the prompt
    */
    version?:string
}