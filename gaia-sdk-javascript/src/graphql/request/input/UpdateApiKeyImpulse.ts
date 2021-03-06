

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
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
    private description:String;
    private enabled:Boolean;

    constructor (apiKeyId:Uuid, secret:String, name:String, description:String, enabled:Boolean) {
        this.apiKeyId = apiKeyId;
        this.secret = secret;
        this.name = name;
        this.description = description;
        this.enabled = enabled;
    }
}
