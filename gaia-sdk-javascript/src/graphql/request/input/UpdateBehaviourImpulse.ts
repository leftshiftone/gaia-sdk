

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../enumeration/RuntimeState";
import {SkillState} from "../enumeration/SkillState";

/**
 * The specification to update a behaviour instance
 */
export class UpdateBehaviourImpulse {

    private identityId:Uuid;
    private reference:Uuid;
    private qualifier:String;
    private appendent:String;
    private behaviour:String;
    private labelList:Array<String>;
    private version:String;

    constructor (identityId:Uuid, reference:Uuid, qualifier:String, appendent:String, behaviour:String, labelList:Array<String>, version:String) {
        this.identityId = identityId;
        this.reference = reference;
        this.qualifier = qualifier;
        this.appendent = appendent;
        this.behaviour = behaviour;
        this.labelList = labelList;
        this.version = version;
    }
}
