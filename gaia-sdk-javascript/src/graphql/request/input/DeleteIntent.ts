import {Uuid} from "../../GaiaClient";

/**
 * The specification to delete an intent instance
 */
export class DeleteIntent {

    private identityId:Uuid;
    private qualifier:String;

    constructor (identityId:Uuid, qualifier:String) {
        this.identityId = identityId;
        this.qualifier = qualifier;
    }
}
