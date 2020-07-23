
import {StreamingImpulse} from "./StreamingImpulse";
import {StreamImpulse} from "../input/StreamImpulse";

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../enumeration/RuntimeState";
import {SkillState} from "../enumeration/SkillState";

/**
 * This type contains all practice sensor impulses which are used to support
 * practice in gaia.
 */
export class Practice extends Array<(_:VariableRegistry) => string> {

    /**
     * Stream practice preparation impulse used to transfer a skill to gaia.
     *     This perception impulse do not invoke the data transmission but establishes
     *     a connection to the streaming api.
     */
    public prepare = (impulse : StreamImpulse, config: (_:StreamingImpulse) => void) => this.push((registry) => {
        const name1 = registry.register("impulse", impulse);
        const entity = new StreamingImpulse();
        config(entity);
        return `prepare(impulse:$${name1}){` + entity.render(registry) + "}"
    });

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}

