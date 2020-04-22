
import {Retrieval} from "./Retrieval";
import {Introspection} from "./Introspection";

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, Timestamp, Struct, Long} from "../../GaiaClient";
import {RuntimeState} from "../enumeration/RuntimeState";
import {SkillState} from "../enumeration/SkillState";

/**
 * The top level query type
 */
export class Query extends Array<(_:VariableRegistry) => string> {

    /**
     * Container element for all introspect sensor fields
     */
    public introspect = (config: (_:Introspection) => void) => this.push((registry) => {
        const entity = new Introspection();
        config(entity);
        return "introspect { " + entity.render(registry) + " }";
    });

    /**
     * Container element for all retrieve sensor fields
     */
    public retrieve = (config: (_:Retrieval) => void) => this.push((registry) => {
        const entity = new Retrieval();
        config(entity);
        return "retrieve { " + entity.render(registry) + " }";
    });

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}

