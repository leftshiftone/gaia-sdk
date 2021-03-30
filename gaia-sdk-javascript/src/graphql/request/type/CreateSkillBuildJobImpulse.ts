

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../enumeration/RuntimeState";
import {SkillState} from "../enumeration/SkillState";
import {Order} from "../enumeration/Order";
import {OrderByField} from "../enumeration/OrderByField";
import {EdgeOrderByField} from "../enumeration/EdgeOrderByField";
import {EdgeType} from "../enumeration/EdgeType";

export class CreateSkillBuildJobImpulse extends Array<(_:VariableRegistry) => string> {
public _typeName = "CreateSkillBuildJobImpulse";
    /**
     * The unique identifier of this specific impulse
     */
    public id = () => { 
        this.push(_ => "id")
    };

    /**
     * The reference of the skill being built
     */
    public skillRef = () => { 
        this.push(_ => "skillRef")
    };

    public tag = () => { 
        this.push(_ => "tag")
    };

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}

