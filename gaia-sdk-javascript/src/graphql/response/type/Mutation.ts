
import {Evaluation} from "./Evaluation";
import {Preservation} from "./Preservation";
import {Practice} from "./Practice";
import {Perception} from "./Perception";
import {Activation} from "./Activation";

import {Uuid, Timestamp, Struct, Long} from "../../GaiaClient";

/**
* The top level mutation type
*/
export interface Mutation {
    /**
    * Sensor impulses for all perception based functions.
    *     Perceptions are used to invoke events within gaia.
    */
    perceive?:Perception, 
    /**
    * Sensor impulses for all practice based functions.
    *     Practices are used to transfer skills to gaia and to train them.
    */
    practice?:Practice, 
    /**
    * Sensor impulses for all preservation based functions.
    *     Preservations are used to invoke create/update/delete functions.
    */
    preserve?:Preservation, 
    /**
    * Container element for all evaluate sensor fields.
    *     Evaluations are used to invoke skills and to return the result.
    */
    evaluate?:Evaluation, 
    /**
    * Container element for all evaluate sensor fields.
    *     The activation can be used to unseal the vault or to grant access to an user.
    */
    activate?:Activation
}