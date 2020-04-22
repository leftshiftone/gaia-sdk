

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, Timestamp, Struct, Long} from "../../GaiaClient";
import {RuntimeState} from "./request/enumeration/RuntimeState";
import {SkillState} from "./request/enumeration/SkillState";

/**
 * Input for suggestion perception impulse
 */
export class PerceiveSuggestionImpulse {

    private data:Struct;

    constructor (data:Struct) {
        this.data = data;
    }
}
