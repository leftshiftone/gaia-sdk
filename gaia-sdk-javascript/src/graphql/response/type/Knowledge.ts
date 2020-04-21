
import {Fulfilment} from "./Fulfilment";
import {Statement} from "./Statement";
import {KnowledgeEdge} from "./KnowledgeEdge";
import {Intent} from "./Intent";
import {Prompt} from "./Prompt";

import {Uuid, Timestamp, Struct, Long} from "../../GaiaClient";

export interface Knowledge {
    intents?:[Intent], 
    prompts?:[Prompt], 
    fulfilments?:[Fulfilment], 
    statements?:[Statement], 
    edge?:[KnowledgeEdge]
}