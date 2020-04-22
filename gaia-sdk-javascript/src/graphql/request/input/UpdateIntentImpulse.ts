

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, Timestamp, Struct, Long} from "../../GaiaClient";
import {RuntimeState} from "./request/enumeration/RuntimeState";
import {SkillState} from "./request/enumeration/SkillState";

/**
 * The specification to update an intent instance
 */
export class UpdateIntentImpulse {

    private identityId:Uuid;
    private reference:Uuid;
    private qualifier:String;
    private appendent:String;
    private utterance:Struct;
    private labellist:Struct;
    private version:String;

    constructor (identityId:Uuid, reference:Uuid, qualifier:String, appendent:String, utterance:Struct, labellist:Struct, version:String) {
        this.identityId = identityId;
        this.reference = reference;
        this.qualifier = qualifier;
        this.appendent = appendent;
        this.utterance = utterance;
        this.labellist = labellist;
        this.version = version;
    }
}
