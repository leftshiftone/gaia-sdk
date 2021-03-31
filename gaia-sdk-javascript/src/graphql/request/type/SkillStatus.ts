
import {Failure} from "./Failure";

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {Order} from "../enumeration/Order";
import {OrderByField} from "../enumeration/OrderByField";
import {EdgeOrderByField} from "../enumeration/EdgeOrderByField";
import {EdgeType} from "../enumeration/EdgeType";

export class SkillStatus extends Array<(_:VariableRegistry) => string> {
public _typeName = "SkillStatus";
    public health = () => { 
        this.push(_ => "health")
    };

    public running = () => { 
        this.push(_ => "running")
    };

    public pending = () => { 
        this.push(_ => "pending")
    };

    public failures = (config: (_:Failure) => void) => this.push((registry) => {
        const entity = new Failure();
        config(entity);
        return "failures { " + entity.render(registry) + " }";
    });

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}

