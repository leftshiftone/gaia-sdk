
import {TenantKeyOne} from "./TenantKeyOne";

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {Order} from "../enumeration/Order";
import {OrderByField} from "../enumeration/OrderByField";
import {EdgeOrderByField} from "../enumeration/EdgeOrderByField";
import {EdgeType} from "../enumeration/EdgeType";

/**
 * Impulse which indicates the result of a delete SkillProvision impulse
 */
export class DeletedSkillProvisionImpulse extends Array<(_:VariableRegistry) => string> {
public _typeName = "DeletedSkillProvisionImpulse";
    public id = () => { 
        this.push(_ => "id")
    };

    public data = (config: (_:TenantKeyOne) => void) => this.push((registry) => {
        const entity = new TenantKeyOne();
        config(entity);
        return "data { " + entity.render(registry) + " }";
    });

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}

