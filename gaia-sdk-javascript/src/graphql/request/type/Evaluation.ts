
import {BuildInEvaluation} from "./BuildInEvaluation";
import {SkillEvaluation} from "./SkillEvaluation";

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {Order} from "../enumeration/Order";
import {OrderByField} from "../enumeration/OrderByField";
import {EdgeOrderByField} from "../enumeration/EdgeOrderByField";
import {EdgeType} from "../enumeration/EdgeType";

export class Evaluation extends Array<(_:VariableRegistry) => string> {
public _typeName = "Evaluation";
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

