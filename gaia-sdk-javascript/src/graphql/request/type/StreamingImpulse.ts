

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../enumeration/RuntimeState";
import {SkillState} from "../enumeration/SkillState";
import {Order} from "../enumeration/Order";
import {OrderByField} from "../enumeration/OrderByField";
import {EdgeOrderByField} from "../enumeration/EdgeOrderByField";

export class StreamingImpulse extends Array<(_:VariableRegistry) => string> {

    public id = () => { 
        this.push(_ => "id")
    };

    public preSignedUrl = () => { 
        this.push(_ => "preSignedUrl")
    };

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}

