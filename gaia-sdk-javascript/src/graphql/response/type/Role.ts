

import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../../request/enumeration/RuntimeState";
import {SkillState} from "../../request/enumeration/SkillState";
import {Order} from "../../request/enumeration/Order";
import {OrderByField} from "../../request/enumeration/OrderByField";
import {EdgeOrderByField} from "../../request/enumeration/EdgeOrderByField";

/**
* Represents Role information
*/
export interface Role {
    /**
    * Id of the role
    */
    roleId?:Uuid, 
    /**
    * The name of the role
    */
    name?:string, 
    /**
    * The permissions of the role
    */
    permissions?:[string]
}