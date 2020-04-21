

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, Timestamp, Struct, Long} from "../../GaiaClient";

/**
 * Each message returned from GAIA implements this interface
 */
export default class Impulse extends Array<(_:VariableRegistry) => string> {

    /**
     * The id of the impulse
     */
    public id = () => { 
        this.push(_ => "id")
    };

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}

