

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaFunctionClient";
import {RuntimeState} from "../enumeration/RuntimeState";
import {SkillState} from "../enumeration/SkillState";

/**
 * The specification to create a fulfilment instance
 */
export class CreateFulfilmentImpulse {

    private identityId:Uuid;
    private qualifier:String;
    private appendent:String;
    private utterance:Struct;
    private labelList:Array<String>;
    private version:String;

    constructor (identityId:Uuid, qualifier:String, appendent:String, utterance:Struct, labelList:Array<String>, version:String) {
        this.identityId = identityId;
        this.qualifier = qualifier;
        this.appendent = appendent;
        this.utterance = utterance;
        this.labelList = labelList;
        this.version = version;
    }
}
