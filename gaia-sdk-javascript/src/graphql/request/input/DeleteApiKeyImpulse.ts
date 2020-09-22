

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../enumeration/RuntimeState";
import {SkillState} from "../enumeration/SkillState";
import {Order} from "../enumeration/Order";
import {OrderByField} from "../enumeration/OrderByField";
import {EdgeOrderByField} from "../enumeration/EdgeOrderByField";

/**
 * The specification to delete an api key instance
 */
export class DeleteApiKeyImpulse {

    private apiKeyId:Uuid;

    constructor (apiKeyId:Uuid) {
        this.apiKeyId = apiKeyId;
    }
}