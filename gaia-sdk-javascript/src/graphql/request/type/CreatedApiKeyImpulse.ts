
import {CreatedApiKey} from "./CreatedApiKey";

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {Order} from "../enumeration/Order";
import {OrderByField} from "../enumeration/OrderByField";
import {EdgeOrderByField} from "../enumeration/EdgeOrderByField";
import {EdgeType} from "../enumeration/EdgeType";

/**
 * Impulse which indicates the result of a create api key impulse
 */
export class CreatedApiKeyImpulse extends Array<(_:VariableRegistry) => string> {
public _typeName = "CreatedApiKeyImpulse";
    public id = () => { 
        this.push(_ => "id")
    };

    public data = (config: (_:CreatedApiKey) => void) => this.push((registry) => {
        const entity = new CreatedApiKey();
        config(entity);
        return "data { " + entity.render(registry) + " }";
    });

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}

