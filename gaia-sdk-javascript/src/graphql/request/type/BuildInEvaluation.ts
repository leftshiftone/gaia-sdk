

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {Order} from "../enumeration/Order";
import {OrderByField} from "../enumeration/OrderByField";
import {EdgeOrderByField} from "../enumeration/EdgeOrderByField";
import {EdgeType} from "../enumeration/EdgeType";

export class BuildInEvaluation extends Array<(_:VariableRegistry) => string> {
public _typeName = "BuildInEvaluation";
    public behaviour = () => { 
        this.push(_ => "behaviour")
    };

    public gaiaquery = () => { 
        this.push(_ => "gaiaquery")
    };

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}

