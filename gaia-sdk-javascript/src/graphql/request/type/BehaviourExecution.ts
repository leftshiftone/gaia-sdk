

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../enumeration/RuntimeState";
import {SkillState} from "../enumeration/SkillState";

/**
 * Represents behaviour execution information
 */
export class BehaviourExecution extends Array<(_:VariableRegistry) => string> {

    public processInstanceId = () => { 
        this.push(_ => "processInstanceId")
    };

    public state = () => { 
        this.push(_ => "state")
    };

    public timestamp = () => { 
        this.push(_ => "timestamp")
    };

    public duration = () => { 
        this.push(_ => "duration")
    };

    public startEventType = () => { 
        this.push(_ => "startEventType")
    };

    public startEventId = () => { 
        this.push(_ => "startEventId")
    };

    public initAttributes = () => { 
        this.push(_ => "initAttributes")
    };

    public processId = () => { 
        this.push(_ => "processId")
    };

    public parentProcessId = () => { 
        this.push(_ => "parentProcessId")
    };

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}

