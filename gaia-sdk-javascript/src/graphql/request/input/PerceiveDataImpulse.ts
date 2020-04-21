

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, Timestamp, Struct, Long} from "../../GaiaClient";

/**
 * Input for data perception impulse.
 */
export default class PerceiveDataImpulse {

    private name:String;
    private data:Struct;

    constructor (name:String, data:Struct) {
        this.name = name;
        this.data = data;
    }
}
