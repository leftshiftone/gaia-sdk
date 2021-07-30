

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {Order} from "../enumeration/Order";
import {OrderByField} from "../enumeration/OrderByField";
import {EdgeOrderByField} from "../enumeration/EdgeOrderByField";
import {EdgeType} from "../enumeration/EdgeType";

/**
 * The specification to update an identity instance
 */
export class UpdateIdentityImpulse {
public _typeName = "UpdateIdentityImpulse";
    private identityId:Uuid;
    private tenantId:String;
    private qualifier:String;
    private availableLanguages:Struct;
    private languageOrder:Array<String>;

    constructor (identityId:Uuid, tenantId:String, qualifier:String, availableLanguages:Struct, languageOrder:Array<String>) {
        this.identityId = identityId;
        this.tenantId = tenantId;
        this.qualifier = qualifier;
        this.availableLanguages = availableLanguages;
        this.languageOrder = languageOrder;
    }
}
