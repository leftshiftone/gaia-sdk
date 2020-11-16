

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../enumeration/RuntimeState";
import {SkillState} from "../enumeration/SkillState";
import {Order} from "../enumeration/Order";
import {OrderByField} from "../enumeration/OrderByField";
import {EdgeOrderByField} from "../enumeration/EdgeOrderByField";

/**
 * The specification to create an identity instance
 */
export class CreateIdentityImpulse {
public _typeName = "CreateIdentityImpulse";
    private tenantId:String;
    private qualifier:String;

    constructor (tenantId:String, qualifier:String) {
        this.tenantId = tenantId;
        this.qualifier = qualifier;
    }
}
