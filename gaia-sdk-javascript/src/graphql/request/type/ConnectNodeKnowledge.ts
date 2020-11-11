
import {ConnectNodeRemovedImpulse} from "./ConnectNodeRemovedImpulse";
import {ConnectNodeUnsetImpulse} from "./ConnectNodeUnsetImpulse";
import {ConnectNodeAppendedImpulse} from "./ConnectNodeAppendedImpulse";
import {ConnectNodeSetImpulse} from "./ConnectNodeSetImpulse";
import {ConnectSetNodeImpulse} from "../input/ConnectSetNodeImpulse";
import {ConnectAppendNodeImpulse} from "../input/ConnectAppendNodeImpulse";
import {ConnectUnsetNodeImpulse} from "../input/ConnectUnsetNodeImpulse";
import {ConnectRemoveNodeImpulse} from "../input/ConnectRemoveNodeImpulse";

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
    public append = (impulse: ConnectAppendNodeImpulse|undefined, config: (_:ConnectNodeAppendedImpulse) => void) => this.push((registry) => {
        const name1 = registry.register("impulse", impulse);
        const entity = new ConnectNodeAppendedImpulse();
        config(entity);
        return `append(impulse:${name1}){` + entity.render(registry) + "}"
    });

    public remove = (impulse: ConnectRemoveNodeImpulse|undefined, config: (_:ConnectNodeRemovedImpulse) => void) => this.push((registry) => {
        const name1 = registry.register("impulse", impulse);
        const entity = new ConnectNodeRemovedImpulse();
        config(entity);
        return `remove(impulse:${name1}){` + entity.render(registry) + "}"
    });

    public set = (impulse: ConnectSetNodeImpulse|undefined, config: (_:ConnectNodeSetImpulse) => void) => this.push((registry) => {
        const name1 = registry.register("impulse", impulse);
        const entity = new ConnectNodeSetImpulse();
        config(entity);
        return `set(impulse:${name1}){` + entity.render(registry) + "}"
    });

    public unset = (impulse: ConnectUnsetNodeImpulse|undefined, config: (_:ConnectNodeUnsetImpulse) => void) => this.push((registry) => {
        const name1 = registry.register("impulse", impulse);
        const entity = new ConnectNodeUnsetImpulse();
        config(entity);
        return `unset(impulse:${name1}){` + entity.render(registry) + "}"
    });

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}

