

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, Timestamp, Struct, Long} from "../../GaiaClient";

export default class StreamingImpulse extends Array<(_:VariableRegistry) => string> {

    public id = () => { 
        this.push(_ => "id")
    };

    public preSignedUrl = () => { 
        this.push(_ => "preSignedUrl")
    };

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}

