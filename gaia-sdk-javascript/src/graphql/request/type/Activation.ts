

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, Timestamp, Struct, Long} from "../../GaiaClient";

export default class Activation extends Array<(_:VariableRegistry) => string> {

    public tmp = () => { 
        this.push(_ => "tmp")
    };

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}
