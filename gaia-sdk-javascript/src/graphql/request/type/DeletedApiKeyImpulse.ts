
import {ApiKeyKeyOne} from "./ApiKeyKeyOne";

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../enumeration/RuntimeState";
import {SkillState} from "../enumeration/SkillState";
import {Order} from "../enumeration/Order";
import {OrderByField} from "../enumeration/OrderByField";
import {EdgeOrderByField} from "../enumeration/EdgeOrderByField";
import {EdgeType} from "../enumeration/EdgeType";

/**
 * Impulse which indicates the result of a delete api key impulse
 */
export class DeletedApiKeyImpulse extends Array<(_:VariableRegistry) => string> {
public _typeName = "DeletedApiKeyImpulse";
    public id = () => { 
        this.push(_ => "id")
    };

    public data = (config: (_:ApiKeyKeyOne) => void) => this.push((registry) => {
        const entity = new ApiKeyKeyOne();
        config(entity);
        return "data { " + entity.render(registry) + " }";
    });

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}

