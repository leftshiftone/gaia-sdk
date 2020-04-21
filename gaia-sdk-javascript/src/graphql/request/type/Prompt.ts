

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, Timestamp, Struct, Long} from "../../GaiaClient";

/**
 * this type represents the prompt information
 */
export default class Prompt extends Array<(_:VariableRegistry) => string> {

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
    public labellist = () => { 
        this.push(_ => "labellist")
    };

    /**
     * The version of the prompt
     */
    public version = () => { 
        this.push(_ => "version")
    };

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}

