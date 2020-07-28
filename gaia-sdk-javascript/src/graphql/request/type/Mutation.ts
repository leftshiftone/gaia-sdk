
import {Evaluation} from "./Evaluation";
import {Preservation} from "./Preservation";
import {Practice} from "./Practice";
import {Perception} from "./Perception";
import {Activation} from "./Activation";

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../enumeration/RuntimeState";
import {SkillState} from "../enumeration/SkillState";

/**
 * The top level mutation type
 */
export class Mutation extends Array<(_:VariableRegistry) => string> {

    /**
     * Sensor impulses for all perception based functions.
     *     Perceptions are used to invoke events within gaia.
     */
    public perceive = (config: (_:Perception) => void) => this.push((registry) => {
        const entity = new Perception();
        config(entity);
        return "perceive { " + entity.render(registry) + " }";
    });

    /**
     * Sensor impulses for all practice based functions.
     *     Practices are used to transfer skills to gaia and to train them.
     */
    public practice = (config: (_:Practice) => void) => this.push((registry) => {
        const entity = new Practice();
        config(entity);
        return "practice { " + entity.render(registry) + " }";
    });

    /**
     * Sensor impulses for all preservation based functions.
     *     Preservations are used to invoke create/update/delete functions.
     */
    public preserve = (config: (_:Preservation) => void) => this.push((registry) => {
        const entity = new Preservation();
        config(entity);
        return "preserve { " + entity.render(registry) + " }";
    });

    /**
     * Container element for all evaluate sensor fields.
     *     Evaluations are used to invoke skills and to return the result.
     */
    public evaluate = (config: (_:Evaluation) => void) => this.push((registry) => {
        const entity = new Evaluation();
        config(entity);
        return "evaluate { " + entity.render(registry) + " }";
    });

    /**
     * Container element for all evaluate sensor fields.
     *     The activation can be used to unseal the vault or to grant access to an user.
     */
    public activate = (config: (_:Activation) => void) => this.push((registry) => {
        const entity = new Activation();
        config(entity);
        return "activate { " + entity.render(registry) + " }";
    });

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}

