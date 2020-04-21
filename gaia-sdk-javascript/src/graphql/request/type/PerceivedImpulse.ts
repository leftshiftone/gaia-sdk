

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, Timestamp, Struct, Long} from "../../GaiaClient";

/**
 * Impulse which indicates the result of a perceive impulse.
 */
export default class PerceivedImpulse extends Array<(_:VariableRegistry) => string> {

    public id = () => { 
        this.push(_ => "id")
    };

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}

