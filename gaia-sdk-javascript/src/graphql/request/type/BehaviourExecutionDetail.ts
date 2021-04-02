
import {BehaviourNodeExecution} from "./BehaviourNodeExecution";

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {Order} from "../enumeration/Order";
import {OrderByField} from "../enumeration/OrderByField";
import {EdgeOrderByField} from "../enumeration/EdgeOrderByField";
import {EdgeType} from "../enumeration/EdgeType";

/**
 * Represents a detailed summary of executed entities to a given processInstanceId
 */
export class BehaviourExecutionDetail extends Array<(_:VariableRegistry) => string> {
public _typeName = "BehaviourExecutionDetail";
    public processInstanceId = () => { 
        this.push(_ => "processInstanceId")
    };

    public identityId = () => { 
        this.push(_ => "identityId")
    };

    public qualifier = () => { 
        this.push(_ => "qualifier")
    };

    public behaviours = () => { 
        this.push(_ => "behaviours")
    };

    public behaviourId = () => { 
        this.push(_ => "behaviourId")
    };

    public nodes = (config: (_:BehaviourNodeExecution) => void) => this.push((registry) => {
        const entity = new BehaviourNodeExecution();
        config(entity);
        return "nodes { " + entity.render(registry) + " }";
    });

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}

