

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {Order} from "../enumeration/Order";
import {OrderByField} from "../enumeration/OrderByField";
import {EdgeOrderByField} from "../enumeration/EdgeOrderByField";
import {EdgeType} from "../enumeration/EdgeType";

/**
 * Represents identity information
 */
export class Identity extends Array<(_:VariableRegistry) => string> {
public _typeName = "Identity";
    /**
     * The identity id
     */
    public identityId = () => { 
        this.push(_ => "identityId")
    };

    /**
     * The tenant id
     */
    public tenantId = () => { 
        this.push(_ => "tenantId")
    };

    /**
     * The name of the identity
     */
    public qualifier = () => { 
        this.push(_ => "qualifier")
    };

    /**
     * The available languages of the identity
     */
    public availableLanguages = () => { 
        this.push(_ => "availableLanguages")
    };

    /**
     * The order of languages that will be used in case of missing translations
     */
    public languageOrder = () => { 
        this.push(_ => "languageOrder")
    };

    /**
     * Intent cascading setting
     */
    public intentCascading = () => { 
        this.push(_ => "intentCascading")
    };

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}

