

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, Timestamp, Struct, Long} from "../../GaiaClient";

/**
 * this type represents the statement information
 */
export default class Statement extends Array<(_:VariableRegistry) => string> {

    /**
     * The statement id
     */
    public identityId = () => { 
        this.push(_ => "identityId")
    };

    /**
     * The statement reference id
     */
    public reference = () => { 
        this.push(_ => "reference")
    };

    /**
     * The name of the statement
     */
    public qualifier = () => { 
        this.push(_ => "qualifier")
    };

    /**
     * Detailed description about the statement
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
     * The list of labels of the statement
     */
    public labellist = () => { 
        this.push(_ => "labellist")
    };

    /**
     * The version of the statement
     */
    public version = () => { 
        this.push(_ => "version")
    };

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}

