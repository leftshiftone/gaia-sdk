
import {OnUpdated} from "./OnUpdated";
import {OnDeleted} from "./OnDeleted";
import {OnCreated} from "./OnCreated";

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaFunctionClient";
import {RuntimeState} from "../enumeration/RuntimeState";
import {SkillState} from "../enumeration/SkillState";

export class Notification extends Array<(_:VariableRegistry) => string> {

    public onCreated = (config: (_:OnCreated) => void) => this.push((registry) => {
        const entity = new OnCreated();
        config(entity);
        return "onCreated { " + entity.render(registry) + " }";
    });

    public onUpdated = (config: (_:OnUpdated) => void) => this.push((registry) => {
        const entity = new OnUpdated();
        config(entity);
        return "onUpdated { " + entity.render(registry) + " }";
    });

    public onDeleted = (config: (_:OnDeleted) => void) => this.push((registry) => {
        const entity = new OnDeleted();
        config(entity);
        return "onDeleted { " + entity.render(registry) + " }";
    });

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}

