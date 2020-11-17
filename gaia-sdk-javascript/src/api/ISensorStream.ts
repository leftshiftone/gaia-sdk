import {DataRef} from "./DataRef";
import {SkillRef} from "./SkillRef";
import {IdentityOp} from "./IdentityOp";

export interface ISensorStream {
    data(uri: string): DataRef
    identity(): IdentityOp
    skill(skillUri: string): SkillRef
}
