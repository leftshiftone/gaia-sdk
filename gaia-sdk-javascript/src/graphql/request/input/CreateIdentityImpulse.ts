

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../enumeration/RuntimeState";
import {SkillState} from "../enumeration/SkillState";
import {Order} from "../enumeration/Order";
import {OrderBy} from "../enumeration/OrderBy";

/**
 * The specification to create an identity instance
 */
export class CreateIdentityImpulse {

    private qualifier:String;

    constructor (qualifier:String) {
        this.qualifier = qualifier;
    }
}
