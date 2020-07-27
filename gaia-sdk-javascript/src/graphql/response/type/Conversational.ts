
import {PerceivedImpulse} from "./PerceivedImpulse";
import {PerceiveReceptionImpulse} from "../../request/input/PerceiveReceptionImpulse";
import {PerceiveSuggestionImpulse} from "../../request/input/PerceiveSuggestionImpulse";
import {PerceiveButtonImpulse} from "../../request/input/PerceiveButtonImpulse";
import {PerceiveUtteranceImpulse} from "../../request/input/PerceiveUtteranceImpulse";
import {PerceiveSubmitImpulse} from "../../request/input/PerceiveSubmitImpulse";

import {Uuid, ISO8601, Struct} from "../../GaiaFunctionClient";
import {RuntimeState} from "../../request/enumeration/RuntimeState";
import {SkillState} from "../../request/enumeration/SkillState";

/**
* Type which contains all impulses needed for the maintainence of a conversation
*/
export interface Conversational {
    /**
    * Utterance perception impulse used to send an utterance text to gaia
    */
    perceiveUtterance?:PerceivedImpulse,
    /**
    * Button perception impulse used to send a button action to gaia
    */
    perceiveButton?:PerceivedImpulse,
    /**
    * Submit perception impulse used to send a submit action to gaia
    */
    perceiveSubmit?:PerceivedImpulse,
    /**
    * Reception perception impulse used to send a reception to gaia
    */
    perceiveReception?:PerceivedImpulse,
    /**
    * Suggestion perception impulse used to send a suggestion action to gaia
    */
    perceiveSuggestion?:PerceivedImpulse
}
