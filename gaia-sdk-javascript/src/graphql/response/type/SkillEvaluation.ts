
import {SyncSkillEvaluation} from "./SyncSkillEvaluation";
import {AsyncSkillEvaluation} from "./AsyncSkillEvaluation";

import {Uuid, Timestamp, Struct, Long} from "../../GaiaClient";

export interface SkillEvaluation {
    syncEval?:SyncSkillEvaluation, 
    asyncEval?:AsyncSkillEvaluation
}