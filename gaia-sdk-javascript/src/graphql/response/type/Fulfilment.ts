

import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../../request/enumeration/RuntimeState";
import {SkillState} from "../../request/enumeration/SkillState";

/**
* this type represents the fulfilment information
*/
export interface Fulfilment {
    /**
    * The fulfilment id
    */
    identityId?:Uuid, 
    /**
    * The fulfilment reference id
    */
    reference?:Uuid, 
    /**
    * The name of the fulfilment
    */
    qualifier?:string, 
    /**
    * Detailed description about the fulfilment
    */
    appendent?:string, 
    /**
    * The utterance dictionary. The key is a language key and the value is a list of utterances
    */
    utterance?:Struct, 
    /**
    * The list of labels of the fulfilment
    */
    labelList?:[string], 
    /**
    * The version of the fulfilment
    */
    version?:string
}