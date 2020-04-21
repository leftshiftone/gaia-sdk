
import {DeletedIntentImpulse} from "./DeletedIntentImpulse";
import {CreatedIntentImpulse} from "./CreatedIntentImpulse";
import {UpdatedIntentImpulse} from "./UpdatedIntentImpulse";
import {CreateIntentImpulse} from "../../request/input/CreateIntentImpulse";
import {UpdateIntentImpulse} from "../../request/input/UpdateIntentImpulse";
import {DeleteIntentImpulse} from "../../request/input/DeleteIntentImpulse";

import {Uuid, Timestamp, Struct, Long} from "../../GaiaClient";

/**
* This type contains all preservation sensor impulses which are used to support
* read/write/delete memory functions in gaia.
*/
export interface Preservation {
    /**
    * creates an intent with the given specification
    */
    createIntent?:CreatedIntentImpulse, 
    /**
    * updates an intent with the given specification
    */
    updateIntent?:UpdatedIntentImpulse, 
    /**
    * deletes an intent with the given specification
    */
    deleteIntent?:DeletedIntentImpulse, 
    /**
    * creates a list of intents with the given specifications
    */
    createIntents?:[CreatedIntentImpulse], 
    /**
    * updates a list of intents with the given specifications
    */
    updateIntents?:[UpdatedIntentImpulse], 
    /**
    * deletes a list of intents with the given specifications
    */
    deleteIntents?:[DeletedIntentImpulse]
}