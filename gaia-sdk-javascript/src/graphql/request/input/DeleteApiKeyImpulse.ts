

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {Order} from "../enumeration/Order";
import {OrderByField} from "../enumeration/OrderByField";
import {EdgeOrderByField} from "../enumeration/EdgeOrderByField";
import {EdgeType} from "../enumeration/EdgeType";

/**
 * The specification to delete an api key instance
 */
export class DeleteApiKeyImpulse {
public _typeName = "DeleteApiKeyImpulse";
    private apiKeyId:Uuid;

    constructor (apiKeyId:Uuid) {
        this.apiKeyId = apiKeyId;
    }
}
