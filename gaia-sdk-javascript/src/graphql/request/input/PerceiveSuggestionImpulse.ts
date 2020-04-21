

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, Timestamp, Struct, Long} from "../../GaiaClient";

/**
 * Input for suggestion perception impulse
 */
export default class PerceiveSuggestionImpulse {

    private data:Struct;

    constructor (data:Struct) {
        this.data = data;
    }
}
