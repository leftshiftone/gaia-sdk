
import {UpdatedIntentImpulse} from "./UpdatedIntentImpulse";
import {UpdateIntentImpulse} from "../input/UpdateIntentImpulse";

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, Timestamp, Struct, Long} from "../../GaiaClient";
import {RuntimeState} from "../enumeration/RuntimeState";
import {SkillState} from "../enumeration/SkillState";

export class UpdateKnowledge extends Array<(_:VariableRegistry) => string> {

    /**
     * updates a list of intents with the given specifications
     */
    public intents = (impulse : [UpdateIntentImpulse], config: (_:UpdatedIntentImpulse) => void) => this.push((registry) => {
        const name1 = registry.register("impulse", impulse);
        const entity = new UpdatedIntentImpulse();
        config(entity);
        return `intents(impulse:$${name1}){` + entity.render(registry) + "}"
    });

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}

