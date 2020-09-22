
import {DeletedIdentityImpulse} from "./DeletedIdentityImpulse";
import {DeletedFulfilmentImpulse} from "./DeletedFulfilmentImpulse";
import {DeletedBehaviourImpulse} from "./DeletedBehaviourImpulse";
import {DeletedTenantImpulse} from "./DeletedTenantImpulse";
import {DeletedSkillProvisionImpulse} from "./DeletedSkillProvisionImpulse";
import {DeletedIntentImpulse} from "./DeletedIntentImpulse";
import {DeletedPromptImpulse} from "./DeletedPromptImpulse";
import {DeletedStatementImpulse} from "./DeletedStatementImpulse";
import {DeletedSkillImpulse} from "./DeletedSkillImpulse";
import {DeletedUserImpulse} from "./DeletedUserImpulse";
import {DeletedCodeImpulse} from "./DeletedCodeImpulse";
import {DeletedEdgeImpulse} from "./DeletedEdgeImpulse";
import {DeleteFulfilmentImpulse} from "../../request/input/DeleteFulfilmentImpulse";
import {DeleteUserImpulse} from "../../request/input/DeleteUserImpulse";
import {DeleteCodeImpulse} from "../../request/input/DeleteCodeImpulse";
import {DeleteEdgeImpulse} from "../../request/input/DeleteEdgeImpulse";
import {DeleteStatementImpulse} from "../../request/input/DeleteStatementImpulse";
import {DeletePromptImpulse} from "../../request/input/DeletePromptImpulse";
import {DeleteBehaviourImpulse} from "../../request/input/DeleteBehaviourImpulse";
import {DeleteTenantImpulse} from "../../request/input/DeleteTenantImpulse";
import {DeleteIntentImpulse} from "../../request/input/DeleteIntentImpulse";
import {DeleteSkillImpulse} from "../../request/input/DeleteSkillImpulse";
import {DeleteSkillProvisionImpulse} from "../../request/input/DeleteSkillProvisionImpulse";
import {DeleteIdentityImpulse} from "../../request/input/DeleteIdentityImpulse";

import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../../request/enumeration/RuntimeState";
import {SkillState} from "../../request/enumeration/SkillState";
import {Order} from "../../request/enumeration/Order";
import {OrderByField} from "../../request/enumeration/OrderByField";
import {EdgeOrderByField} from "../../request/enumeration/EdgeOrderByField";

export interface DeleteKnowledge {
    /**
    * deletes a list of identities with the given specifications
    */
    identities?:[DeletedIdentityImpulse], 
    /**
    * deletes a list of tenants with the given specifications
    */
    tenants?:[DeletedTenantImpulse], 
    /**
    * deletes a list of users with the given specifications
    */
    users?:[DeletedUserImpulse], 
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