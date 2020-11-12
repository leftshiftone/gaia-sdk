

import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../../request/enumeration/RuntimeState";
import {SkillState} from "../../request/enumeration/SkillState";
import {Order} from "../../request/enumeration/Order";
import {OrderByField} from "../../request/enumeration/OrderByField";
import {EdgeOrderByField} from "../../request/enumeration/EdgeOrderByField";

/**
* Represents User information
*/
export interface User {
    /**
    * Id of the user
    */
    userId?:Uuid, 
    /**
    * The username of the user
    */
    username?:string, 
    /**
    * The email of the user
    */
    email?:string, 
    /**
    * The first name of the user
    */
    firstName?:string, 
    /**
    * The last name of the user
    */
    lastName?:string, 
    /**
    * Is the User using 2FA
    */
    using2FA?:Boolean, 
    /**
    * The tenants of the user
    */
    tenants?:[string], 
    /**
    * The roles of the user
    */
    roles?:[string], 
    /**
    * The groups of the user
    */
    groups?:[string], 
    /**
    * The permissions of the user
    */
    permissions?:[string]
}