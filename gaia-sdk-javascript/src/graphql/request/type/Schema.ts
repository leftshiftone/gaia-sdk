
import {Query} from "./Query";
import {Mutation} from "./Mutation";
import {Subscription} from "./Subscription";

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, Timestamp, Struct, Long} from "../../GaiaClient";
import {RuntimeState} from "./request/enumeration/RuntimeState";
import {SkillState} from "./request/enumeration/SkillState";

export class Schema extends Array<(_:VariableRegistry) => string> {

    public query = (config: (_:Query) => void) => this.push((registry) => {
        const entity = new Query();
        config(entity);
        return "query { " + entity.render(registry) + " }";
    });

    public mutation = (config: (_:Mutation) => void) => this.push((registry) => {
        const entity = new Mutation();
        config(entity);
        return "mutation { " + entity.render(registry) + " }";
    });

    public subscription = (config: (_:Subscription) => void) => this.push((registry) => {
        const entity = new Subscription();
        config(entity);
        return "subscription { " + entity.render(registry) + " }";
    });

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}

