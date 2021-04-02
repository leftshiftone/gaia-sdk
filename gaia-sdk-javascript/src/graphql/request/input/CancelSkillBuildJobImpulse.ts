

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {Order} from "../enumeration/Order";
import {OrderByField} from "../enumeration/OrderByField";
import {EdgeOrderByField} from "../enumeration/EdgeOrderByField";
import {EdgeType} from "../enumeration/EdgeType";

export class CancelSkillBuildJobImpulse {
public _typeName = "CancelSkillBuildJobImpulse";
    private tenantId:Uuid;
    private buildJobRef:Uuid;

    constructor (tenantId:Uuid, buildJobRef:Uuid) {
        this.tenantId = tenantId;
        this.buildJobRef = buildJobRef;
    }
}
