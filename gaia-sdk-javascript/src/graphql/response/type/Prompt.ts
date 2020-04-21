

import {Uuid, Timestamp, Struct, Long} from "../../GaiaClient";

/**
* this type represents the prompt information
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
    qualifier?:String, 
    /**
    * Detailed description about the prompt
    */
    appendent?:String, 
    /**
    * The utterance dictionary. The key is a language key and the value is a list of utterances
    */
    utterance?:Struct, 
    /**
    * The list of labels of the prompt
    */
    labellist?:[String], 
    /**
    * The version of the prompt
    */
    version?:String
}