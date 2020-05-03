
import {CreatedCodeImpulse} from "./CreatedCodeImpulse";
import {CreatedPromptImpulse} from "./CreatedPromptImpulse";
import {CreatedStatementImpulse} from "./CreatedStatementImpulse";
import {CreatedIntentImpulse} from "./CreatedIntentImpulse";
import {CreatedBehaviourImpulse} from "./CreatedBehaviourImpulse";
import {CreatedFulfilmentImpulse} from "./CreatedFulfilmentImpulse";
import {CreateIntentImpulse} from "../../request/input/CreateIntentImpulse";
import {CreatePromptImpulse} from "../../request/input/CreatePromptImpulse";
import {CreateBehaviourImpulse} from "../../request/input/CreateBehaviourImpulse";
import {CreateCodeImpulse} from "../../request/input/CreateCodeImpulse";
import {CreateFulfilmentImpulse} from "../../request/input/CreateFulfilmentImpulse";
import {CreateStatementImpulse} from "../../request/input/CreateStatementImpulse";

import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../../request/enumeration/RuntimeState";
import {SkillState} from "../../request/enumeration/SkillState";

export interface CreateKnowledge {
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
    codes?:[CreatedCodeImpulse]
}