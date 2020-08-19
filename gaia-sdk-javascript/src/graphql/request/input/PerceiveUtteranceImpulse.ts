

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../enumeration/RuntimeState";
import {SkillState} from "../enumeration/SkillState";
import {Order} from "../enumeration/Order";
import {OrderByField} from "../enumeration/OrderByField";
import {EdgeOrderByField} from "../enumeration/EdgeOrderByField";

/**
 * Input for utterance perception impulse
 */
export class PerceiveUtteranceImpulse {

    private utterance:String;

    constructor (utterance:String) {
        this.utterance = utterance;
    }
}
