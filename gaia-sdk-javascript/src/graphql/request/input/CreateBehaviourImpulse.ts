

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../enumeration/RuntimeState";
import {SkillState} from "../enumeration/SkillState";

/**
 * The specification to create a behaviour instance
 */
export class CreateBehaviourImpulse {

    private identityId:Uuid;
    private qualifier:String;
    private appendent:String;
    private behaviour:String;
    private labelList:Array<String>;

    constructor (identityId:Uuid, qualifier:String, appendent:String, behaviour:String, labelList:Array<String>) {
        this.identityId = identityId;
        this.qualifier = qualifier;
        this.appendent = appendent;
        this.behaviour = behaviour;
        this.labelList = labelList;
    }
}
