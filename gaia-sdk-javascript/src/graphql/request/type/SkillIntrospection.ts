

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../enumeration/RuntimeState";
import {SkillState} from "../enumeration/SkillState";
import {Order} from "../enumeration/Order";
import {OrderByField} from "../enumeration/OrderByField";
import {EdgeOrderByField} from "../enumeration/EdgeOrderByField";

export class SkillIntrospection extends Array<(_:VariableRegistry) => string> {

    public name = () => { 
        this.push(_ => "name")
    };

    public state = () => { 
        this.push(_ => "state")
    };

    public started = () => { 
        this.push(_ => "started")
    };

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}

