

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../enumeration/RuntimeState";
import {SkillState} from "../enumeration/SkillState";
import {Order} from "../enumeration/Order";
import {OrderByField} from "../enumeration/OrderByField";
import {EdgeOrderByField} from "../enumeration/EdgeOrderByField";
import {EdgeType} from "../enumeration/EdgeType";

/**
 * Represents behaviour node execution information
 */
export class BehaviourNodeExecution extends Array<(_:VariableRegistry) => string> {
public _typeName = "BehaviourNodeExecution";
    public activityId = () => { 
        this.push(_ => "activityId")
    };

    public reference = () => { 
        this.push(_ => "reference")
    };

    public qualifier = () => { 
        this.push(_ => "qualifier")
    };

    public state = () => { 
        this.push(_ => "state")
    };

    public type = () => { 
        this.push(_ => "type")
    };

    public transitions = () => { 
        this.push(_ => "transitions")
    };

    public created = () => { 
        this.push(_ => "created")
    };

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}

