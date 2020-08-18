import {UpdatedStatementImpulse} from "./UpdatedStatementImpulse";
import {UpdatedFulfilmentImpulse} from "./UpdatedFulfilmentImpulse";
import {UpdatedBehaviourImpulse} from "./UpdatedBehaviourImpulse";
import {UpdatedSkillProvisionImpulse} from "./UpdatedSkillProvisionImpulse";
import {UpdatedIdentityImpulse} from "./UpdatedIdentityImpulse";
import {UpdatedSkillImpulse} from "./UpdatedSkillImpulse";
import {UpdatedPromptImpulse} from "./UpdatedPromptImpulse";
import {UpdatedCodeImpulse} from "./UpdatedCodeImpulse";
import {UpdatedIntentImpulse} from "./UpdatedIntentImpulse";

export interface UpdateKnowledge {
    /**
    * updates a list of identities with the given specifications
    */
    identities?:[UpdatedIdentityImpulse],
    /**
    * updates a list of intents with the given specifications
    */
    intents?:[UpdatedIntentImpulse],
    /**
    * updates a list of prompts with the given specifications
    */
    prompts?:[UpdatedPromptImpulse],
    /**
    * updates a list of statements with the given specifications
    */
    statements?:[UpdatedStatementImpulse],
    /**
    * updates a list of fulfilments with the given specifications
    */
    fulfilments?:[UpdatedFulfilmentImpulse],
    /**
    * updates a list of behaviours with the given specifications
    */
    behaviours?:[UpdatedBehaviourImpulse],
    /**
    * updates a list of codes with the given specifications
    */
    codes?:[UpdatedCodeImpulse],
    /**
    * updates a list of skills with the given specifications
    */
    skills?:[UpdatedSkillImpulse],
    /**
    * updates a list of skill provisions with the given specifications
    */
    skillProvisions?:[UpdatedSkillProvisionImpulse]
}
