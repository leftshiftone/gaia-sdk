

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {Order} from "../enumeration/Order";
import {OrderByField} from "../enumeration/OrderByField";
import {EdgeOrderByField} from "../enumeration/EdgeOrderByField";
import {EdgeType} from "../enumeration/EdgeType";

/**
 * Represents api key information including the secret
 */
export class CreatedApiKey extends Array<(_:VariableRegistry) => string> {
public _typeName = "CreatedApiKey";
    /**
     * The api key id
     */
    public apiKeyId = () => { 
        this.push(_ => "apiKeyId")
    };

    /**
     * The name of the api key
     */
    public name = () => { 
        this.push(_ => "name")
    };

    /**
     * The description of the api key
     */
    public description = () => { 
        this.push(_ => "description")
    };

    /**
     * The secret of the api key
     */
    public secret = () => { 
        this.push(_ => "secret")
    };

    /**
     * The flag to enable the api key
     */
    public enabled = () => { 
        this.push(_ => "enabled")
    };

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}

