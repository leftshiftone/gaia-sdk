
import {UpdatedUserImpulse} from "./UpdatedUserImpulse";
import {UpdatedTenantImpulse} from "./UpdatedTenantImpulse";
import {UpdatedBehaviourImpulse} from "./UpdatedBehaviourImpulse";
import {UpdatedApiKeyImpulse} from "./UpdatedApiKeyImpulse";
import {UpdatedSkillImpulse} from "./UpdatedSkillImpulse";
import {UpdatedCodeImpulse} from "./UpdatedCodeImpulse";
import {UpdatedRoleImpulse} from "./UpdatedRoleImpulse";
import {UpdatedIntentImpulse} from "./UpdatedIntentImpulse";
import {UpdatedStatementImpulse} from "./UpdatedStatementImpulse";
import {UpdatedFulfilmentImpulse} from "./UpdatedFulfilmentImpulse";
import {UpdatedSkillProvisionImpulse} from "./UpdatedSkillProvisionImpulse";
import {UpdatedIdentityImpulse} from "./UpdatedIdentityImpulse";
import {UpdatedPromptImpulse} from "./UpdatedPromptImpulse";
import {UpdateBehaviourImpulse} from "../../request/input/UpdateBehaviourImpulse";
import {UpdateSkillProvisionImpulse} from "../../request/input/UpdateSkillProvisionImpulse";
import {UpdateUserImpulse} from "../../request/input/UpdateUserImpulse";
import {UpdateIntentImpulse} from "../../request/input/UpdateIntentImpulse";
import {UpdateCodeImpulse} from "../../request/input/UpdateCodeImpulse";
import {UpdatePromptImpulse} from "../../request/input/UpdatePromptImpulse";
import {UpdateSkillImpulse} from "../../request/input/UpdateSkillImpulse";
import {UpdateIdentityImpulse} from "../../request/input/UpdateIdentityImpulse";
import {UpdateStatementImpulse} from "../../request/input/UpdateStatementImpulse";
import {UpdateApiKeyImpulse} from "../../request/input/UpdateApiKeyImpulse";
import {UpdateRoleImpulse} from "../../request/input/UpdateRoleImpulse";
import {UpdateTenantImpulse} from "../../request/input/UpdateTenantImpulse";
import {UpdateFulfilmentImpulse} from "../../request/input/UpdateFulfilmentImpulse";

import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {Order} from "../../request/enumeration/Order";
import {OrderByField} from "../../request/enumeration/OrderByField";
import {EdgeOrderByField} from "../../request/enumeration/EdgeOrderByField";

export interface UpdateKnowledge {
    /**
    * updates a list of identities with the given specifications
    */
    identities?:[UpdatedIdentityImpulse], 
    /**
    * updates a list of tenants with the given specifications
    */
    tenants?:[UpdatedTenantImpulse], 
    /**
    * updates a list of users with the given specifications
    */
    users?:[UpdatedUserImpulse], 
    /**
    * updates a list of api keys with the given specifications
    */
    apiKeys?:[UpdatedApiKeyImpulse], 
    /**
    * updates a list of roles with the given specifications
    */
    roles?:[UpdatedRoleImpulse], 
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