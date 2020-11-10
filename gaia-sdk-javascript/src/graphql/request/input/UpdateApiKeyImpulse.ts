

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../enumeration/RuntimeState";
import {SkillState} from "../enumeration/SkillState";
import {Order} from "../enumeration/Order";
import {OrderByField} from "../enumeration/OrderByField";
import {EdgeOrderByField} from "../enumeration/EdgeOrderByField";
import {EdgeType} from "../enumeration/EdgeType";

/**
 * The specification to update an apiKey instance
 */
export class UpdateApiKeyImpulse {
public _typeName = "UpdateApiKeyImpulse";
    private apiKeyId:Uuid;
    private secret:String;
    private name:String;
    private enabled:Boolean;

    constructor (apiKeyId:Uuid, secret:String, name:String, enabled:Boolean) {
        this.apiKeyId = apiKeyId;
        this.secret = secret;
        this.name = name;
        this.enabled = enabled;
    }
}
