

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../enumeration/RuntimeState";
import {SkillState} from "../enumeration/SkillState";
import {Order} from "../enumeration/Order";
import {OrderByField} from "../enumeration/OrderByField";
import {EdgeOrderByField} from "../enumeration/EdgeOrderByField";

/**
 * The specification to delete an edge instance
 */
export class DeleteEdgeImpulse {

    private source:Uuid;
    private target:Uuid;

    constructor (source:Uuid, target:Uuid) {
        this.source = source;
        this.target = target;
    }
}
