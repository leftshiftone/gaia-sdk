
import BuildInEvaluation from "./BuildInEvaluation";
import SkillEvaluation from "./SkillEvaluation";

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, Timestamp, Struct, Long} from "../../GaiaClient";

export default class Evaluation extends Array<(_:VariableRegistry) => string> {

    public skill = (config: (_:SkillEvaluation) => void) => this.push((registry) => {
        const entity = new SkillEvaluation();
        config(entity);
        return "skill { " + entity.render(registry) + " }";
    });

    public buildIn = (config: (_:BuildInEvaluation) => void) => this.push((registry) => {
        const entity = new BuildInEvaluation();
        config(entity);
        return "buildIn { " + entity.render(registry) + " }";
    });

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}
