
import {Fulfilment} from "./Fulfilment";

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../enumeration/RuntimeState";
import {SkillState} from "../enumeration/SkillState";

/**
 * Impulse which indicates the resulf of a create fulfilment impulse
 */
export class CreatedFulfilmentImpulse extends Array<(_:VariableRegistry) => string> {

    public id = () => { 
        this.push(_ => "id")
    };

    /**
     * the fulfilment instance
     */
    public fulfilment = (config: (_:Fulfilment) => void) => this.push((registry) => {
        const entity = new Fulfilment();
        config(entity);
        return "fulfilment { " + entity.render(registry) + " }";
    });

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}

