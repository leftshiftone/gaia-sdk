

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {Order} from "../enumeration/Order";
import {OrderByField} from "../enumeration/OrderByField";
import {EdgeOrderByField} from "../enumeration/EdgeOrderByField";
import {EdgeType} from "../enumeration/EdgeType";

/**
 * The specification to create an identity instance
 */
export class CreateIdentityImpulse {
public _typeName = "CreateIdentityImpulse";
    private tenantId:String;
    private qualifier:String;
    private availableLanguages:Struct;
    private languageOrder:Array<String>;
    private intentCascading:Boolean;

    constructor (tenantId:String, qualifier:String, availableLanguages:Struct, languageOrder:Array<String>, intentCascading:Boolean) {
        this.tenantId = tenantId;
        this.qualifier = qualifier;
        this.availableLanguages = availableLanguages;
        this.languageOrder = languageOrder;
        this.intentCascading = intentCascading;
    }
}
