import {Uuid} from "../../GaiaClient";

/**
 * The specification to delete intent instances
 */
export class DeleteIntentsImpulse {

    private id:Uuid;
    private intents:DeleteIntent;

    constructor (id:Uuid, intents:DeleteIntent) {
        this.id = id;
        this.intents = intents;
    }
}
