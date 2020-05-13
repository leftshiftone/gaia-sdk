

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../enumeration/RuntimeState";
import {SkillState} from "../enumeration/SkillState";

/**
 * The specification to update a prompt instance
 */
export class UpdatePromptImpulse {

    private identityId:Uuid;
    private reference:Uuid;
    private qualifier:String;
    private appendent:String;
    private utterance:Struct;
    private labelList:Array<String>;
    private version:String;

    constructor (identityId:Uuid, reference:Uuid, qualifier:String, appendent:String, utterance:Struct, labelList:Array<String>, version:String) {
        this.identityId = identityId;
        this.reference = reference;
        this.qualifier = qualifier;
        this.appendent = appendent;
        this.utterance = utterance;
        this.labelList = labelList;
        this.version = version;
    }
}
