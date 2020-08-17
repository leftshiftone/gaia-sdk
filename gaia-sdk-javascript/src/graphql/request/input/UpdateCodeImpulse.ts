

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../enumeration/RuntimeState";
import {SkillState} from "../enumeration/SkillState";
import {Order} from "../enumeration/Order";
import {OrderBy} from "../enumeration/OrderBy";

/**
 * The specification to update a code instance
 */
export class UpdateCodeImpulse {

    private identityId:Uuid;
    private reference:Uuid;
    private qualifier:String;
    private appendent:String;
    private code:Struct;
    private type:String;
    private labelList:Array<String>;

    constructor (identityId:Uuid, reference:Uuid, qualifier:String, appendent:String, code:Struct, type:String, labelList:Array<String>) {
        this.identityId = identityId;
        this.reference = reference;
        this.qualifier = qualifier;
        this.appendent = appendent;
        this.code = code;
        this.type = type;
        this.labelList = labelList;
    }
}
