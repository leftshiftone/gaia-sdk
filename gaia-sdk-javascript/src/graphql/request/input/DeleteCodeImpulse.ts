

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../enumeration/RuntimeState";
import {SkillState} from "../enumeration/SkillState";

/**
 * The specification to delete a code instance
 */
export class DeleteCodeImpulse {

    private identityId:Uuid;
    private reference:Uuid;

    constructor (identityId:Uuid, reference:Uuid) {
        this.identityId = identityId;
        this.reference = reference;
    }
}
