
import {SkillBuildJob} from "./SkillBuildJob";

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {Order} from "../enumeration/Order";
import {OrderByField} from "../enumeration/OrderByField";
import {EdgeOrderByField} from "../enumeration/EdgeOrderByField";
import {EdgeType} from "../enumeration/EdgeType";

export class Introspection extends Array<(_:VariableRegistry) => string> {
public _typeName = "Introspection";
    /**
     * Introspects the build jobs currently available in the system
     */
    public buildJobs = (tenantId: Uuid, config: (_:SkillBuildJob) => void) => this.push((registry) => {
        const name1 = registry.register("tenantId", tenantId);
        const entity = new SkillBuildJob();
        config(entity);
        return `buildJobs(tenantId:${name1}){` + entity.render(registry) + "}"
    });

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}

