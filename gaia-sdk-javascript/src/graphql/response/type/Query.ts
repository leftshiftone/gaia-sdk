
import {Retrieval} from "./Retrieval";
import {Introspection} from "./Introspection";

import {Uuid, Timestamp, Struct, Long} from "../../GaiaClient";
import {RuntimeState} from "../../request/enumeration/RuntimeState";
import {SkillState} from "../../request/enumeration/SkillState";

/**
* The top level query type
*/
export interface Query {
    /**
    * Container element for all introspect sensor fields
    */
    introspect?:Introspection, 
    /**
    * Container element for all retrieve sensor fields
    */
    retrieve?:Retrieval
}