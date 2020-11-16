

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
public _typeName = "UpdateIdentityImpulse";
    private identityId:Uuid;
    private tenantId:String;
    private qualifier:String;

    constructor (identityId:Uuid, tenantId:String, qualifier:String) {
        this.identityId = identityId;
        this.tenantId = tenantId;
        this.qualifier = qualifier;
    }
}
