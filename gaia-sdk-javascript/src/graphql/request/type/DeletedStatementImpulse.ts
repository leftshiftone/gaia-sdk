

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../enumeration/RuntimeState";
import {SkillState} from "../enumeration/SkillState";

/**
 * Impulse which indicates the result of a delete statement impulse
 */
export class DeletedStatementImpulse extends Array<(_:VariableRegistry) => string> {

    public id = () => { 
        this.push(_ => "id")
    };

    public identityId = () => { 
        this.push(_ => "identityId")
    };

    public reference = () => { 
        this.push(_ => "reference")
    };

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}

