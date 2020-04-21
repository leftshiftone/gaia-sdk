

import {Uuid, Timestamp, Struct, Long} from "../../GaiaClient";

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
    qualifier?:String, 
    /**
    * Detailed description about the fulfilment
    */
    appendent?:String, 
    /**
    * The utterance dictionary. The key is a language key and the value is a list of utterances
    */
    utterance?:Struct, 
    /**
    * The list of labels of the fulfilment
    */
    labellist?:[String], 
    /**
    * The version of the fulfilment
    */
    version?:String
}