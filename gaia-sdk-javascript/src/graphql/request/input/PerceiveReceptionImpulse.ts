

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, Timestamp, Struct, Long} from "../../GaiaClient";
import {RuntimeState} from "../enumeration/RuntimeState";
import {SkillState} from "../enumeration/SkillState";

/**
 * Input for reception perception impulse
 */
export class PerceiveReceptionImpulse {

    private data:Struct;

    constructor (data:Struct) {
        this.data = data;
    }
}
