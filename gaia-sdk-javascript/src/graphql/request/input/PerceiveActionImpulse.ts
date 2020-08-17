

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../enumeration/RuntimeState";
import {SkillState} from "../enumeration/SkillState";
import {Order} from "../enumeration/Order";
import {OrderBy} from "../enumeration/OrderBy";

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
