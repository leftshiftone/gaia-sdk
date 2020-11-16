

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../enumeration/RuntimeState";
import {SkillState} from "../enumeration/SkillState";
import {Order} from "../enumeration/Order";
import {OrderByField} from "../enumeration/OrderByField";
import {EdgeOrderByField} from "../enumeration/EdgeOrderByField";
import {EdgeType} from "../enumeration/EdgeType";

/**
 * Represents tenant information
 */
export class Tenant extends Array<(_:VariableRegistry) => string> {
public _typeName = "Tenant";
    /**
     * The tenant id
     */
    public tenantId = () => { 
        this.push(_ => "tenantId")
    };

    /**
     * The name of the tenant
     */
    public qualifier = () => { 
        this.push(_ => "qualifier")
    };

    /**
     * The list of implicit identities
     */
    public implicitIdentities = () => { 
        this.push(_ => "implicitIdentities")
    };

    /**
     * The list of explicit identities
     */
    public explicitIdentities = () => { 
        this.push(_ => "explicitIdentities")
    };

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}

