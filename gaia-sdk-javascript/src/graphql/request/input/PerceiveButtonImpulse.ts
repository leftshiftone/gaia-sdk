

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, Timestamp, Struct, Long} from "../../GaiaClient";
import {RuntimeState} from "./request/enumeration/RuntimeState";
import {SkillState} from "./request/enumeration/SkillState";

/**
 * Input for button perception impulse
 */
export class PerceiveButtonImpulse {

    private name:String;
    private value:String;

    constructor (name:String, value:String) {
        this.name = name;
        this.value = value;
    }
}
