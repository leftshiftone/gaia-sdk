

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, Timestamp, Struct, Long} from "../../GaiaClient";
import {RuntimeState} from "./request/enumeration/RuntimeState";
import {SkillState} from "./request/enumeration/SkillState";

/**
 * Input for utterance perception impulse
 */
export class PerceiveUtteranceImpulse {

    private utterance:String;

    constructor (utterance:String) {
        this.utterance = utterance;
    }
}
