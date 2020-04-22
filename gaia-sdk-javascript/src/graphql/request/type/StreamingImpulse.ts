

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, Timestamp, Struct, Long} from "../../GaiaClient";
import {RuntimeState} from "./request/enumeration/RuntimeState";
import {SkillState} from "./request/enumeration/SkillState";

export class StreamingImpulse extends Array<(_:VariableRegistry) => string> {

    public id = () => { 
        this.push(_ => "id")
    };

    public preSignedUrl = () => { 
        this.push(_ => "preSignedUrl")
    };

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}

