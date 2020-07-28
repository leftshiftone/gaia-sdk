

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../enumeration/RuntimeState";
import {SkillState} from "../enumeration/SkillState";

/**
 * The specification to create an edge instance
 */
export class CreateEdgeImpulse {

    private source:Uuid;
    private target:Uuid;
    private type:String;
    private weight:Number;

    constructor (source:Uuid, target:Uuid, type:String, weight:Number) {
        this.source = source;
        this.target = target;
        this.type = type;
        this.weight = weight;
    }
}
