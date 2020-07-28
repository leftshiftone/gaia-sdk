

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaFunctionClient";
import {RuntimeState} from "../enumeration/RuntimeState";
import {SkillState} from "../enumeration/SkillState";

/**
 * Input for utterance perception impulse
 */
export class PerceiveUtteranceImpulse {

    private utterance:String;

    constructor (utterance:String) {
        this.utterance = utterance;
    }
}
