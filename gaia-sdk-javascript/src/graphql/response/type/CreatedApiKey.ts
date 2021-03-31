

import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {Order} from "../../request/enumeration/Order";
import {OrderByField} from "../../request/enumeration/OrderByField";
import {EdgeOrderByField} from "../../request/enumeration/EdgeOrderByField";

/**
* Represents api key information including the secret
*/
export interface CreatedApiKey {
    /**
    * The api key id
    */
    apiKeyId?:Uuid, 
    /**
    * The name of the api key
    */
    name?:string, 
    /**
    * The description of the api key
    */
    description?:string, 
    /**
    * The secret of the api key
    */
    secret?:string, 
    /**
    * The flag to enable the api key
    */
    enabled?:Boolean
}