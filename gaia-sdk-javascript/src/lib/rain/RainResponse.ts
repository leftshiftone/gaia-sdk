interface RainResponse {}
export interface RainQueryResponse extends RainResponse {
    data?:QueryData;
    nluScore?:number;
    nerScore?:number;
    score?:number;
    logs?:Record<string, Array<string>>
    errors?:Array<string>;
}
interface QueryData {
    
    insights?:QueryInsights;
}
interface QueryInsights {
    classify?:QueryClassify;
    gaiaQuery?:Array<Map<string, any>>;
}

interface QueryClassify {
    classify?:QueryClassify;
    gaiaQuery?:Array<Map<string, any>>;
}
export interface RainMutationResponse extends RainResponse {
    data?:MutationData;
    logs?:Record<string, Array<string>>
    errors?:Array<string>;
}
interface MutationData {    
    receptionImpulse?:MutationReceptionImpulse;
    buttonImpulse?:MutationButtonImpulse;
    submitImpulse?:MutationSubmitImpulse;
    suggestionImpulse?:MutationSuggestionImpulse;
    utteranceImpulse?:MutationUtteranceImpulse;
}
interface MutationReceptionImpulse {
    identityId?:string;
    clientId?:string;
    userId?:string;
    attributes?:Map<string, any>;
}
interface MutationButtonImpulse {
    identityId?:string;
    clientId?:string;
    userId?:string;
    attributes?:Map<string, any>;
}
interface MutationSubmitImpulse {
    identityId?:string;
    clientId?:string;
    userId?:string;
    attributes?:Map<string, any>;
}
interface MutationSuggestionImpulse {
    identityId?:string;
    clientId?:string;
    userId?:string;
    attributes?:Map<string, any>;
}
interface MutationUtteranceImpulse {
    identityId?:string;
    clientId?:string;
    userId?:string;
    payload?:string;
}
