

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, Timestamp, Struct, Long} from "../../GaiaFunctionClient";
import {RuntimeState} from "../enumeration/RuntimeState";
import {SkillState} from "../enumeration/SkillState";

/**
 * The specification to update intent instances
 */
export class UpdateIntentsImpulse {

    private id:Uuid;
    private intents:UpdateIntent;

    constructor (id:Uuid, intents:UpdateIntent) {
        this.id = id;
        this.intents = intents;
    }
}
