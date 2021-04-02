

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {Order} from "../enumeration/Order";
import {OrderByField} from "../enumeration/OrderByField";
import {EdgeOrderByField} from "../enumeration/EdgeOrderByField";
import {EdgeType} from "../enumeration/EdgeType";

/**
 * Represents code information
 */
export class Code extends Array<(_:VariableRegistry) => string> {
public _typeName = "Code";
    /**
     * The code id
     */
    public identityId = () => { 
        this.push(_ => "identityId")
    };

    /**
     * The code reference id
     */
    public reference = () => { 
        this.push(_ => "reference")
    };

    /**
     * The name of the code
     */
    public qualifier = () => { 
        this.push(_ => "qualifier")
    };

    /**
     * Detailed description about the code
     */
    public appendent = () => { 
        this.push(_ => "appendent")
    };

    /**
     * The code dictionary. The key is a file name and the value is the code
     */
    public code = () => { 
        this.push(_ => "code")
    };

    /**
     * The list of labels of the code
     */
    public labelList = () => { 
        this.push(_ => "labelList")
    };

    /**
     * The type of the code
     */
    public type = () => { 
        this.push(_ => "type")
    };

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}

