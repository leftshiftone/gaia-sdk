
import {ApiKey} from "./ApiKey";

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../enumeration/RuntimeState";
import {SkillState} from "../enumeration/SkillState";
import {Order} from "../enumeration/Order";
import {OrderByField} from "../enumeration/OrderByField";
import {EdgeOrderByField} from "../enumeration/EdgeOrderByField";
import {EdgeType} from "../enumeration/EdgeType";

/**
 * Impulse which indicates the result of a update api key impulse
 */
export class UpdatedApiKeyImpulse extends Array<(_:VariableRegistry) => string> {
public _typeName = "UpdatedApiKeyImpulse";
    public id = () => { 
        this.push(_ => "id")
    };

    public data = (config: (_:ApiKey) => void) => this.push((registry) => {
        const entity = new ApiKey();
        config(entity);
        return "data { " + entity.render(registry) + " }";
    });

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}

