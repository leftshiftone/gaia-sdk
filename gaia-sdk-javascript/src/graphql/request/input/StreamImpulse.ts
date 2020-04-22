

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, Timestamp, Struct, Long} from "../../GaiaClient";
import {RuntimeState} from "./request/enumeration/RuntimeState";
import {SkillState} from "./request/enumeration/SkillState";

export class StreamImpulse {

    private id:Uuid;

    constructor (id:Uuid) {
        this.id = id;
    }
}
