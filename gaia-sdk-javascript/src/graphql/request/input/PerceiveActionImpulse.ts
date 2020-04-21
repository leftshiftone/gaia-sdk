

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, Timestamp, Struct, Long} from "../../GaiaClient";

/**
 * Input for action perception impulse
 */
export default class PerceiveActionImpulse {

    private broadcast:Boolean;
    private identityId:Uuid;
    private type:String;
    private data:Struct;

    constructor (broadcast:Boolean, identityId:Uuid, type:String, data:Struct) {
        this.broadcast = broadcast;
        this.identityId = identityId;
        this.type = type;
        this.data = data;
    }
}
