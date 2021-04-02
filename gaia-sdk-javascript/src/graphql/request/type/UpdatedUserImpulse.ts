
import {User} from "./User";

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {Order} from "../enumeration/Order";
import {OrderByField} from "../enumeration/OrderByField";
import {EdgeOrderByField} from "../enumeration/EdgeOrderByField";
import {EdgeType} from "../enumeration/EdgeType";

/**
 * Impulse which indicates the result of a update user impulse
 */
export class UpdatedUserImpulse extends Array<(_:VariableRegistry) => string> {
public _typeName = "UpdatedUserImpulse";
    public id = () => { 
        this.push(_ => "id")
    };

    public data = (config: (_:User) => void) => this.push((registry) => {
        const entity = new User();
        config(entity);
        return "data { " + entity.render(registry) + " }";
    });

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}

