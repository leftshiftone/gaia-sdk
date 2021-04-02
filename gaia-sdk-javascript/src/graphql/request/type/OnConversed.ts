

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {Order} from "../enumeration/Order";
import {OrderByField} from "../enumeration/OrderByField";
import {EdgeOrderByField} from "../enumeration/EdgeOrderByField";
import {EdgeType} from "../enumeration/EdgeType";

export class OnConversed extends Array<(_:VariableRegistry) => string> {
public _typeName = "OnConversed";
    public id = () => { 
        this.push(_ => "id")
    };

    public name = () => { 
        this.push(_ => "name")
    };

    public type = () => { 
        this.push(_ => "type")
    };

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}

