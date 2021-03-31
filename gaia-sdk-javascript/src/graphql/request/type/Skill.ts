
import {SkillVersion} from "./SkillVersion";

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {Order} from "../enumeration/Order";
import {OrderByField} from "../enumeration/OrderByField";
import {EdgeOrderByField} from "../enumeration/EdgeOrderByField";
import {EdgeType} from "../enumeration/EdgeType";

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

    /**
     * The list of available and build skill versions
     */
    public versions = (config: (_:SkillVersion) => void) => this.push((registry) => {
        const entity = new SkillVersion();
        config(entity);
        return "versions { " + entity.render(registry) + " }";
    });

    /**
     * A list of all available version tags
     */
    public tags = () => { 
        this.push(_ => "tags")
    };

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}

