

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../enumeration/RuntimeState";
import {SkillState} from "../enumeration/SkillState";
import {Order} from "../enumeration/Order";
import {OrderByField} from "../enumeration/OrderByField";
import {EdgeOrderByField} from "../enumeration/EdgeOrderByField";
import {EdgeType} from "../enumeration/EdgeType";

export class CancelSkillBuildJobImpulse extends Array<(_:VariableRegistry) => string> {
public _typeName = "CancelSkillBuildJobImpulse";
    public id = () => { 
        this.push(_ => "id")
    };

    /**
     * Tenant of the build job
     */
    public tenantId = () => { 
        this.push(_ => "tenantId")
    };

    /**
     * The id of the build job being canceled
     */
    public buildJobRef = () => { 
        this.push(_ => "buildJobRef")
    };

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}

