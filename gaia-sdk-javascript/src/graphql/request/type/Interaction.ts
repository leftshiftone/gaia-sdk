
import OnConversed from "./OnConversed";

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, Timestamp, Struct, Long} from "../../GaiaClient";

export default class Interaction extends Array<(_:VariableRegistry) => string> {

    public onConversed = (config: (_:OnConversed) => void) => this.push((registry) => {
        const entity = new OnConversed();
        config(entity);
        return "onConversed { " + entity.render(registry) + " }";
    });

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}

