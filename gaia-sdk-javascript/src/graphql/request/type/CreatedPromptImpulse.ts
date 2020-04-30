
import {Prompt} from "./Prompt";

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../enumeration/RuntimeState";
import {SkillState} from "../enumeration/SkillState";

/**
 * Impulse which indicates the resulf of a create prompt impulse
 */
export class CreatedPromptImpulse extends Array<(_:VariableRegistry) => string> {

    public id = () => { 
        this.push(_ => "id")
    };

    /**
     * the prompt instance
     */
    public prompt = (config: (_:Prompt) => void) => this.push((registry) => {
        const entity = new Prompt();
        config(entity);
        return "prompt { " + entity.render(registry) + " }";
    });

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}

