import {CreatedSkillProvisionImpulse} from "./CreatedSkillProvisionImpulse";
import {CreatedEdgeImpulse} from "./CreatedEdgeImpulse";
import {CreatedCodeImpulse} from "./CreatedCodeImpulse";
import {CreatedPromptImpulse} from "./CreatedPromptImpulse";
import {CreatedStatementImpulse} from "./CreatedStatementImpulse";
import {CreatedIntentImpulse} from "./CreatedIntentImpulse";
import {CreatedBehaviourImpulse} from "./CreatedBehaviourImpulse";
import {CreatedSkillImpulse} from "./CreatedSkillImpulse";
import {CreatedIdentityImpulse} from "./CreatedIdentityImpulse";
import {CreatedFulfilmentImpulse} from "./CreatedFulfilmentImpulse";

export interface CreateKnowledge {
    /**
    * creates a list of identities with the given specifications
    */
    identities?:[CreatedIdentityImpulse],
    /**
    * creates a list of intents with the given specifications
    */
    intents?:[CreatedIntentImpulse],
    /**
    * creates a list of prompts with the given specifications
    */
    prompts?:[CreatedPromptImpulse],
    /**
    * creates a list of statements with the given specifications
    */
    statements?:[CreatedStatementImpulse],
    /**
    * creates a list of fulfilments with the given specifications
    */
    fulfilments?:[CreatedFulfilmentImpulse],
    /**
    * creates a list of behaviours with the given specifications
    */
    behaviours?:[CreatedBehaviourImpulse],
    /**
    * creates a list of codes with the given specifications
    */
    codes?:[CreatedCodeImpulse],
    /**
    * creates a list of edges with the given specifications
    */
    edges?:[CreatedEdgeImpulse],
    /**
    * creates a list of skills with the given specifications
    */
    skills?:[CreatedSkillImpulse],
    /**
    * creates a list of skill provisions with the given specifications
    */
    skillProvisions?:[CreatedSkillProvisionImpulse]
}
