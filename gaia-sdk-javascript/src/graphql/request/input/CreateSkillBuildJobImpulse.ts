

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../enumeration/RuntimeState";
import {SkillState} from "../enumeration/SkillState";
import {Order} from "../enumeration/Order";
import {OrderByField} from "../enumeration/OrderByField";
import {EdgeOrderByField} from "../enumeration/EdgeOrderByField";
import {EdgeType} from "../enumeration/EdgeType";

export class CreateSkillBuildJobImpulse {
public _typeName = "CreateSkillBuildJobImpulse";
    private tenantId:Uuid;
    private skillRef:Uuid;
    private tag:String;

    constructor (tenantId:Uuid, skillRef:Uuid, tag:String) {
        this.tenantId = tenantId;
        this.skillRef = skillRef;
        this.tag = tag;
    }
}
