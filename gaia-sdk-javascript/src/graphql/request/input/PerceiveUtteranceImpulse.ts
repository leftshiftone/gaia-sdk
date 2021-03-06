

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {Order} from "../enumeration/Order";
import {OrderByField} from "../enumeration/OrderByField";
import {EdgeOrderByField} from "../enumeration/EdgeOrderByField";
import {EdgeType} from "../enumeration/EdgeType";

/**
 * Input for utterance perception impulse
 */
export class PerceiveUtteranceImpulse {
public _typeName = "PerceiveUtteranceImpulse";
    private utterance:String;

    constructor (utterance:String) {
        this.utterance = utterance;
    }
}
