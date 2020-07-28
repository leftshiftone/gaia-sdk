

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaFunctionClient";
import {RuntimeState} from "../enumeration/RuntimeState";
import {SkillState} from "../enumeration/SkillState";

/**
 * Input for data perception impulse.
 */
export class PerceiveDataImpulse {

    private identityId:Uuid;
    private eventName:String;
    private eventData:Struct;

    constructor (identityId:Uuid, eventName:String, eventData:Struct) {
        this.identityId = identityId;
        this.eventName = eventName;
        this.eventData = eventData;
    }
}
