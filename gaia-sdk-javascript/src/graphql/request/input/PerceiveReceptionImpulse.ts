

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../enumeration/RuntimeState";
import {SkillState} from "../enumeration/SkillState";
import {Order} from "../enumeration/Order";
import {OrderBy} from "../enumeration/OrderBy";

/**
 * Input for reception perception impulse
 */
export class PerceiveReceptionImpulse {

    private data:Struct;

    constructor (data:Struct) {
        this.data = data;
    }
}
