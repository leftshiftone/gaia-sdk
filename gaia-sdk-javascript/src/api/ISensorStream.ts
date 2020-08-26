import {DataRef} from "./DataRef";
import {SkillRef} from "./SkillRef";

export interface ISensorStream {
    data(uri: string): DataRef
    skill(skillUri: string): SkillRef
}
