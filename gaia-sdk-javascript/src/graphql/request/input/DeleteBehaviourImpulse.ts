

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../enumeration/RuntimeState";
import {SkillState} from "../enumeration/SkillState";
import {Order} from "../enumeration/Order";
import {OrderByField} from "../enumeration/OrderByField";
import {EdgeOrderByField} from "../enumeration/EdgeOrderByField";
import {EdgeType} from "../enumeration/EdgeType";

/**
 * The specification to delete a behaviour instance
 */
export class DeleteBehaviourImpulse {
public _typeName = "DeleteBehaviourImpulse";
    private identityId:Uuid;
    private reference:Uuid;

    constructor (identityId:Uuid, reference:Uuid) {
        this.identityId = identityId;
        this.reference = reference;
    }
}
