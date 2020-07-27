
import {BuildInEvaluation} from "./BuildInEvaluation";
import {SkillEvaluation} from "./SkillEvaluation";

import {Uuid, ISO8601, Struct} from "../../GaiaFunctionClient";
import {RuntimeState} from "../../request/enumeration/RuntimeState";
import {SkillState} from "../../request/enumeration/SkillState";

export interface Evaluation {
    skill?:SkillEvaluation,
    buildIn?:BuildInEvaluation
}
