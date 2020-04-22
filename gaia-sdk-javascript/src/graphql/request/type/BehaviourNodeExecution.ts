

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, Timestamp, Struct, Long} from "../../GaiaClient";
import {RuntimeState} from "./request/enumeration/RuntimeState";
import {SkillState} from "./request/enumeration/SkillState";

export class BehaviourNodeExecution extends Array<(_:VariableRegistry) => string> {

    public processInstanceId = () => { 
        this.push(_ => "processInstanceId")
    };

    public nodeInstanceId = () => { 
        this.push(_ => "nodeInstanceId")
    };

    public state = () => { 
        this.push(_ => "state")
    };

    public executionGroupId = () => { 
        this.push(_ => "executionGroupId")
    };

    public nodeId = () => { 
        this.push(_ => "nodeId")
    };

    public processId = () => { 
        this.push(_ => "processId")
    };

    public type = () => { 
        this.push(_ => "type")
    };

    public transitions = () => { 
        this.push(_ => "transitions")
    };

    public timestamp = () => { 
        this.push(_ => "timestamp")
    };

    public parentProcessId = () => { 
        this.push(_ => "parentProcessId")
    };

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}

