

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, Timestamp, Struct, Long} from "../../GaiaClient";

export default class BuildInEvaluation extends Array<(_:VariableRegistry) => string> {

    public behaviour = () => { 
        this.push(_ => "behaviour")
    };

    public gaiaquery = () => { 
        this.push(_ => "gaiaquery")
    };

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}

