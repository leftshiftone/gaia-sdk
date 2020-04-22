

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, Timestamp, Struct, Long} from "../../GaiaClient";
import {RuntimeState} from "../enumeration/RuntimeState";
import {SkillState} from "../enumeration/SkillState";

/**
 * Container type for static information
 */
export class KnowledgeEdge extends Array<(_:VariableRegistry) => string> {

    public source = () => { 
        this.push(_ => "source")
    };

    public target = () => { 
        this.push(_ => "target")
    };

    public type = () => { 
        this.push(_ => "type")
    };

    public weight = () => { 
        this.push(_ => "weight")
    };

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}

