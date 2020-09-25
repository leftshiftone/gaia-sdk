

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../enumeration/RuntimeState";
import {SkillState} from "../enumeration/SkillState";
import {Order} from "../enumeration/Order";
import {OrderByField} from "../enumeration/OrderByField";
import {EdgeOrderByField} from "../enumeration/EdgeOrderByField";

/**
 * The specification to create a code instance
 */
export class CreateCodeImpulse {
public _typeName = "CreateCodeImpulse";
    private identityId:Uuid;
    private qualifier:String;
    private appendent:String;
    private code:Struct;
    private type:String;
    private labelList:Array<String>;

    constructor (identityId:Uuid, qualifier:String, appendent:String, code:Struct, type:String, labelList:Array<String>) {
        this.identityId = identityId;
        this.qualifier = qualifier;
        this.appendent = appendent;
        this.code = code;
        this.type = type;
        this.labelList = labelList;
    }
}
