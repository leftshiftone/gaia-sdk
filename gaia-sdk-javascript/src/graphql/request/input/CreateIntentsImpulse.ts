

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, Timestamp, Struct, Long} from "../../GaiaClient";
import {RuntimeState} from "../enumeration/RuntimeState";
import {SkillState} from "../enumeration/SkillState";

/**
 * The specification to create intent instances
 */
export class CreateIntentsImpulse {

    private id:Uuid;
    private intents:CreateIntent;

    constructor (id:Uuid, intents:CreateIntent) {
        this.id = id;
        this.intents = intents;
    }
}
