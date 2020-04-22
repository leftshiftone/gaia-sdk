

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, Timestamp, Struct, Long} from "../../GaiaClient";
import {RuntimeState} from "./request/enumeration/RuntimeState";
import {SkillState} from "./request/enumeration/SkillState";

/**
 * Input for data perception impulse.
 */
export class PerceiveDataImpulse {

    private name:String;
    private data:Struct;

    constructor (name:String, data:Struct) {
        this.name = name;
        this.data = data;
    }
}
