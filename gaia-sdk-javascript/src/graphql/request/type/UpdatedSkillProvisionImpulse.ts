
import {SkillProvision} from "./SkillProvision";

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {Order} from "../enumeration/Order";
import {OrderByField} from "../enumeration/OrderByField";
import {EdgeOrderByField} from "../enumeration/EdgeOrderByField";
import {EdgeType} from "../enumeration/EdgeType";

/**
 * Impulse which indicates the result of a update SkillProvision impulse
 */
export class UpdatedSkillProvisionImpulse extends Array<(_:VariableRegistry) => string> {
public _typeName = "UpdatedSkillProvisionImpulse";
    public id = () => { 
        this.push(_ => "id")
    };

    /**
     * the SkillProvision instance
     */
    public data = (config: (_:SkillProvision) => void) => this.push((registry) => {
        const entity = new SkillProvision();
        config(entity);
        return "data { " + entity.render(registry) + " }";
    });

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}

