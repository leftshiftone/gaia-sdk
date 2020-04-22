

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, Timestamp, Struct, Long} from "../../GaiaClient";
import {RuntimeState} from "./request/enumeration/RuntimeState";
import {SkillState} from "./request/enumeration/SkillState";

/**
 * Input for action perception impulse
 */
export class PerceiveActionImpulse {

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
