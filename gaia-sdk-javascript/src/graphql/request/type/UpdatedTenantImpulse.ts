
import {Tenant} from "./Tenant";

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {Order} from "../enumeration/Order";
import {OrderByField} from "../enumeration/OrderByField";
import {EdgeOrderByField} from "../enumeration/EdgeOrderByField";
import {EdgeType} from "../enumeration/EdgeType";

/**
 * Impulse which indicates the result of a update Tenant impulse
 */
export class UpdatedTenantImpulse extends Array<(_:VariableRegistry) => string> {
public _typeName = "UpdatedTenantImpulse";
    public id = () => { 
        this.push(_ => "id")
    };

    /**
     * the Tenant instance
     */
    public data = (config: (_:Tenant) => void) => this.push((registry) => {
        const entity = new Tenant();
        config(entity);
        return "data { " + entity.render(registry) + " }";
    });

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}

