import {Fulfilment} from "./Fulfilment";
import {Behaviour} from "./Behaviour";
import {Statement} from "./Statement";
import {KnowledgeEdge} from "./KnowledgeEdge";
import {Intent} from "./Intent";
import {Prompt} from "./Prompt";
import {Code} from "./Code";

export interface Knowledge {
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
    edges?:[KnowledgeEdge],
    edge?:KnowledgeEdge
}
