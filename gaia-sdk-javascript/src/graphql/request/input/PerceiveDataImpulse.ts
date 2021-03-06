

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {Order} from "../enumeration/Order";
import {OrderByField} from "../enumeration/OrderByField";
import {EdgeOrderByField} from "../enumeration/EdgeOrderByField";
import {EdgeType} from "../enumeration/EdgeType";

/**
 * Input for data perception impulse.
 */
export class PerceiveDataImpulse {
public _typeName = "PerceiveDataImpulse";
    private identityId:Uuid;
    private eventName:String;
    private eventData:Struct;

    constructor (identityId:Uuid, eventName:String, eventData:Struct) {
        this.identityId = identityId;
        this.eventName = eventName;
        this.eventData = eventData;
    }
}
