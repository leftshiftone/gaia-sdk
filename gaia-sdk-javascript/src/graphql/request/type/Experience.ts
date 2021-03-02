
import {BehaviourExecution} from "./BehaviourExecution";
import {SkillProvisionBuildJob} from "./SkillProvisionBuildJob";
import {IdentityMetrics} from "./IdentityMetrics";
import {BehaviourNodeExecution} from "./BehaviourNodeExecution";
import {BehaviourExecutionDetail} from "./BehaviourExecutionDetail";

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../enumeration/RuntimeState";
import {SkillState} from "../enumeration/SkillState";
import {Order} from "../enumeration/Order";
import {OrderByField} from "../enumeration/OrderByField";
import {EdgeOrderByField} from "../enumeration/EdgeOrderByField";
import {EdgeType} from "../enumeration/EdgeType";

/**
 * Container type for runtime information
 */
export class Experience extends Array<(_:VariableRegistry) => string> {
public _typeName = "Experience";
    public behaviourExecution = (identityId: Uuid|undefined, processInstanceId: Uuid|undefined, config: (_:BehaviourExecutionDetail) => void) => this.push((registry) => {
        const name1 = registry.register("identityId", identityId);
        const name2 = registry.register("processInstanceId", processInstanceId);
        const entity = new BehaviourExecutionDetail();
        config(entity);
        return `behaviourExecution(identityId:${name1}, processInstanceId:${name2}){` + entity.render(registry) + "}"
    });

    public behaviourExecutions = (identityId: Uuid|undefined, limit: Number|undefined, offset: Number|undefined, startDate: string|undefined, endDate: string|undefined, config: (_:BehaviourExecution) => void) => this.push((registry) => {
        const name1 = registry.register("identityId", identityId);
        const name2 = registry.register("limit", limit);
        const name3 = registry.register("offset", offset);
        const name4 = registry.register("startDate", startDate);
        const name5 = registry.register("endDate", endDate);
        const entity = new BehaviourExecution();
        config(entity);
        return `behaviourExecutions(identityId:${name1}, limit:${name2}, offset:${name3}, startDate:${name4}, endDate:${name5}){` + entity.render(registry) + "}"
    });

    public behaviourNodeExecutions = (config: (_:BehaviourNodeExecution) => void) => this.push((registry) => {
        const entity = new BehaviourNodeExecution();
        config(entity);
        return "behaviourNodeExecutions { " + entity.render(registry) + " }";
    });

    public identityMetrics = (identityId: Uuid|undefined, startDate: string|undefined, config: (_:IdentityMetrics) => void) => this.push((registry) => {
        const name1 = registry.register("identityId", identityId);
        const name2 = registry.register("startDate", startDate);
        const entity = new IdentityMetrics();
        config(entity);
        return `identityMetrics(identityId:${name1}, startDate:${name2}){` + entity.render(registry) + "}"
    });

    public skillProvisionBuildJobs = (tenantId: Uuid|undefined, config: (_:SkillProvisionBuildJob) => void) => this.push((registry) => {
        const name1 = registry.register("tenantId", tenantId);
        const entity = new SkillProvisionBuildJob();
        config(entity);
        return `skillProvisionBuildJobs(tenantId:${name1}){` + entity.render(registry) + "}"
    });

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}

