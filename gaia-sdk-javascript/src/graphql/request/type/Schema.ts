
import {Query} from "./Query";
import {Mutation} from "./Mutation";
import {Subscription} from "./Subscription";

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../enumeration/RuntimeState";
import {SkillState} from "../enumeration/SkillState";
import {Order} from "../enumeration/Order";
import {OrderByField} from "../enumeration/OrderByField";
import {EdgeOrderByField} from "../enumeration/EdgeOrderByField";

export class Schema extends Array<(_:VariableRegistry) => string> {
public _typeName = "Schema";
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

