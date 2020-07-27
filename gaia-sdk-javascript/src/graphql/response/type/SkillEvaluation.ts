
import {SyncSkillEvaluation} from "./SyncSkillEvaluation";
import {AsyncSkillEvaluation} from "./AsyncSkillEvaluation";

import {Uuid, ISO8601, Struct} from "../../GaiaFunctionClient";
import {RuntimeState} from "../../request/enumeration/RuntimeState";
import {SkillState} from "../../request/enumeration/SkillState";

export interface SkillEvaluation {
    syncEval?:SyncSkillEvaluation,
    asyncEval?:AsyncSkillEvaluation
}
