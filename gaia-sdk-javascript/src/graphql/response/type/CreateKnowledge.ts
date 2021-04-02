
import {CreatedEdgeImpulse} from "./CreatedEdgeImpulse";
import {CreatedCodeImpulse} from "./CreatedCodeImpulse";
import {CreatedPromptImpulse} from "./CreatedPromptImpulse";
import {CreatedIntentImpulse} from "./CreatedIntentImpulse";
import {CreatedSkillImpulse} from "./CreatedSkillImpulse";
import {CreatedFulfilmentImpulse} from "./CreatedFulfilmentImpulse";
import {CreatedUserImpulse} from "./CreatedUserImpulse";
import {CreatedSkillProvisionImpulse} from "./CreatedSkillProvisionImpulse";
import {CreatedTenantImpulse} from "./CreatedTenantImpulse";
import {CreatedStatementImpulse} from "./CreatedStatementImpulse";
import {CreatedRoleImpulse} from "./CreatedRoleImpulse";
import {CreatedBehaviourImpulse} from "./CreatedBehaviourImpulse";
import {CreatedIdentityImpulse} from "./CreatedIdentityImpulse";
import {CreatedApiKeyImpulse} from "./CreatedApiKeyImpulse";
import {CreateTenantImpulse} from "../../request/input/CreateTenantImpulse";
import {CreateSkillImpulse} from "../../request/input/CreateSkillImpulse";
import {CreateEdgeImpulse} from "../../request/input/CreateEdgeImpulse";
import {CreateIdentityImpulse} from "../../request/input/CreateIdentityImpulse";
import {CreateCodeImpulse} from "../../request/input/CreateCodeImpulse";
import {CreateFulfilmentImpulse} from "../../request/input/CreateFulfilmentImpulse";
import {CreateStatementImpulse} from "../../request/input/CreateStatementImpulse";
import {CreateSkillProvisionImpulse} from "../../request/input/CreateSkillProvisionImpulse";
import {CreateRoleImpulse} from "../../request/input/CreateRoleImpulse";
import {CreateIntentImpulse} from "../../request/input/CreateIntentImpulse";
import {CreatePromptImpulse} from "../../request/input/CreatePromptImpulse";
import {CreateBehaviourImpulse} from "../../request/input/CreateBehaviourImpulse";
import {CreateUserImpulse} from "../../request/input/CreateUserImpulse";
import {CreateApiKeyImpulse} from "../../request/input/CreateApiKeyImpulse";

import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {Order} from "../../request/enumeration/Order";
import {OrderByField} from "../../request/enumeration/OrderByField";
import {EdgeOrderByField} from "../../request/enumeration/EdgeOrderByField";

export interface CreateKnowledge {
    /**
    * creates a list of identities with the given specifications
    */
    identities?:[CreatedIdentityImpulse], 
    /**
    * creates a list of tenants with the given specifications
    */
    tenants?:[CreatedTenantImpulse], 
    /**
    * creates a list of users with the given specifications
    */
    users?:[CreatedUserImpulse], 
    /**
    * creates a list of api keys with the given specifications
    */
    apiKeys?:[CreatedApiKeyImpulse], 
    /**
    * creates a list of roles with the given specifications
    */
    roles?:[CreatedRoleImpulse], 
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