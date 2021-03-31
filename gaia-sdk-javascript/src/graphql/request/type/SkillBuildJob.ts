
import {SkillStatus} from "./SkillStatus";

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../enumeration/RuntimeState";
import {SkillState} from "../enumeration/SkillState";
import {Order} from "../enumeration/Order";
import {OrderByField} from "../enumeration/OrderByField";
import {EdgeOrderByField} from "../enumeration/EdgeOrderByField";
import {EdgeType} from "../enumeration/EdgeType";

/**
 * A skill build job creates definitive versions for Skill
 */
export class SkillBuildJob extends Array<(_:VariableRegistry) => string> {
public _typeName = "SkillBuildJob";
    /**
     * The reference of this build job
     */
    public reference = () => { 
        this.push(_ => "reference")
    };

    /**
     * Id of the tenant
     */
    public tenantId = () => { 
        this.push(_ => "tenantId")
    };

    /**
     * reference to the skill being built
     */
    public skillRef = () => { 
        this.push(_ => "skillRef")
    };

    /**
     * the associated version tag
     */
    public tag = () => { 
        this.push(_ => "tag")
    };

    /**
     * The name of the build job
     */
    public name = () => { 
        this.push(_ => "name")
    };

    /**
     * The current status of the build job
     */
    public status = (config: (_:SkillStatus) => void) => this.push((registry) => {
        const entity = new SkillStatus();
        config(entity);
        return "status { " + entity.render(registry) + " }";
    });

    /**
     * created at
     */
    public created = () => { 
        this.push(_ => "created")
    };

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}

