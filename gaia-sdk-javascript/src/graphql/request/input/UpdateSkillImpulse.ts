

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {Order} from "../enumeration/Order";
import {OrderByField} from "../enumeration/OrderByField";
import {EdgeOrderByField} from "../enumeration/EdgeOrderByField";
import {EdgeType} from "../enumeration/EdgeType";

/**
 * The specification to update a Skill instance
 */
export class UpdateSkillImpulse {
public _typeName = "UpdateSkillImpulse";
    private tenantId:Uuid;
    private reference:Uuid;
    private qualifier:String;
    private appendent:String;
    private labelList:Array<String>;
    private repositoryUri:String;
    private repositoryType:String;

    constructor (tenantId:Uuid, reference:Uuid, qualifier:String, appendent:String, labelList:Array<String>, repositoryUri:String, repositoryType:String) {
        this.tenantId = tenantId;
        this.reference = reference;
        this.qualifier = qualifier;
        this.appendent = appendent;
        this.labelList = labelList;
        this.repositoryUri = repositoryUri;
        this.repositoryType = repositoryType;
    }
}
