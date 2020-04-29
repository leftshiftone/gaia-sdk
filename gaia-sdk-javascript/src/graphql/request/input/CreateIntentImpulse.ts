

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, Timestamp, Struct, Long} from "../../GaiaClient";
import {RuntimeState} from "../enumeration/RuntimeState";
import {SkillState} from "../enumeration/SkillState";

/**
 * The specification to create an intent instance
 */
export class CreateIntentImpulse {

    private identityId:Uuid;
    private qualifier:String;
    private appendent:String;
    private utterance:Struct;
    private labellist:Array<String>;
    private version:String;

    constructor (identityId:Uuid, qualifier:String, appendent:String, utterance:Struct, labellist:Array<String>, version:String) {
        this.identityId = identityId;
        this.qualifier = qualifier;
        this.appendent = appendent;
        this.utterance = utterance;
        this.labellist = labellist;
        this.version = version;
    }
}
