
import {Experience} from "./Experience";
import {Knowledge} from "./Knowledge";

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaFunctionClient";
import {RuntimeState} from "../enumeration/RuntimeState";
import {SkillState} from "../enumeration/SkillState";

export class Retrieval extends Array<(_:VariableRegistry) => string> {

    /**
     * Container element which collects all information static data
     */
    public knowledge = (config: (_:Knowledge) => void) => this.push((registry) => {
        const entity = new Knowledge();
        config(entity);
        return "knowledge { " + entity.render(registry) + " }";
    });

    /**
     * Container element which collects all information about runtime data
     */
    public experience = (config: (_:Experience) => void) => this.push((registry) => {
        const entity = new Experience();
        config(entity);
        return "experience { " + entity.render(registry) + " }";
    });

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}

