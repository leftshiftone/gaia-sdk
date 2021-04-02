
import {Prompt} from "./Prompt";

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {Order} from "../enumeration/Order";
import {OrderByField} from "../enumeration/OrderByField";
import {EdgeOrderByField} from "../enumeration/EdgeOrderByField";
import {EdgeType} from "../enumeration/EdgeType";

/**
 * Impulse which indicates the result of a update prompt impulse
 */
export class UpdatedPromptImpulse extends Array<(_:VariableRegistry) => string> {
public _typeName = "UpdatedPromptImpulse";
    public id = () => { 
        this.push(_ => "id")
    };

    /**
     * the prompt instance
     */
    public data = (config: (_:Prompt) => void) => this.push((registry) => {
        const entity = new Prompt();
        config(entity);
        return "data { " + entity.render(registry) + " }";
    });

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}

