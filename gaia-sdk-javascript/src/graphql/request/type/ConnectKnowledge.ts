
import {ConnectNodeKnowledge} from "./ConnectNodeKnowledge";

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {Order} from "../enumeration/Order";
import {OrderByField} from "../enumeration/OrderByField";
import {EdgeOrderByField} from "../enumeration/EdgeOrderByField";
import {EdgeType} from "../enumeration/EdgeType";

export class ConnectKnowledge extends Array<(_:VariableRegistry) => string> {
public _typeName = "ConnectKnowledge";
    public node = (nodeId: Uuid, config: (_:ConnectNodeKnowledge) => void) => this.push((registry) => {
        const name1 = registry.register("nodeId", nodeId);
        const entity = new ConnectNodeKnowledge();
        config(entity);
        return `node(nodeId:${name1}){` + entity.render(registry) + "}"
    });

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}

