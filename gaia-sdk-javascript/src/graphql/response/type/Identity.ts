

import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {Order} from "../../request/enumeration/Order";
import {OrderByField} from "../../request/enumeration/OrderByField";
import {EdgeOrderByField} from "../../request/enumeration/EdgeOrderByField";

/**
* Represents identity information
*/
export interface Identity {
    /**
    * The identity id
    */
    identityId?:Uuid, 
    /**
    * The tenant id
    */
    tenantId?:Uuid, 
    /**
    * The name of the identity
    */
    qualifier?:string, 
    /**
    * The available languages of the identity
    */
    availableLanguages?:Struct, 
    /**
    * The order of languages that will be use in case of missing translations
    */
    languageOrder?:[string]
}