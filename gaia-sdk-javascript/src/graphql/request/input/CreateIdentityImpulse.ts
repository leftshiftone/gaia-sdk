

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../enumeration/RuntimeState";
import {SkillState} from "../enumeration/SkillState";

/**
 * The specification to create an identity instance
 */
export class CreateIdentityImpulse {

    private qualifier:String;

    constructor (qualifier:String) {
        this.qualifier = qualifier;
    }
}
