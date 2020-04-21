
import DeletedIntentImpulse from "./DeletedIntentImpulse";
import CreatedIntentImpulse from "./CreatedIntentImpulse";
import UpdatedIntentImpulse from "./UpdatedIntentImpulse";
import CreateIntentImpulse from "../input/CreateIntentImpulse";
import UpdateIntentImpulse from "../input/UpdateIntentImpulse";
import DeleteIntentImpulse from "../input/DeleteIntentImpulse";

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, Timestamp, Struct, Long} from "../../GaiaClient";

/**
 * This type contains all preservation sensor impulses which are used to support
 * read/write/delete memory functions in gaia.
 */
export default class Preservation extends Array<(_:VariableRegistry) => string> {

    /**
     * creates an intent with the given specification
     */
    public createIntent = (impulse : CreateIntentImpulse, config: (_:CreatedIntentImpulse) => void) => this.push((registry) => {
        const name1 = registry.register("impulse", impulse);
        const entity = new CreatedIntentImpulse();
        config(entity);
        return `createIntent(impulse:$${name1}){` + entity.render(registry) + "}"
    });

    /**
     * updates an intent with the given specification
     */
    public updateIntent = (impulse : UpdateIntentImpulse, config: (_:UpdatedIntentImpulse) => void) => this.push((registry) => {
        const name1 = registry.register("impulse", impulse);
        const entity = new UpdatedIntentImpulse();
        config(entity);
        return `updateIntent(impulse:$${name1}){` + entity.render(registry) + "}"
    });

    /**
     * deletes an intent with the given specification
     */
    public deleteIntent = (impulse : DeleteIntentImpulse, config: (_:DeletedIntentImpulse) => void) => this.push((registry) => {
        const name1 = registry.register("impulse", impulse);
        const entity = new DeletedIntentImpulse();
        config(entity);
        return `deleteIntent(impulse:$${name1}){` + entity.render(registry) + "}"
    });

    /**
     * creates a list of intents with the given specifications
     */
    public createIntents = (impulse : CreateIntentImpulse, config: (_:CreatedIntentImpulse) => void) => this.push((registry) => {
        const name1 = registry.register("impulse", impulse);
        const entity = new CreatedIntentImpulse();
        config(entity);
        return `createIntents(impulse:$${name1}){` + entity.render(registry) + "}"
    });

    /**
     * updates a list of intents with the given specifications
     */
    public updateIntents = (impulse : UpdateIntentImpulse, config: (_:UpdatedIntentImpulse) => void) => this.push((registry) => {
        const name1 = registry.register("impulse", impulse);
        const entity = new UpdatedIntentImpulse();
        config(entity);
        return `updateIntents(impulse:$${name1}){` + entity.render(registry) + "}"
    });

    /**
     * deletes a list of intents with the given specifications
     */
    public deleteIntents = (impulse : DeleteIntentImpulse, config: (_:DeletedIntentImpulse) => void) => this.push((registry) => {
        const name1 = registry.register("impulse", impulse);
        const entity = new DeletedIntentImpulse();
        config(entity);
        return `deleteIntents(impulse:$${name1}){` + entity.render(registry) + "}"
    });

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}

