

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, Timestamp, Struct, Long} from "../../GaiaClient";

export default class SkillIntrospection extends Array<(_:VariableRegistry) => string> {

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
