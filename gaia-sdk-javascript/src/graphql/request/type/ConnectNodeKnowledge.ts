
import {ConnectNodeRemovedImpulse} from "./ConnectNodeRemovedImpulse";
import {ConnectNodeUnsetImpulse} from "./ConnectNodeUnsetImpulse";
import {ConnectNodeAppendedImpulse} from "./ConnectNodeAppendedImpulse";
import {ConnectNodeSetImpulse} from "./ConnectNodeSetImpulse";

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../enumeration/RuntimeState";
import {SkillState} from "../enumeration/SkillState";
import {Order} from "../enumeration/Order";
import {OrderByField} from "../enumeration/OrderByField";
import {EdgeOrderByField} from "../enumeration/EdgeOrderByField";
import {EdgeType} from "../enumeration/EdgeType";

export class ConnectNodeKnowledge extends Array<(_:VariableRegistry) => string> {
public _typeName = "ConnectNodeKnowledge";
    public append = (type: EdgeType, target: Uuid, properties: Struct|undefined, weight: Number|undefined, config: (_:ConnectNodeAppendedImpulse) => void) => this.push((registry) => {
        const name1 = registry.register("type", type);
        const name2 = registry.register("target", target);
        const name3 = registry.register("properties", properties);
        const name4 = registry.register("weight", weight);
        const entity = new ConnectNodeAppendedImpulse();
        config(entity);
        return `append(type:${name1}, target:${name2}, properties:${name3}, weight:${name4}){` + entity.render(registry) + "}"
    });

    public remove = (type: EdgeType, target: Uuid, config: (_:ConnectNodeRemovedImpulse) => void) => this.push((registry) => {
        const name1 = registry.register("type", type);
        const name2 = registry.register("target", target);
        const entity = new ConnectNodeRemovedImpulse();
        config(entity);
        return `remove(type:${name1}, target:${name2}){` + entity.render(registry) + "}"
    });

    public set = (type: EdgeType, target: Uuid, properties: Struct|undefined, weight: Number|undefined, config: (_:ConnectNodeSetImpulse) => void) => this.push((registry) => {
        const name1 = registry.register("type", type);
        const name2 = registry.register("target", target);
        const name3 = registry.register("properties", properties);
        const name4 = registry.register("weight", weight);
        const entity = new ConnectNodeSetImpulse();
        config(entity);
        return `set(type:${name1}, target:${name2}, properties:${name3}, weight:${name4}){` + entity.render(registry) + "}"
    });

    public unset = (type: EdgeType, config: (_:ConnectNodeUnsetImpulse) => void) => this.push((registry) => {
        const name1 = registry.register("type", type);
        const entity = new ConnectNodeUnsetImpulse();
        config(entity);
        return `unset(type:${name1}){` + entity.render(registry) + "}"
    });

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}

