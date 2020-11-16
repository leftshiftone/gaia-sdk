
import {EdgeKeyOne} from "./EdgeKeyOne";
import {Edge} from "./Edge";

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../enumeration/RuntimeState";
import {SkillState} from "../enumeration/SkillState";
import {Order} from "../enumeration/Order";
import {OrderByField} from "../enumeration/OrderByField";
import {EdgeOrderByField} from "../enumeration/EdgeOrderByField";
import {EdgeType} from "../enumeration/EdgeType";

/**
 * Impulse which indicates the result setting a node connection
 */
export class ConnectNodeSetImpulse extends Array<(_:VariableRegistry) => string> {
public _typeName = "ConnectNodeSetImpulse";
    public id = () => { 
        this.push(_ => "id")
    };

    /**
     * edges removed before setting the new edge
     */
    public removedEdges = (config: (_:EdgeKeyOne) => void) => this.push((registry) => {
        const entity = new EdgeKeyOne();
        config(entity);
        return "removedEdges { " + entity.render(registry) + " }";
    });

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

