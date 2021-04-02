

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {Order} from "../enumeration/Order";
import {OrderByField} from "../enumeration/OrderByField";
import {EdgeOrderByField} from "../enumeration/EdgeOrderByField";
import {EdgeType} from "../enumeration/EdgeType";

export class UserKeyOne extends Array<(_:VariableRegistry) => string> {
public _typeName = "UserKeyOne";
    public userId = () => { 
        this.push(_ => "userId")
    };

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}

