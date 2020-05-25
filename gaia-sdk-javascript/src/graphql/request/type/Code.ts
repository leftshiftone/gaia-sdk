

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../enumeration/RuntimeState";
import {SkillState} from "../enumeration/SkillState";

/**
 * this type represents the code information
 */
export class Code extends Array<(_:VariableRegistry) => string> {

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

