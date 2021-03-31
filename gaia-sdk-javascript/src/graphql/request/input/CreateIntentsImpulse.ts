import {Uuid} from "../../GaiaClient";

/**
 * The specification to create intent instances
 */
export class CreateIntentsImpulse {

    private id:Uuid;
    private intents:CreateIntent;

    constructor (id:Uuid, intents:CreateIntent) {
        this.id = id;
        this.intents = intents;
    }
}
