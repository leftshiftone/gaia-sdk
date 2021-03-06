
import {Interaction} from "./Interaction";
import {Introspection} from "./Introspection";
import {Notification} from "./Notification";

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {Order} from "../enumeration/Order";
import {OrderByField} from "../enumeration/OrderByField";
import {EdgeOrderByField} from "../enumeration/EdgeOrderByField";
import {EdgeType} from "../enumeration/EdgeType";

/**
 * the top level subscription type
 */
export class Subscription extends Array<(_:VariableRegistry) => string> {
public _typeName = "Subscription";
    public interact = (config: (_:Interaction) => void) => this.push((registry) => {
        const entity = new Interaction();
        config(entity);
        return "interact { " + entity.render(registry) + " }";
    });

    public notify = (config: (_:Notification) => void) => this.push((registry) => {
        const entity = new Notification();
        config(entity);
        return "notify { " + entity.render(registry) + " }";
    });

    /**
     * Container element for all introspect sensor fields
     */
    public introspect = (config: (_:Introspection) => void) => this.push((registry) => {
        const entity = new Introspection();
        config(entity);
        return "introspect { " + entity.render(registry) + " }";
    });

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}

