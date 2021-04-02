

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {Order} from "../enumeration/Order";
import {OrderByField} from "../enumeration/OrderByField";
import {EdgeOrderByField} from "../enumeration/EdgeOrderByField";
import {EdgeType} from "../enumeration/EdgeType";

/**
 * Represents behaviour execution information
 */
export class BehaviourExecution extends Array<(_:VariableRegistry) => string> {
public _typeName = "BehaviourExecution";
    public processInstanceId = () => { 
        this.push(_ => "processInstanceId")
    };

    public identityId = () => { 
        this.push(_ => "identityId")
    };

    public state = () => { 
        this.push(_ => "state")
    };

    public name = () => { 
        this.push(_ => "name")
    };

    public duration = () => { 
        this.push(_ => "duration")
    };

    public behaviourId = () => { 
        this.push(_ => "behaviourId")
    };

    public created = () => { 
        this.push(_ => "created")
    };

    public updated = () => { 
        this.push(_ => "updated")
    };

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}

