

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../enumeration/RuntimeState";
import {SkillState} from "../enumeration/SkillState";
import {Order} from "../enumeration/Order";
import {OrderByField} from "../enumeration/OrderByField";
import {EdgeOrderByField} from "../enumeration/EdgeOrderByField";

/**
 * The specification to create a tenant
 */
export class CreateTenantImpulse {
public _typeName = "CreateTenantImpulse";
    private qualifier:String;
    private implicitIdentities:Array<String>;
    private explicitIdentities:Array<String>;

    constructor (qualifier:String, implicitIdentities:Array<String>, explicitIdentities:Array<String>) {
        this.qualifier = qualifier;
        this.implicitIdentities = implicitIdentities;
        this.explicitIdentities = explicitIdentities;
    }
}
