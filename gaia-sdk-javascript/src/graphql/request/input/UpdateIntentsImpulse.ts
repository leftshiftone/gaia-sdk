import {Uuid} from "../../GaiaClient";

/**
 * The specification to update intent instances
 */
export class UpdateIntentsImpulse {

    private id:Uuid;
    private intents:UpdateIntent;

    constructor (id:Uuid, intents:UpdateIntent) {
        this.id = id;
        this.intents = intents;
    }
}
