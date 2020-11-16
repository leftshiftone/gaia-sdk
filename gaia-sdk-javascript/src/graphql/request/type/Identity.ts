

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../enumeration/RuntimeState";
import {SkillState} from "../enumeration/SkillState";
import {Order} from "../enumeration/Order";
import {OrderByField} from "../enumeration/OrderByField";
import {EdgeOrderByField} from "../enumeration/EdgeOrderByField";

/**
 * Represents identity information
 */
export class Identity extends Array<(_:VariableRegistry) => string> {
public _typeName = "Identity";
    /**
     * The identity id
     */
    public identityId = () => { 
        this.push(_ => "identityId")
    };

    /**
     * The tenant id
     */
    public tenantId = () => { 
        this.push(_ => "tenantId")
    };

    /**
     * The name of the identity
     */
    public qualifier = () => { 
        this.push(_ => "qualifier")
    };

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}

