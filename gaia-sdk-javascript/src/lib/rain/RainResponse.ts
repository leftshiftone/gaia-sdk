export interface RainResponse {}
export interface RainQueryResponse extends RainResponse {
    data?:QueryData;
    nluScore?:number;
    nerScore?:number;
    score?:number;
    logs?:Record<string, Array<string>>
    errors?:Array<string>;
}
export interface QueryData {
    
    insights?:QueryInsights;
}
export interface QueryInsights {
    classify?:QueryClassify;
    gaiaQuery?:Array<Map<string, any>>;
}

export interface QueryClassify {
    qualifier?:string;
    reference?:string;
    score?:number;
}
export interface RainMutationResponse extends RainResponse {
    data?:MutationData;
    logs?:Record<string, Array<string>>
    errors?:Array<string>;
}
export interface MutationData {    
    receptionImpulse?:MutationReceptionImpulse;
    buttonImpulse?:MutationButtonImpulse;
    submitImpulse?:MutationSubmitImpulse;
    suggestionImpulse?:MutationSuggestionImpulse;
    utteranceImpulse?:MutationUtteranceImpulse;
}
export interface MutationReceptionImpulse {
    identityId?:string;
    clientId?:string;
    userId?:string;
    attributes?:Map<string, any>;
}
export interface MutationButtonImpulse {
    identityId?:string;
    clientId?:string;
    userId?:string;
    attributes?:Map<string, any>;
}
export interface MutationSubmitImpulse {
    identityId?:string;
    clientId?:string;
    userId?:string;
    attributes?:Map<string, any>;
}
export interface MutationSuggestionImpulse {
    identityId?:string;
    clientId?:string;
    userId?:string;
    attributes?:Map<string, any>;
}
export interface MutationUtteranceImpulse {
    identityId?:string;
    clientId?:string;
    userId?:string;
    payload?:string;
}
