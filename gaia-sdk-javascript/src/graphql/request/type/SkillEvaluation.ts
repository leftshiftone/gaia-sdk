
import {SyncSkillEvaluation} from "./SyncSkillEvaluation";
import {AsyncSkillEvaluation} from "./AsyncSkillEvaluation";

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../enumeration/RuntimeState";
import {SkillState} from "../enumeration/SkillState";
import {Order} from "../enumeration/Order";
import {OrderByField} from "../enumeration/OrderByField";
import {EdgeOrderByField} from "../enumeration/EdgeOrderByField";
import {EdgeType} from "../enumeration/EdgeType";

export class SkillEvaluation extends Array<(_:VariableRegistry) => string> {
public _typeName = "SkillEvaluation";
    public syncEval = (impulse: string|undefined, config: (_:SyncSkillEvaluation) => void) => this.push((registry) => {
        const name1 = registry.register("impulse", impulse);
        const entity = new SyncSkillEvaluation();
        config(entity);
        return `syncEval(impulse:${name1}){` + entity.render(registry) + "}"
    });

    public asyncEval = (impulse: string|undefined, config: (_:AsyncSkillEvaluation) => void) => this.push((registry) => {
        const name1 = registry.register("impulse", impulse);
        const entity = new AsyncSkillEvaluation();
        config(entity);
        return `asyncEval(impulse:${name1}){` + entity.render(registry) + "}"
    });

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}

