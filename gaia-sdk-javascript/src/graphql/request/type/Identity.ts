

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../enumeration/RuntimeState";
import {SkillState} from "../enumeration/SkillState";

/**
 * Represents identity information
 */
export class Identity extends Array<(_:VariableRegistry) => string> {

    /**
     * The identity id
     */
    public identityId = () => { 
        this.push(_ => "identityId")
    };

    /**
     * The name of the identity
     */
    public qualifier = () => { 
        this.push(_ => "qualifier")
    };

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}
