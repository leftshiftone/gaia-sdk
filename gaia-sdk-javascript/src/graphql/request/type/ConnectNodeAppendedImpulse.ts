
import {Edge} from "./Edge";

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {Order} from "../enumeration/Order";
import {OrderByField} from "../enumeration/OrderByField";
import {EdgeOrderByField} from "../enumeration/EdgeOrderByField";
import {EdgeType} from "../enumeration/EdgeType";

/**
 * Impulse which indicates the result appending a node connection
 */
export class ConnectNodeAppendedImpulse extends Array<(_:VariableRegistry) => string> {
public _typeName = "ConnectNodeAppendedImpulse";
    public id = () => { 
        this.push(_ => "id")
    };

    /**
     * edge created by this request
     */
    public newEdge = (config: (_:Edge) => void) => this.push((registry) => {
        const entity = new Edge();
        config(entity);
        return "newEdge { " + entity.render(registry) + " }";
    });

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}

