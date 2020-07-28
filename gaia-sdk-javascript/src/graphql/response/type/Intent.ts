

import {Uuid, ISO8601, Struct} from "../../GaiaFunctionClient";
import {RuntimeState} from "../../request/enumeration/RuntimeState";
import {SkillState} from "../../request/enumeration/SkillState";

/**
* Represents intent information
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
    qualifier?:string,
    /**
    * Detailed description about the intent
    */
    appendent?:string,
    /**
    * The utterance dictionary. The key is a language key and the value is a list of utterances
    */
    utterance?:Struct,
    /**
    * The list of labels of the intent
    */
    labelList?:[string],
    /**
    * The version of the intent
    */
    version?:string
}
