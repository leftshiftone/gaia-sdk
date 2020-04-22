

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, Timestamp, Struct, Long} from "../../GaiaClient";
import {RuntimeState} from "./request/enumeration/RuntimeState";
import {SkillState} from "./request/enumeration/SkillState";

/**
 * Each message returned from GAIA implements this interface
 */
export class Impulse extends Array<(_:VariableRegistry) => string> {

    /**
     * The id of the impulse
     */
    public id = () => { 
        this.push(_ => "id")
    };

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}

