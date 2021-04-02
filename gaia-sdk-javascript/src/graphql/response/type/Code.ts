

import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {Order} from "../../request/enumeration/Order";
import {OrderByField} from "../../request/enumeration/OrderByField";
import {EdgeOrderByField} from "../../request/enumeration/EdgeOrderByField";

/**
* Represents code information
*/
export interface Code {
    /**
    * The code id
    */
    identityId?:Uuid, 
    /**
    * The code reference id
    */
    reference?:Uuid, 
    /**
    * The name of the code
    */
    qualifier?:string, 
    /**
    * Detailed description about the code
    */
    appendent?:string, 
    /**
    * The code dictionary. The key is a file name and the value is the code
    */
    code?:Struct, 
    /**
    * The list of labels of the code
    */
    labelList?:[string], 
    /**
    * The type of the code
    */
    type?:string
}