

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../enumeration/RuntimeState";
import {SkillState} from "../enumeration/SkillState";

/**
 * Represents information used for paginiation
 */
export class PageInfo extends Array<(_:VariableRegistry) => string> {

    public startCursor = () => { 
        this.push(_ => "startCursor")
    };

    public endCursor = () => { 
        this.push(_ => "endCursor")
    };

    public hasNextPage = () => { 
        this.push(_ => "hasNextPage")
    };

    public hasPreviousPage = () => { 
        this.push(_ => "hasPreviousPage")
    };

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}

