

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, Timestamp, Struct, Long} from "../../GaiaClient";

export default class StreamImpulse {

    private id:Uuid;

    constructor (id:Uuid) {
        this.id = id;
    }
}
