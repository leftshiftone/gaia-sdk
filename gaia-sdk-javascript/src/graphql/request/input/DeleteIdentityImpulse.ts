

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../enumeration/RuntimeState";
import {SkillState} from "../enumeration/SkillState";

/**
 * The specification to delete an identity instance
 */
export class DeleteIdentityImpulse {

    private identityId:Uuid;

    constructor (identityId:Uuid) {
        this.identityId = identityId;
    }
}
