

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {Order} from "../enumeration/Order";
import {OrderByField} from "../enumeration/OrderByField";
import {EdgeOrderByField} from "../enumeration/EdgeOrderByField";
import {EdgeType} from "../enumeration/EdgeType";

export class Failure extends Array<(_:VariableRegistry) => string> {
public _typeName = "Failure";
    public reason = () => { 
        this.push(_ => "reason")
    };

    public failureType = () => { 
        this.push(_ => "failureType")
    };

    public exitCode = () => { 
        this.push(_ => "exitCode")
    };

    public affectedContainer = () => { 
        this.push(_ => "affectedContainer")
    };

    public logs = () => { 
        this.push(_ => "logs")
    };

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}

