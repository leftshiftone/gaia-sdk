

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../enumeration/RuntimeState";
import {SkillState} from "../enumeration/SkillState";
import {Order} from "../enumeration/Order";
import {OrderByField} from "../enumeration/OrderByField";
import {EdgeOrderByField} from "../enumeration/EdgeOrderByField";
import {EdgeType} from "../enumeration/EdgeType";

/**
 * Represents SkillProvision information
 */
export class SkillProvision extends Array<(_:VariableRegistry) => string> {
public _typeName = "SkillProvision";
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
     * The name of the skill provision
     */
    public qualifier = () => { 
        this.push(_ => "qualifier")
    };

    /**
     * Detailed description about the skill provision
     */
    public appendent = () => { 
        this.push(_ => "appendent")
    };

    /**
     * The list of labels of the skill provision
     */
    public labelList = () => { 
        this.push(_ => "labelList")
    };

    /**
     * The version of the skill
     */
    public version = () => { 
        this.push(_ => "version")
    };

    /**
     * The reference to skill
     */
    public skillRef = () => { 
        this.push(_ => "skillRef")
    };

    /**
     * CPU
     */
    public cpu = () => { 
        this.push(_ => "cpu")
    };

    /**
     * Memory
     */
    public memory = () => { 
        this.push(_ => "memory")
    };

    /**
     * Amount of replicas
     */
    public replicas = () => { 
        this.push(_ => "replicas")
    };

    /**
     * Whether the skill provision should be enabled or not
     */
    public enabled = () => { 
        this.push(_ => "enabled")
    };

    /**
     * Amount of seconds that the skill requires to be ready
     */
    public bootstrapTimeout = () => { 
        this.push(_ => "bootstrapTimeout")
    };

    /**
     * Value-Key pairs with information needed for the skill provision
     */
    public environment = () => { 
        this.push(_ => "environment")
    };

    /**
     * Whether the skill provision has been built
     */
    public built = () => { 
        this.push(_ => "built")
    };

    /**
     * The current status of the skill provision
     */
    public status = () => { 
        this.push(_ => "status")
    };

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}

