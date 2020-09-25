
import {Code} from "./Code";

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../enumeration/RuntimeState";
import {SkillState} from "../enumeration/SkillState";
import {Order} from "../enumeration/Order";
import {OrderByField} from "../enumeration/OrderByField";
import {EdgeOrderByField} from "../enumeration/EdgeOrderByField";

/**
 * Impulse which indicates the result of a create code impulse
 */
export class CreatedCodeImpulse extends Array<(_:VariableRegistry) => string> {
public _typeName = "CreatedCodeImpulse";
    public id = () => { 
        this.push(_ => "id")
    };

    /**
     * the code instance
     */
    public data = (config: (_:Code) => void) => this.push((registry) => {
        const entity = new Code();
        config(entity);
        return "data { " + entity.render(registry) + " }";
    });

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}

