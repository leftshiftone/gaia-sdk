

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../enumeration/RuntimeState";
import {SkillState} from "../enumeration/SkillState";
import {Order} from "../enumeration/Order";
import {OrderByField} from "../enumeration/OrderByField";
import {EdgeOrderByField} from "../enumeration/EdgeOrderByField";
import {EdgeType} from "../enumeration/EdgeType";

export class SkillProvisionBuildJob extends Array<(_:VariableRegistry) => string> {
public _typeName = "SkillProvisionBuildJob";
    /**
     * Id of the tenant
     */
    public tenantId = () => { 
        this.push(_ => "tenantId")
    };

    /**
     * Reference to the skill provision for that build job
     */
    public provisionRef = () => { 
        this.push(_ => "provisionRef")
    };

    /**
     * Reference to the skill
     */
    public skillRef = () => { 
        this.push(_ => "skillRef")
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
    public status = () => { 
        this.push(_ => "status")
    };

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}

