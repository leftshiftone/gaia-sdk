
import {OnUpdated} from "./OnUpdated";
import {OnDeleted} from "./OnDeleted";
import {OnCreated} from "./OnCreated";

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {Order} from "../enumeration/Order";
import {OrderByField} from "../enumeration/OrderByField";
import {EdgeOrderByField} from "../enumeration/EdgeOrderByField";
import {EdgeType} from "../enumeration/EdgeType";

export class Notification extends Array<(_:VariableRegistry) => string> {
public _typeName = "Notification";
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

