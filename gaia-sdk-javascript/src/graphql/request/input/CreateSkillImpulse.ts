

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {Order} from "../enumeration/Order";
import {OrderByField} from "../enumeration/OrderByField";
import {EdgeOrderByField} from "../enumeration/EdgeOrderByField";
import {EdgeType} from "../enumeration/EdgeType";

/**
 * The specification to create a skill instance
 */
export class CreateSkillImpulse {
public _typeName = "CreateSkillImpulse";
    private tenantId:Uuid;
    private qualifier:String;
    private appendent:String;
    private labelList:Array<String>;
    private repositoryUri:String;
    private repositoryType:String;

    constructor (tenantId:Uuid, qualifier:String, appendent:String, labelList:Array<String>, repositoryUri:String, repositoryType:String) {
        this.tenantId = tenantId;
        this.qualifier = qualifier;
        this.appendent = appendent;
        this.labelList = labelList;
        this.repositoryUri = repositoryUri;
        this.repositoryType = repositoryType;
    }
}
