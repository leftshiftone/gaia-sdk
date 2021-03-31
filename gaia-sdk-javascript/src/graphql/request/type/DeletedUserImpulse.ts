
import {UserKeyOne} from "./UserKeyOne";

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {Order} from "../enumeration/Order";
import {OrderByField} from "../enumeration/OrderByField";
import {EdgeOrderByField} from "../enumeration/EdgeOrderByField";
import {EdgeType} from "../enumeration/EdgeType";

/**
 * Impulse which indicates the result of a delete user impulse
 */
export class DeletedUserImpulse extends Array<(_:VariableRegistry) => string> {
public _typeName = "DeletedUserImpulse";
    public id = () => { 
        this.push(_ => "id")
    };

    public data = (config: (_:UserKeyOne) => void) => this.push((registry) => {
        const entity = new UserKeyOne();
        config(entity);
        return "data { " + entity.render(registry) + " }";
    });

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}

