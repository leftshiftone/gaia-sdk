
import {DeletedFulfilmentImpulse} from "./DeletedFulfilmentImpulse";
import {DeletedBehaviourImpulse} from "./DeletedBehaviourImpulse";
import {DeletedIntentImpulse} from "./DeletedIntentImpulse";
import {DeletedPromptImpulse} from "./DeletedPromptImpulse";
import {DeletedStatementImpulse} from "./DeletedStatementImpulse";
import {DeletedCodeImpulse} from "./DeletedCodeImpulse";
import {DeleteFulfilmentImpulse} from "../../request/input/DeleteFulfilmentImpulse";
import {DeleteCodeImpulse} from "../../request/input/DeleteCodeImpulse";
import {DeleteStatementImpulse} from "../../request/input/DeleteStatementImpulse";
import {DeletePromptImpulse} from "../../request/input/DeletePromptImpulse";
import {DeleteBehaviourImpulse} from "../../request/input/DeleteBehaviourImpulse";
import {DeleteIntentImpulse} from "../../request/input/DeleteIntentImpulse";

import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../../request/enumeration/RuntimeState";
import {SkillState} from "../../request/enumeration/SkillState";

export interface DeleteKnowledge {
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
    codes?:[DeletedCodeImpulse]
}