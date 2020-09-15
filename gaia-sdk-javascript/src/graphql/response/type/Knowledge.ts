
import {SkillProvision} from "./SkillProvision";
import {Fulfilment} from "./Fulfilment";
import {Skill} from "./Skill";
import {Tenant} from "./Tenant";
import {Behaviour} from "./Behaviour";
import {Statement} from "./Statement";
import {Intent} from "./Intent";
import {Prompt} from "./Prompt";
import {Identity} from "./Identity";
import {Code} from "./Code";
import {Edge} from "./Edge";

import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../../request/enumeration/RuntimeState";
import {SkillState} from "../../request/enumeration/SkillState";
import {Order} from "../../request/enumeration/Order";
import {OrderByField} from "../../request/enumeration/OrderByField";
import {EdgeOrderByField} from "../../request/enumeration/EdgeOrderByField";

export interface Knowledge {
    tenants?:[Tenant], 
    tenant?:Tenant, 
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