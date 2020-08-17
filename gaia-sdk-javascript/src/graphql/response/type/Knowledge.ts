
import {Fulfilment} from "./Fulfilment";
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
import {Order} from "../enumeration/Order";
import {OrderBy} from "../enumeration/OrderBy";

export interface Knowledge {
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
    edge?:Edge
}