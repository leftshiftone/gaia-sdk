

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, Timestamp, Struct, Long} from "../../GaiaFunctionClient";
import {RuntimeState} from "../enumeration/RuntimeState";
import {SkillState} from "../enumeration/SkillState";

/**
 * The specification to delete intent instances
 */
export class DeleteIntentsImpulse {

    private id:Uuid;
    private intents:DeleteIntent;

    constructor (id:Uuid, intents:DeleteIntent) {
        this.id = id;
        this.intents = intents;
    }
}
