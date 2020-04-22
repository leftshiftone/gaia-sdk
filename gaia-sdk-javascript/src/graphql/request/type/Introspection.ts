
import {SkillIntrospection} from "./SkillIntrospection";

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, Timestamp, Struct, Long} from "../../GaiaClient";
import {RuntimeState} from "./request/enumeration/RuntimeState";
import {SkillState} from "./request/enumeration/SkillState";

export class Introspection extends Array<(_:VariableRegistry) => string> {

    public cpu = () => { 
        this.push(_ => "cpu")
    };

    public gpu = () => { 
        this.push(_ => "gpu")
    };

    public memory = () => { 
        this.push(_ => "memory")
    };

    public state = () => { 
        this.push(_ => "state")
    };

    public started = () => { 
        this.push(_ => "started")
    };

    public skills = (config: (_:SkillIntrospection) => void) => this.push((registry) => {
        const entity = new SkillIntrospection();
        config(entity);
        return "skills { " + entity.render(registry) + " }";
    });

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}

