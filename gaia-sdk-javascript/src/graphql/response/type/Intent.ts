

import {Uuid, Timestamp, Struct, Long} from "../../GaiaClient";
import {RuntimeState} from "../../request/enumeration/RuntimeState";
import {SkillState} from "../../request/enumeration/SkillState";

/**
* this type represents the intent information
*/
export interface Intent {
    /**
    * The identity id
    */
    identityId?:Uuid, 
    /**
    * The intent reference id
    */
    reference?:Uuid, 
    /**
    * The name of the intent
    */
    qualifier?:String, 
    /**
    * Detailed description about the intent
    */
    appendent?:String, 
    /**
    * The utterance dictionary. The key is a language key and the value is a list of utterances
    */
    utterance?:Struct, 
    /**
    * The list of labels of the intent
    */
    labellist?:[String], 
    /**
    * The version of the intent
    */
    version?:String
}