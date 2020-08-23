

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../enumeration/RuntimeState";
import {SkillState} from "../enumeration/SkillState";
import {Order} from "../enumeration/Order";
import {OrderByField} from "../enumeration/OrderByField";
import {EdgeOrderByField} from "../enumeration/EdgeOrderByField";

/**
 * The specification to update an identity instance
 */
export class UpdateIdentityImpulse {

    private identityId:Uuid;
    private qualifier:String;

    constructor (identityId:Uuid, qualifier:String) {
        this.identityId = identityId;
        this.qualifier = qualifier;
    }
}
