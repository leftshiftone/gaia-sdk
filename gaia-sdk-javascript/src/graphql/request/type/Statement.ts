

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../enumeration/RuntimeState";
import {SkillState} from "../enumeration/SkillState";
import {Order} from "../enumeration/Order";
import {OrderByField} from "../enumeration/OrderByField";
import {EdgeOrderByField} from "../enumeration/EdgeOrderByField";

/**
 * Represents statement information
 */
export class Statement extends Array<(_:VariableRegistry) => string> {

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
    public labelList = () => { 
        this.push(_ => "labelList")
    };

    /**
     * The version of the statement
     */
    public version = () => { 
        this.push(_ => "version")
    };

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}

