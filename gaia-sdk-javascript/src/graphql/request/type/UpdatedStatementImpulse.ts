
import {Statement} from "./Statement";

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {Order} from "../enumeration/Order";
import {OrderByField} from "../enumeration/OrderByField";
import {EdgeOrderByField} from "../enumeration/EdgeOrderByField";
import {EdgeType} from "../enumeration/EdgeType";

/**
 * Impulse which indicates the result of a update statement impulse
 */
export class UpdatedStatementImpulse extends Array<(_:VariableRegistry) => string> {
public _typeName = "UpdatedStatementImpulse";
    public id = () => { 
        this.push(_ => "id")
    };

    /**
     * the statement instance
     */
    public data = (config: (_:Statement) => void) => this.push((registry) => {
        const entity = new Statement();
        config(entity);
        return "data { " + entity.render(registry) + " }";
    });

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}

