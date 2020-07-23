

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../enumeration/RuntimeState";
import {SkillState} from "../enumeration/SkillState";

/**
 * Represents prompt information
 */
export class Prompt extends Array<(_:VariableRegistry) => string> {

    /**
     * The prompt id
     */
    public identityId = () => { 
        this.push(_ => "identityId")
    };

    /**
     * The prompt reference id
     */
    public reference = () => { 
        this.push(_ => "reference")
    };

    /**
     * The name of the prompt
     */
    public qualifier = () => { 
        this.push(_ => "qualifier")
    };

    /**
     * Detailed description about the prompt
     */
    public appendent = () => { 
        this.push(_ => "appendent")
    };

    /**
     * The utterance dictionary. The key is a language key and the value is a list of utterances
     */
    public utterance = () => { 
        this.push(_ => "utterance")
    };

    /**
     * The list of labels of the prompt
     */
    public labelList = () => { 
        this.push(_ => "labelList")
    };

    /**
     * The version of the prompt
     */
    public version = () => { 
        this.push(_ => "version")
    };

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}

