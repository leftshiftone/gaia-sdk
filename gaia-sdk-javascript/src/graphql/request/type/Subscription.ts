
import Interaction from "./Interaction";
import Introspection from "./Introspection";
import Notification from "./Notification";

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, Timestamp, Struct, Long} from "../../GaiaClient";

/**
 * the top level subscription type
 */
export default class Subscription extends Array<(_:VariableRegistry) => string> {

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
