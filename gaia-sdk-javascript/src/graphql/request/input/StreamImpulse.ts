

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../enumeration/RuntimeState";
import {SkillState} from "../enumeration/SkillState";

export class StreamImpulse {

    private id:Uuid;

    constructor (id:Uuid) {
        this.id = id;
    }
}
