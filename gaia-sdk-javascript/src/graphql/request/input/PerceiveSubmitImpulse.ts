

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, Timestamp, Struct, Long} from "../../GaiaClient";

/**
 * Input for submit perception impulse
 */
export default class PerceiveSubmitImpulse {

    private name:String;
    private value:String;

    constructor (name:String, value:String) {
        this.name = name;
        this.value = value;
    }
}
