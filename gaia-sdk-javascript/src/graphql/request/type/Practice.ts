
import {CreatedSkillBuildJobImpulse} from "./CreatedSkillBuildJobImpulse";
import {StreamingImpulse} from "./StreamingImpulse";
import {CanceledSkillBuildJobImpulse} from "./CanceledSkillBuildJobImpulse";
import {StreamImpulse} from "../input/StreamImpulse";
import {CreateSkillBuildJobImpulse} from "../input/CreateSkillBuildJobImpulse";
import {CancelSkillBuildJobImpulse} from "../input/CancelSkillBuildJobImpulse";

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {Order} from "../enumeration/Order";
import {OrderByField} from "../enumeration/OrderByField";
import {EdgeOrderByField} from "../enumeration/EdgeOrderByField";
import {EdgeType} from "../enumeration/EdgeType";

/**
 * This type contains all practice sensor impulses which are used to support
 * practice in gaia.
 */
export class Practice extends Array<(_:VariableRegistry) => string> {
public _typeName = "Practice";
    /**
     * Stream practice preparation impulse used to transfer a skill to gaia.
     *     This perception impulse do not invoke the data transmission but establishes
     *     a connection to the streaming api.
     */
    public prepare = (impulse: StreamImpulse|undefined, config: (_:StreamingImpulse) => void) => this.push((registry) => {
        const name1 = registry.register("impulse", impulse);
        const entity = new StreamingImpulse();
        config(entity);
        return `prepare(impulse:${name1}){` + entity.render(registry) + "}"
    });

    public build = (impulse: CreateSkillBuildJobImpulse|undefined, config: (_:CreatedSkillBuildJobImpulse) => void) => this.push((registry) => {
        const name1 = registry.register("impulse", impulse);
        const entity = new CreatedSkillBuildJobImpulse();
        config(entity);
        return `build(impulse:${name1}){` + entity.render(registry) + "}"
    });

    public cancel = (impulse: CancelSkillBuildJobImpulse|undefined, config: (_:CanceledSkillBuildJobImpulse) => void) => this.push((registry) => {
        const name1 = registry.register("impulse", impulse);
        const entity = new CanceledSkillBuildJobImpulse();
        config(entity);
        return `cancel(impulse:${name1}){` + entity.render(registry) + "}"
    });

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}

