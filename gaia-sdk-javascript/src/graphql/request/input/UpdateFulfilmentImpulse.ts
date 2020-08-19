

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../enumeration/RuntimeState";
import {SkillState} from "../enumeration/SkillState";
import {Order} from "../enumeration/Order";
import {OrderByField} from "../enumeration/OrderByField";
import {EdgeOrderByField} from "../enumeration/EdgeOrderByField";

/**
 * The specification to update a fulfilment instance
 */
export class UpdateFulfilmentImpulse {

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
