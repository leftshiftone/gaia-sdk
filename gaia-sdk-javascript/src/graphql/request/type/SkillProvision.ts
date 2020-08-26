

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../enumeration/RuntimeState";
import {SkillState} from "../enumeration/SkillState";
import {Order} from "../enumeration/Order";
import {OrderByField} from "../enumeration/OrderByField";
import {EdgeOrderByField} from "../enumeration/EdgeOrderByField";

/**
 * Represents SkillProvision information
 */
export class SkillProvision extends Array<(_:VariableRegistry) => string> {

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
     * Initial CPU
     */
    public initialCpu = () => { 
        this.push(_ => "initialCpu")
    };

    /**
     * Maximal allowed CPU
     */
    public maximalCpu = () => { 
        this.push(_ => "maximalCpu")
    };

    /**
     * Initial Memory
     */
    public initialMemory = () => { 
        this.push(_ => "initialMemory")
    };

    /**
     * Maximal allowed Memory
     */
    public maximalMemory = () => { 
        this.push(_ => "maximalMemory")
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

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}

