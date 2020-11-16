import {DataRef} from "./DataRef";
import {IdentityRef} from "./IdentityRef";
import {SkillRef} from "./SkillRef";
import {IdentityOp} from "./IdentityOp";

export interface ISensorStream {
    data(uri: string): DataRef
    identity(identityId?: string): IdentityRef | IdentityOp
    skill(skillUri: string): SkillRef
}
