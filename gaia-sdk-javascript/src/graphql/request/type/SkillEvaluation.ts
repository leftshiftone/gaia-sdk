
import SyncSkillEvaluation from "./SyncSkillEvaluation";
import AsyncSkillEvaluation from "./AsyncSkillEvaluation";

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, Timestamp, Struct, Long} from "../../GaiaClient";

export default class SkillEvaluation extends Array<(_:VariableRegistry) => string> {

    public syncEval = (impulse : String, config: (_:SyncSkillEvaluation) => void) => this.push((registry) => {
        const name1 = registry.register("impulse", impulse);
        const entity = new SyncSkillEvaluation();
        config(entity);
        return `syncEval(impulse:$${name1}){` + entity.render(registry) + "}"
    });

    public asyncEval = (impulse : String, config: (_:AsyncSkillEvaluation) => void) => this.push((registry) => {
        const name1 = registry.register("impulse", impulse);
        const entity = new AsyncSkillEvaluation();
        config(entity);
        return `asyncEval(impulse:$${name1}){` + entity.render(registry) + "}"
    });

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}

