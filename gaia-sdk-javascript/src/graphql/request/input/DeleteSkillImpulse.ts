

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../enumeration/RuntimeState";
import {SkillState} from "../enumeration/SkillState";
import {Order} from "../enumeration/Order";
import {OrderByField} from "../enumeration/OrderByField";
import {EdgeOrderByField} from "../enumeration/EdgeOrderByField";

/**
 * The specification to delete a Skill instance
 */
export class DeleteSkillImpulse {

    private tenantId:Uuid;
    private reference:Uuid;

    constructor (tenantId:Uuid, reference:Uuid) {
        this.tenantId = tenantId;
        this.reference = reference;
    }
}
