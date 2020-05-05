

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../enumeration/RuntimeState";
import {SkillState} from "../enumeration/SkillState";

/**
 * this type represents the behaviour information
 */
export class Behaviour extends Array<(_:VariableRegistry) => string> {

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
    public labellist = () => { 
        this.push(_ => "labellist")
    };

    /**
     * The behaviour xml
     */
    public behaviour = () => { 
        this.push(_ => "behaviour")
    };

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}

