
import {Intent} from "./Intent";

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../enumeration/RuntimeState";
import {SkillState} from "../enumeration/SkillState";
import {Order} from "../enumeration/Order";
import {OrderByField} from "../enumeration/OrderByField";
import {EdgeOrderByField} from "../enumeration/EdgeOrderByField";
import {EdgeType} from "../enumeration/EdgeType";

/**
 * Impulse which indicates the result of a create intent impulse
 */
export class CreatedIntentImpulse extends Array<(_:VariableRegistry) => string> {
public _typeName = "CreatedIntentImpulse";
    public id = () => { 
        this.push(_ => "id")
    };

    /**
     * the intent instance
     */
    public data = (config: (_:Intent) => void) => this.push((registry) => {
        const entity = new Intent();
        config(entity);
        return "data { " + entity.render(registry) + " }";
    });

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}

