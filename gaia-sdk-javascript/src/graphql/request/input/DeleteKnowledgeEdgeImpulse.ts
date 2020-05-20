

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../enumeration/RuntimeState";
import {SkillState} from "../enumeration/SkillState";

/**
 * The specification to delete an edge instance
 */
export class DeleteKnowledgeEdgeImpulse {

    private source:Uuid;
    private target:Uuid;

    constructor (source:Uuid, target:Uuid) {
        this.source = source;
        this.target = target;
    }
}
