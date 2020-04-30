
import {OnConversed} from "./OnConversed";

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../enumeration/RuntimeState";
import {SkillState} from "../enumeration/SkillState";

export class Interaction extends Array<(_:VariableRegistry) => string> {

    public onConversed = (config: (_:OnConversed) => void) => this.push((registry) => {
        const entity = new OnConversed();
        config(entity);
        return "onConversed { " + entity.render(registry) + " }";
    });

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}

