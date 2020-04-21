
import {SyncSkillEvaluation} from "./SyncSkillEvaluation";
import {AsyncSkillEvaluation} from "./AsyncSkillEvaluation";

import {Uuid, Timestamp, Struct, Long} from "../../GaiaClient";

export interface SkillEvaluation {
    sync?:SyncSkillEvaluation, 
    async?:AsyncSkillEvaluation
}