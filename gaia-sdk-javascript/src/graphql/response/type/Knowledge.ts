
import {Fulfilment} from "./Fulfilment";
import {User} from "./User";
import {ApiKey} from "./ApiKey";
import {Behaviour} from "./Behaviour";
import {Statement} from "./Statement";
import {Intent} from "./Intent";
import {Code} from "./Code";
import {SkillProvision} from "./SkillProvision";
import {Skill} from "./Skill";
import {Tenant} from "./Tenant";
import {Prompt} from "./Prompt";
import {Identity} from "./Identity";
import {Edge} from "./Edge";

import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../../request/enumeration/RuntimeState";
import {SkillState} from "../../request/enumeration/SkillState";
import {Order} from "../../request/enumeration/Order";
import {OrderByField} from "../../request/enumeration/OrderByField";
import {EdgeOrderByField} from "../../request/enumeration/EdgeOrderByField";

export interface Knowledge {
    users?:[User], 
    user?:User, 
    tenants?:[Tenant], 
    tenant?:Tenant, 
    apiKeys?:[ApiKey], 
    apiKey?:ApiKey, 
    identities?:[Identity], 
    identity?:Identity, 
    intents?:[Intent], 
    intent?:Intent, 
    prompts?:[Prompt], 
    prompt?:Prompt, 
    fulfilments?:[Fulfilment], 
    fulfilment?:Fulfilment, 
    statements?:[Statement], 
    statement?:Statement, 
    codes?:[Code], 
    code?:Code, 
    behaviours?:[Behaviour], 
    behaviour?:Behaviour, 
    edges?:[Edge], 
    edge?:Edge, 
    skills?:[Skill], 
    skill?:Skill, 
    skillProvisions?:[SkillProvision], 
    skillProvision?:SkillProvision
}