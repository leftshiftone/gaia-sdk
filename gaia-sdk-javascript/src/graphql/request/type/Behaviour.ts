

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {Order} from "../enumeration/Order";
import {OrderByField} from "../enumeration/OrderByField";
import {EdgeOrderByField} from "../enumeration/EdgeOrderByField";
import {EdgeType} from "../enumeration/EdgeType";

/**
 * Represents behaviour information
 */
export class Behaviour extends Array<(_:VariableRegistry) => string> {
public _typeName = "Behaviour";
    /**
     * The behaviour id
     */
    public identityId = () => { 
        this.push(_ => "identityId")
    };

    /**
     * The behaviour reference id
     */
    public reference = () => { 
        this.push(_ => "reference")
    };

    /**
     * The name of the behaviour
     */
    public qualifier = () => { 
        this.push(_ => "qualifier")
    };

    /**
     * Detailed description about the behaviour
     */
    public appendent = () => { 
        this.push(_ => "appendent")
    };

    /**
     * The list of labels of the behaviour
     */
    public labelList = () => { 
        this.push(_ => "labelList")
    };

    /**
     * The behaviour xml
     */
    public behaviour = () => { 
        this.push(_ => "behaviour")
    };

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}

