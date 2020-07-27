
import {UpdatedStatementImpulse} from "./UpdatedStatementImpulse";
import {UpdatedFulfilmentImpulse} from "./UpdatedFulfilmentImpulse";
import {UpdatedBehaviourImpulse} from "./UpdatedBehaviourImpulse";
import {UpdatedPromptImpulse} from "./UpdatedPromptImpulse";
import {UpdatedCodeImpulse} from "./UpdatedCodeImpulse";
import {UpdatedIntentImpulse} from "./UpdatedIntentImpulse";
import {UpdateStatementImpulse} from "../../request/input/UpdateStatementImpulse";
import {UpdateBehaviourImpulse} from "../../request/input/UpdateBehaviourImpulse";
import {UpdateIntentImpulse} from "../../request/input/UpdateIntentImpulse";
import {UpdateCodeImpulse} from "../../request/input/UpdateCodeImpulse";
import {UpdatePromptImpulse} from "../../request/input/UpdatePromptImpulse";
import {UpdateFulfilmentImpulse} from "../../request/input/UpdateFulfilmentImpulse";

import {Uuid, ISO8601, Struct} from "../../GaiaFunctionClient";
import {RuntimeState} from "../../request/enumeration/RuntimeState";
import {SkillState} from "../../request/enumeration/SkillState";

export interface UpdateKnowledge {
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
    codes?:[UpdatedCodeImpulse]
}
