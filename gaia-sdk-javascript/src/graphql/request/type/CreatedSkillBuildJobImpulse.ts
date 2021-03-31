
import {SkillBuildJob} from "./SkillBuildJob";

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {Order} from "../enumeration/Order";
import {OrderByField} from "../enumeration/OrderByField";
import {EdgeOrderByField} from "../enumeration/EdgeOrderByField";
import {EdgeType} from "../enumeration/EdgeType";

export class CreatedSkillBuildJobImpulse extends Array<(_:VariableRegistry) => string> {
public _typeName = "CreatedSkillBuildJobImpulse";
    public id = () => { 
        this.push(_ => "id")
    };

    public data = (config: (_:SkillBuildJob) => void) => this.push((registry) => {
        const entity = new SkillBuildJob();
        config(entity);
        return "data { " + entity.render(registry) + " }";
    });

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}

