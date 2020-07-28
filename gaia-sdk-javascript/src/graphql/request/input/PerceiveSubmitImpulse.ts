

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaFunctionClient";
import {RuntimeState} from "../enumeration/RuntimeState";
import {SkillState} from "../enumeration/SkillState";

/**
 * Input for submit perception impulse
 */
export class PerceiveSubmitImpulse {

    private name:String;
    private value:String;

    constructor (name:String, value:String) {
        this.name = name;
        this.value = value;
    }
}
