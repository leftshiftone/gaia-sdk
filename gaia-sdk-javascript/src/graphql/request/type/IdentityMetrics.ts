
import {IntentDetectionRate} from "./IntentDetectionRate";
import {TopExecutedBehaviour} from "./TopExecutedBehaviour";
import {BehaviourState} from "./BehaviourState";
import {MetricsEntityCount} from "./MetricsEntityCount";

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {Order} from "../enumeration/Order";
import {OrderByField} from "../enumeration/OrderByField";
import {EdgeOrderByField} from "../enumeration/EdgeOrderByField";
import {EdgeType} from "../enumeration/EdgeType";

/**
 * Represents identity metrics information
 */
export class IdentityMetrics extends Array<(_:VariableRegistry) => string> {
public _typeName = "IdentityMetrics";
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

    public behaviourStates = (config: (_:BehaviourState) => void) => this.push((registry) => {
        const entity = new BehaviourState();
        config(entity);
        return "behaviourStates { " + entity.render(registry) + " }";
    });

    public intentDetectionRate = (config: (_:IntentDetectionRate) => void) => this.push((registry) => {
        const entity = new IntentDetectionRate();
        config(entity);
        return "intentDetectionRate { " + entity.render(registry) + " }";
    });

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}

