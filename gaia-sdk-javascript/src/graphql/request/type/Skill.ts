

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../enumeration/RuntimeState";
import {SkillState} from "../enumeration/SkillState";
import {Order} from "../enumeration/Order";
import {OrderByField} from "../enumeration/OrderByField";
import {EdgeOrderByField} from "../enumeration/EdgeOrderByField";

/**
 * Represents Skill information
 */
export class Skill extends Array<(_:VariableRegistry) => string> {
public _typeName = "Skill";
    /**
     * Id of the tenant
     */
    public tenantId = () => { 
        this.push(_ => "tenantId")
    };

    /**
     * Skill reference
     */
    public reference = () => { 
        this.push(_ => "reference")
    };

    /**
     * The name of the skill
     */
    public qualifier = () => { 
        this.push(_ => "qualifier")
    };

    /**
     * Detailed description about the skill
     */
    public appendent = () => { 
        this.push(_ => "appendent")
    };

    /**
     * The list of labels of the skill
     */
    public labelList = () => { 
        this.push(_ => "labelList")
    };

    /**
     * The uri of the repository where the skill is
     */
    public repositoryUri = () => { 
        this.push(_ => "repositoryUri")
    };

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}

