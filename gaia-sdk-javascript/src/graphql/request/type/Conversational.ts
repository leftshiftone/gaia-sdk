
import {PerceivedImpulse} from "./PerceivedImpulse";
import {PerceiveReceptionImpulse} from "../input/PerceiveReceptionImpulse";
import {PerceiveSuggestionImpulse} from "../input/PerceiveSuggestionImpulse";
import {PerceiveButtonImpulse} from "../input/PerceiveButtonImpulse";
import {PerceiveUtteranceImpulse} from "../input/PerceiveUtteranceImpulse";
import {PerceiveSubmitImpulse} from "../input/PerceiveSubmitImpulse";

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../enumeration/RuntimeState";
import {SkillState} from "../enumeration/SkillState";
import {Order} from "../enumeration/Order";
import {OrderByField} from "../enumeration/OrderByField";
import {EdgeOrderByField} from "../enumeration/EdgeOrderByField";

/**
 * Type which contains all impulses needed for the maintainence of a conversation
 */
export class Conversational extends Array<(_:VariableRegistry) => string> {
public _typeName = "Conversational";
    /**
     * Utterance perception impulse used to send an utterance text to gaia
     */
    public perceiveUtterance = (impulse: PerceiveUtteranceImpulse|undefined, config: (_:PerceivedImpulse) => void) => this.push((registry) => {
        const name1 = registry.register("impulse", impulse);
        const entity = new PerceivedImpulse();
        config(entity);
        return `perceiveUtterance(impulse:${name1}){` + entity.render(registry) + "}"
    });

    /**
     * Button perception impulse used to send a button action to gaia
     */
    public perceiveButton = (impulse: PerceiveButtonImpulse|undefined, config: (_:PerceivedImpulse) => void) => this.push((registry) => {
        const name1 = registry.register("impulse", impulse);
        const entity = new PerceivedImpulse();
        config(entity);
        return `perceiveButton(impulse:${name1}){` + entity.render(registry) + "}"
    });

    /**
     * Submit perception impulse used to send a submit action to gaia
     */
    public perceiveSubmit = (impulse: PerceiveSubmitImpulse|undefined, config: (_:PerceivedImpulse) => void) => this.push((registry) => {
        const name1 = registry.register("impulse", impulse);
        const entity = new PerceivedImpulse();
        config(entity);
        return `perceiveSubmit(impulse:${name1}){` + entity.render(registry) + "}"
    });

    /**
     * Reception perception impulse used to send a reception to gaia
     */
    public perceiveReception = (impulse: PerceiveReceptionImpulse|undefined, config: (_:PerceivedImpulse) => void) => this.push((registry) => {
        const name1 = registry.register("impulse", impulse);
        const entity = new PerceivedImpulse();
        config(entity);
        return `perceiveReception(impulse:${name1}){` + entity.render(registry) + "}"
    });

    /**
     * Suggestion perception impulse used to send a suggestion action to gaia
     */
    public perceiveSuggestion = (impulse: PerceiveSuggestionImpulse|undefined, config: (_:PerceivedImpulse) => void) => this.push((registry) => {
        const name1 = registry.register("impulse", impulse);
        const entity = new PerceivedImpulse();
        config(entity);
        return `perceiveSuggestion(impulse:${name1}){` + entity.render(registry) + "}"
    });

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}

