

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaFunctionClient";
import {RuntimeState} from "../enumeration/RuntimeState";
import {SkillState} from "../enumeration/SkillState";

/**
 * The specification to delete a behaviour instance
 */
export class DeleteBehaviourImpulse {

    private identityId:Uuid;
    private reference:Uuid;

    constructor (identityId:Uuid, reference:Uuid) {
        this.identityId = identityId;
        this.reference = reference;
    }
}
