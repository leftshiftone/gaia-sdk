

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, Timestamp, Struct, Long} from "../../GaiaClient";

/**
 * Input for utterance perception impulse
 */
export default class PerceiveUtteranceImpulse {

    private utterance:String;

    constructor (utterance:String) {
        this.utterance = utterance;
    }
}
