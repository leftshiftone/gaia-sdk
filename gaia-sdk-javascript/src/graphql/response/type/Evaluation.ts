
import {BuildInEvaluation} from "./BuildInEvaluation";
import {SkillEvaluation} from "./SkillEvaluation";

import {Uuid, Timestamp, Struct, Long} from "../../GaiaClient";
import {RuntimeState} from "../../request/enumeration/RuntimeState";
import {SkillState} from "../../request/enumeration/SkillState";

export interface Evaluation {
    skill?:SkillEvaluation, 
    buildIn?:BuildInEvaluation
}