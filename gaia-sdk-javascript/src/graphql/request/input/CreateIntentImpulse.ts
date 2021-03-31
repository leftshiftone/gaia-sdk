

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {Order} from "../enumeration/Order";
import {OrderByField} from "../enumeration/OrderByField";
import {EdgeOrderByField} from "../enumeration/EdgeOrderByField";
import {EdgeType} from "../enumeration/EdgeType";

/**
 * The specification to create an intent instance
 */
export class CreateIntentImpulse {
public _typeName = "CreateIntentImpulse";
    private identityId:Uuid;
    private qualifier:String;
    private appendent:String;
    private utterance:Struct;
    private labelList:Array<String>;

    constructor (identityId:Uuid, qualifier:String, appendent:String, utterance:Struct, labelList:Array<String>) {
        this.identityId = identityId;
        this.qualifier = qualifier;
        this.appendent = appendent;
        this.utterance = utterance;
        this.labelList = labelList;
    }
}
