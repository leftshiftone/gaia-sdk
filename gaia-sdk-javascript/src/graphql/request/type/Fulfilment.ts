

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../enumeration/RuntimeState";
import {SkillState} from "../enumeration/SkillState";
import {Order} from "../enumeration/Order";
import {OrderBy} from "../enumeration/OrderBy";

/**
 * Represents fulfilment information
 */
export class Fulfilment extends Array<(_:VariableRegistry) => string> {

    /**
     * The fulfilment id
     */
    public identityId = () => { 
        this.push(_ => "identityId")
    };

    /**
     * The fulfilment reference id
     */
    public reference = () => { 
        this.push(_ => "reference")
    };

    /**
     * The name of the fulfilment
     */
    public qualifier = () => { 
        this.push(_ => "qualifier")
    };

    /**
     * Detailed description about the fulfilment
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
     * The list of labels of the fulfilment
     */
    public labelList = () => { 
        this.push(_ => "labelList")
    };

    /**
     * The version of the fulfilment
     */
    public version = () => { 
        this.push(_ => "version")
    };

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}

