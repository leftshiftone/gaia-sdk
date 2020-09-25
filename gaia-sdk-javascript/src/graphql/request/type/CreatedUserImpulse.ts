
import {User} from "./User";

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../enumeration/RuntimeState";
import {SkillState} from "../enumeration/SkillState";
import {Order} from "../enumeration/Order";
import {OrderByField} from "../enumeration/OrderByField";
import {EdgeOrderByField} from "../enumeration/EdgeOrderByField";

/**
 * Impulse which indicates the result of a create user impulse
 */
export class CreatedUserImpulse extends Array<(_:VariableRegistry) => string> {
public _typeName = "CreatedUserImpulse";
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

