
import {Skill} from "./Skill";

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {Order} from "../enumeration/Order";
import {OrderByField} from "../enumeration/OrderByField";
import {EdgeOrderByField} from "../enumeration/EdgeOrderByField";
import {EdgeType} from "../enumeration/EdgeType";

/**
 * Impulse which indicates the result of a create Skill impulse
 */
export class CreatedSkillImpulse extends Array<(_:VariableRegistry) => string> {
public _typeName = "CreatedSkillImpulse";
    public id = () => { 
        this.push(_ => "id")
    };

    /**
     * the Skill instance
     */
    public data = (config: (_:Skill) => void) => this.push((registry) => {
        const entity = new Skill();
        config(entity);
        return "data { " + entity.render(registry) + " }";
    });

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}

