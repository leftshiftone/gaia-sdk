

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../enumeration/RuntimeState";
import {SkillState} from "../enumeration/SkillState";
import {Order} from "../enumeration/Order";
import {OrderByField} from "../enumeration/OrderByField";
import {EdgeOrderByField} from "../enumeration/EdgeOrderByField";

/**
 * The specification to create an api key instance
 */
export class CreateApiKeyImpulse {
public _typeName = "CreateApiKeyImpulse";
    private name:String;
    private description:String;
    private enabled:Boolean;

    constructor (name:String, description:String, enabled:Boolean) {
        this.name = name;
        this.description = description;
        this.enabled = enabled;
    }
}
