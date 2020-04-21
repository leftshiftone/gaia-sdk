

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, Timestamp, Struct, Long} from "../../GaiaClient";

/**
 * Input for reception perception impulse
 */
export default class PerceiveReceptionImpulse {

    private data:Struct;

    constructor (data:Struct) {
        this.data = data;
    }
}
