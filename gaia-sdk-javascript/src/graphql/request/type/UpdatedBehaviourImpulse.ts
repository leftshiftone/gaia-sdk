
import {Behaviour} from "./Behaviour";

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {Order} from "../enumeration/Order";
import {OrderByField} from "../enumeration/OrderByField";
import {EdgeOrderByField} from "../enumeration/EdgeOrderByField";
import {EdgeType} from "../enumeration/EdgeType";

/**
 * Impulse which indicates the result of a update behaviour impulse
 */
export class UpdatedBehaviourImpulse extends Array<(_:VariableRegistry) => string> {
public _typeName = "UpdatedBehaviourImpulse";
    public id = () => { 
        this.push(_ => "id")
    };

    /**
     * the behaviour instance
     */
    public data = (config: (_:Behaviour) => void) => this.push((registry) => {
        const entity = new Behaviour();
        config(entity);
        return "data { " + entity.render(registry) + " }";
    });

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}

