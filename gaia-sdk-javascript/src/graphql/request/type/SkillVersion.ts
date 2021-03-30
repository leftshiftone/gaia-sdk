

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../enumeration/RuntimeState";
import {SkillState} from "../enumeration/SkillState";
import {Order} from "../enumeration/Order";
import {OrderByField} from "../enumeration/OrderByField";
import {EdgeOrderByField} from "../enumeration/EdgeOrderByField";
import {EdgeType} from "../enumeration/EdgeType";

/**
 * A skill version is a built version of a skill created by a SkillBuildJob
 */
export class SkillVersion extends Array<(_:VariableRegistry) => string> {
public _typeName = "SkillVersion";
    public skillRef = () => { 
        this.push(_ => "skillRef")
    };

    public version = () => { 
        this.push(_ => "version")
    };

    public created = () => { 
        this.push(_ => "created")
    };

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}

