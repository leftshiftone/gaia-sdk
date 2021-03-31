

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {Order} from "../enumeration/Order";
import {OrderByField} from "../enumeration/OrderByField";
import {EdgeOrderByField} from "../enumeration/EdgeOrderByField";
import {EdgeType} from "../enumeration/EdgeType";

/**
 * This entity represents the output of a delete tenant impulse
 */
export class TenantKeyOne extends Array<(_:VariableRegistry) => string> {
public _typeName = "TenantKeyOne";
    public tenantId = () => { 
        this.push(_ => "tenantId")
    };

    public reference = () => { 
        this.push(_ => "reference")
    };

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}

