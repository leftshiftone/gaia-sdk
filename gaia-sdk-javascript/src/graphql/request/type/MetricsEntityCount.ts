

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {Order} from "../enumeration/Order";
import {OrderByField} from "../enumeration/OrderByField";
import {EdgeOrderByField} from "../enumeration/EdgeOrderByField";
import {EdgeType} from "../enumeration/EdgeType";

export class MetricsEntityCount extends Array<(_:VariableRegistry) => string> {
public _typeName = "MetricsEntityCount";
    public intents = () => { 
        this.push(_ => "intents")
    };

    public prompts = () => { 
        this.push(_ => "prompts")
    };

    public statements = () => { 
        this.push(_ => "statements")
    };

    public fulfilments = () => { 
        this.push(_ => "fulfilments")
    };

    public behaviours = () => { 
        this.push(_ => "behaviours")
    };

    public codes = () => { 
        this.push(_ => "codes")
    };

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}

