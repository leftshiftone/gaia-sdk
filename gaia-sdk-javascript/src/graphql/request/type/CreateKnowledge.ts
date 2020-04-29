
import {CreatedIntentImpulse} from "./CreatedIntentImpulse";
import {CreateIntentImpulse} from "../input/CreateIntentImpulse";

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, Timestamp, Struct, Long} from "../../GaiaClient";
import {RuntimeState} from "../enumeration/RuntimeState";
import {SkillState} from "../enumeration/SkillState";

export class CreateKnowledge extends Array<(_:VariableRegistry) => string> {

    /**
     * creates a list of intents with the given specifications
     */
    public intents = (impulses : [CreateIntentImpulse], config: (_:CreatedIntentImpulse) => void) => this.push((registry) => {
        const name1 = registry.register("impulses", impulses);
        const entity = new CreatedIntentImpulse();
        config(entity);
        return `intents(impulses:$${name1}){` + entity.render(registry) + "}"
    });

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}

