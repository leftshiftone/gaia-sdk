
import {TopExecutedBehaviour} from "./TopExecutedBehaviour";
import {MetricsEntityCount} from "./MetricsEntityCount";

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../enumeration/RuntimeState";
import {SkillState} from "../enumeration/SkillState";
import {Order} from "../enumeration/Order";
import {OrderByField} from "../enumeration/OrderByField";
import {EdgeOrderByField} from "../enumeration/EdgeOrderByField";
import {EdgeType} from "../enumeration/EdgeType";

/**
 * Represents metrics information
 */
export class Metrics extends Array<(_:VariableRegistry) => string> {
public _typeName = "Metrics";
    public identityId = () => { 
        this.push(_ => "identityId")
    };

    public entityCount = (config: (_:MetricsEntityCount) => void) => this.push((registry) => {
        const entity = new MetricsEntityCount();
        config(entity);
        return "entityCount { " + entity.render(registry) + " }";
    });

    public topExecutedBehaviours = (config: (_:TopExecutedBehaviour) => void) => this.push((registry) => {
        const entity = new TopExecutedBehaviour();
        config(entity);
        return "topExecutedBehaviours { " + entity.render(registry) + " }";
    });

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}

