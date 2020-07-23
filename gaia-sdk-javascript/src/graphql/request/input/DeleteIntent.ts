

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, Timestamp, Struct, Long} from "../../GaiaClient";
import {RuntimeState} from "../enumeration/RuntimeState";
import {SkillState} from "../enumeration/SkillState";

/**
 * The specification to delete an intent instance
 */
export class DeleteIntent {

    private identityId:Uuid;
    private qualifier:String;

    constructor (identityId:Uuid, qualifier:String) {
        this.identityId = identityId;
        this.qualifier = qualifier;
    }
}
