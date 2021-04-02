
import {Identity} from "./Identity";

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {Order} from "../enumeration/Order";
import {OrderByField} from "../enumeration/OrderByField";
import {EdgeOrderByField} from "../enumeration/EdgeOrderByField";
import {EdgeType} from "../enumeration/EdgeType";

/**
 * Impulse which indicates the result of a update identity impulse
 */
export class UpdatedIdentityImpulse extends Array<(_:VariableRegistry) => string> {
public _typeName = "UpdatedIdentityImpulse";
    public id = () => { 
        this.push(_ => "id")
    };

    /**
     * the identity instance
     */
    public data = (config: (_:Identity) => void) => this.push((registry) => {
        const entity = new Identity();
        config(entity);
        return "data { " + entity.render(registry) + " }";
    });

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}

