
import {DeletedIntentImpulse} from "./DeletedIntentImpulse";
import {DeleteIntentImpulse} from "../input/DeleteIntentImpulse";

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../enumeration/RuntimeState";
import {SkillState} from "../enumeration/SkillState";

export class DeleteKnowledge extends Array<(_:VariableRegistry) => string> {

    /**
     * deletes a list of intents with the given specifications
     */
    public intents = (impulse : [DeleteIntentImpulse], config: (_:DeletedIntentImpulse) => void) => this.push((registry) => {
        const name1 = registry.register("impulse", impulse);
        const entity = new DeletedIntentImpulse();
        config(entity);
        return `intents(impulse:$${name1}){` + entity.render(registry) + "}"
    });

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}

