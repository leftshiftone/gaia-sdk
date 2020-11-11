import {DataRef} from "./DataRef";
import {IdentityRef} from "./IdentityRef";
import {SkillRef} from "./SkillRef";

export interface ISensorStream {
    data(uri: string): DataRef
    identity(uri: string): IdentityRef
    skill(skillUri: string): SkillRef
}
