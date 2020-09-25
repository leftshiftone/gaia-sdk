
import {DeleteKnowledge} from "./DeleteKnowledge";
import {UpdateKnowledge} from "./UpdateKnowledge";
import {CreateKnowledge} from "./CreateKnowledge";

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../enumeration/RuntimeState";
import {SkillState} from "../enumeration/SkillState";
import {Order} from "../enumeration/Order";
import {OrderByField} from "../enumeration/OrderByField";
import {EdgeOrderByField} from "../enumeration/EdgeOrderByField";

/**
 * This type contains all preservation sensor impulses which are used to support
 * read/write/delete memory functions in gaia.
 */
export class Preservation extends Array<(_:VariableRegistry) => string> {
public _typeName = "Preservation";
    public create = (config: (_:CreateKnowledge) => void) => this.push((registry) => {
        const entity = new CreateKnowledge();
        config(entity);
        return "create { " + entity.render(registry) + " }";
    });

    public update = (config: (_:UpdateKnowledge) => void) => this.push((registry) => {
        const entity = new UpdateKnowledge();
        config(entity);
        return "update { " + entity.render(registry) + " }";
    });

    public delete = (config: (_:DeleteKnowledge) => void) => this.push((registry) => {
        const entity = new DeleteKnowledge();
        config(entity);
        return "delete { " + entity.render(registry) + " }";
    });

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}

