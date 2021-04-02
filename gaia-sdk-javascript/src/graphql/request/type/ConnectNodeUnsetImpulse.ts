
import {EdgeKeyOne} from "./EdgeKeyOne";

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {Order} from "../enumeration/Order";
import {OrderByField} from "../enumeration/OrderByField";
import {EdgeOrderByField} from "../enumeration/EdgeOrderByField";
import {EdgeType} from "../enumeration/EdgeType";

/**
 * Impulse which indicates the result unsetting a node connection
 */
export class ConnectNodeUnsetImpulse extends Array<(_:VariableRegistry) => string> {
public _typeName = "ConnectNodeUnsetImpulse";
    public id = () => { 
        this.push(_ => "id")
    };

    /**
     * edges removed by this request
     */
    public removedEdges = (config: (_:EdgeKeyOne) => void) => this.push((registry) => {
        const entity = new EdgeKeyOne();
        config(entity);
        return "removedEdges { " + entity.render(registry) + " }";
    });

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}

