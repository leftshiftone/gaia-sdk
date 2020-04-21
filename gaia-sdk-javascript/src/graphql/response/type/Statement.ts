

import {Uuid, Timestamp, Struct, Long} from "../../GaiaClient";

/**
* this type represents the statement information
*/
export interface Statement {
    /**
    * The statement id
    */
    identityId?:Uuid, 
    /**
    * The statement reference id
    */
    reference?:Uuid, 
    /**
    * The name of the statement
    */
    qualifier?:String, 
    /**
    * Detailed description about the statement
    */
    appendent?:String, 
    /**
    * The utterance dictionary. The key is a language key and the value is a list of utterances
    */
    utterance?:Struct, 
    /**
    * The list of labels of the statement
    */
    labellist?:[String], 
    /**
    * The version of the statement
    */
    version?:String
}