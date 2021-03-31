

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {Order} from "../enumeration/Order";
import {OrderByField} from "../enumeration/OrderByField";
import {EdgeOrderByField} from "../enumeration/EdgeOrderByField";
import {EdgeType} from "../enumeration/EdgeType";

export class BehaviourStatesPerDay extends Array<(_:VariableRegistry) => string> {
public _typeName = "BehaviourStatesPerDay";
    public date = () => { 
        this.push(_ => "date")
    };

    public running = () => { 
        this.push(_ => "running")
    };

    public success = () => { 
        this.push(_ => "success")
    };

    public waiting = () => { 
        this.push(_ => "waiting")
    };

    public failed = () => { 
        this.push(_ => "failed")
    };

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}

