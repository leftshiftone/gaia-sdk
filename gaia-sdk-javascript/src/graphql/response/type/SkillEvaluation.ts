
import {SyncSkillEvaluation} from "./SyncSkillEvaluation";
import {AsyncSkillEvaluation} from "./AsyncSkillEvaluation";

import {Uuid, Timestamp, Struct, Long} from "../../GaiaClient";
import {RuntimeState} from "../../request/enumeration/RuntimeState";
import {SkillState} from "../../request/enumeration/SkillState";

export interface SkillEvaluation {
    syncEval?:SyncSkillEvaluation, 
    asyncEval?:AsyncSkillEvaluation
}