import {DeletedIdentityImpulse} from "./DeletedIdentityImpulse";
import {DeletedFulfilmentImpulse} from "./DeletedFulfilmentImpulse";
import {DeletedBehaviourImpulse} from "./DeletedBehaviourImpulse";
import {DeletedSkillProvisionImpulse} from "./DeletedSkillProvisionImpulse";
import {DeletedIntentImpulse} from "./DeletedIntentImpulse";
import {DeletedPromptImpulse} from "./DeletedPromptImpulse";
import {DeletedStatementImpulse} from "./DeletedStatementImpulse";
import {DeletedSkillImpulse} from "./DeletedSkillImpulse";
import {DeletedCodeImpulse} from "./DeletedCodeImpulse";
import {DeletedEdgeImpulse} from "./DeletedEdgeImpulse";

export interface DeleteKnowledge {
    /**
    * deletes a list of identities with the given specifications
    */
    identities?:[DeletedIdentityImpulse],
    /**
    * deletes a list of intents with the given specifications
    */
    intents?:[DeletedIntentImpulse],
    /**
    * deletes a list of prompts with the given specifications
    */
    prompts?:[DeletedPromptImpulse],
    /**
    * deletes a list of statements with the given specifications
    */
    statements?:[DeletedStatementImpulse],
    /**
    * deletes a list of fulfilments with the given specifications
    */
    fulfilments?:[DeletedFulfilmentImpulse],
    /**
    * deletes a list of behaviours with the given specifications
    */
    behaviours?:[DeletedBehaviourImpulse],
    /**
    * deletes a list of codes with the given specifications
    */
    codes?:[DeletedCodeImpulse],
    /**
    * deletes a list of edges with the given specifications
    */
    edges?:[DeletedEdgeImpulse],
    /**
    * deletes a list of skills with the given specifications
    */
    skills?:[DeletedSkillImpulse],
    /**
    * deletes a list of skill provisions with the given specifications
    */
    skillProvisions?:[DeletedSkillProvisionImpulse]
}
