
import {DeletedIntentImpulse} from "./DeletedIntentImpulse";
import {CreatedIntentImpulse} from "./CreatedIntentImpulse";
import {UpdatedIntentImpulse} from "./UpdatedIntentImpulse";
import {CreateIntentImpulse} from "../input/CreateIntentImpulse";
import {UpdateIntentImpulse} from "../input/UpdateIntentImpulse";
import {DeleteIntentImpulse} from "../input/DeleteIntentImpulse";

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, Timestamp, Struct, Long} from "../../GaiaClient";
import {RuntimeState} from "./request/enumeration/RuntimeState";
import {SkillState} from "./request/enumeration/SkillState";

/**
 * This type contains all preservation sensor impulses which are used to support
 * read/write/delete memory functions in gaia.
 */
export class Preservation extends Array<(_:VariableRegistry) => string> {

    /**
     * creates a list of intents with the given specifications
     */
    public createIntents = (impulses : [CreateIntentImpulse], config: (_:CreatedIntentImpulse) => void) => this.push((registry) => {
        const name1 = registry.register("impulses", impulses);
        const entity = new CreatedIntentImpulse();
        config(entity);
        return `createIntents(impulses:$${name1}){` + entity.render(registry) + "}"
    });

    /**
     * updates a list of intents with the given specifications
     */
    public updateIntents = (impulses : [UpdateIntentImpulse], config: (_:UpdatedIntentImpulse) => void) => this.push((registry) => {
        const name1 = registry.register("impulses", impulses);
        const entity = new UpdatedIntentImpulse();
        config(entity);
        return `updateIntents(impulses:$${name1}){` + entity.render(registry) + "}"
    });

    /**
     * deletes a list of intents with the given specifications
     */
    public deleteIntents = (impulses : [DeleteIntentImpulse], config: (_:DeletedIntentImpulse) => void) => this.push((registry) => {
        const name1 = registry.register("impulses", impulses);
        const entity = new DeletedIntentImpulse();
        config(entity);
        return `deleteIntents(impulses:$${name1}){` + entity.render(registry) + "}"
    });

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}

