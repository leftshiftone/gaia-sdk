
import {KeyOne} from "./KeyOne";

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {Order} from "../enumeration/Order";
import {OrderByField} from "../enumeration/OrderByField";
import {EdgeOrderByField} from "../enumeration/EdgeOrderByField";
import {EdgeType} from "../enumeration/EdgeType";

/**
 * Impulse which indicates the result of a delete code impulse
 */
export class DeletedCodeImpulse extends Array<(_:VariableRegistry) => string> {
public _typeName = "DeletedCodeImpulse";
    public id = () => { 
        this.push(_ => "id")
    };

    public data = (config: (_:KeyOne) => void) => this.push((registry) => {
        const entity = new KeyOne();
        config(entity);
        return "data { " + entity.render(registry) + " }";
    });

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}

