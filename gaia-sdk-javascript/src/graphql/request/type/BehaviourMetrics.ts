
import {BehaviourStatesPerDay} from "./BehaviourStatesPerDay";

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../enumeration/RuntimeState";
import {SkillState} from "../enumeration/SkillState";
import {Order} from "../enumeration/Order";
import {OrderByField} from "../enumeration/OrderByField";
import {EdgeOrderByField} from "../enumeration/EdgeOrderByField";
import {EdgeType} from "../enumeration/EdgeType";

export class BehaviourMetrics extends Array<(_:VariableRegistry) => string> {
public _typeName = "BehaviourMetrics";
    public identityId = () => { 
        this.push(_ => "identityId")
    };

    public behaviourId = () => { 
        this.push(_ => "behaviourId")
    };

    public statesPerDay = (config: (_:BehaviourStatesPerDay) => void) => this.push((registry) => {
        const entity = new BehaviourStatesPerDay();
        config(entity);
        return "statesPerDay { " + entity.render(registry) + " }";
    });

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}

