
import {BuildInEvaluation} from "./BuildInEvaluation";
import {SkillEvaluation} from "./SkillEvaluation";

import {Uuid, Timestamp, Struct, Long} from "../../GaiaClient";

export interface Evaluation {
    skill?:SkillEvaluation, 
    buildIn?:BuildInEvaluation
}