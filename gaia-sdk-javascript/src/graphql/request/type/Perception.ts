
import {Conversational} from "./Conversational";
import {PerceivedImpulse} from "./PerceivedImpulse";
import {PerceiveDataImpulse} from "../input/PerceiveDataImpulse";
import {PerceiveActionImpulse} from "../input/PerceiveActionImpulse";

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, Timestamp, Struct, Long} from "../../GaiaClient";
import {RuntimeState} from "./request/enumeration/RuntimeState";
import {SkillState} from "./request/enumeration/SkillState";

/**
 * This type contains all perception sensor impulses which are used to invoke
 * events in gaia.
 */
export class Perception extends Array<(_:VariableRegistry) => string> {

    /**
     * Contains all perception fields needed for a conversation.
     */
    public conversational = (config: (_:Conversational) => void) => this.push((registry) => {
        const entity = new Conversational();
        config(entity);
        return "conversational { " + entity.render(registry) + " }";
    });

    /**
     * Data perception impulse used to invoke a data transformation behaviour
     */
    public perceiveData = (impulse : PerceiveDataImpulse, config: (_:PerceivedImpulse) => void) => this.push((registry) => {
        const name1 = registry.register("impulse", impulse);
        const entity = new PerceivedImpulse();
        config(entity);
        return `perceiveData(impulse:$${name1}){` + entity.render(registry) + "}"
    });

    /**
     * Action perception impulse used to invoke a data transformation behaviour
     */
    public perceiveAction = (impulse : PerceiveActionImpulse, config: (_:PerceivedImpulse) => void) => this.push((registry) => {
        const name1 = registry.register("impulse", impulse);
        const entity = new PerceivedImpulse();
        config(entity);
        return `perceiveAction(impulse:$${name1}){` + entity.render(registry) + "}"
    });

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}

