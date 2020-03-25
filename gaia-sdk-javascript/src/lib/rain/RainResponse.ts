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
    skills?:QuerySkills;
}
export interface QueryInsights {
    classify?:QueryClassify;
    gaiaQuery?:Map<string, any>[];
}

export interface QueryClassify {
    qualifier?:string;
    reference?:string;
    score?:number;
}
export interface QuerySkills {
    status?:QueryStatus;
}

export interface QueryStatus {
    name?:string;
    status?:string;
    created?:string;
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
    initiateUploadImpulse?:MutationInitiateUploadImpulse;
    transferChunkImpulse?:MutationTransferChunkImpulse;
    completeUploadImpulse?:MutationCompleteUploadImpulse;
    abortUploadImpulse?:MutationAbortUploadImpulse;
    hazeArtifact?:MutationHazeArtifact;
    artifacts?:MutationArtifacts;
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
export interface MutationInitiateUploadImpulse {
    fileName?:string;
}
export interface MutationTransferChunkImpulse {
    key?:string;
    transportId?:string;
    partNumber?:number;
    partSize?:number;
    encodedBytes?:string;
}
export interface MutationCompleteUploadImpulse {
    key?:string;
    transportId?:string;
    etags?:Map<string, any>[];
}
export interface MutationAbortUploadImpulse {
    key?:string;
    transportId?:string;
}
export interface MutationHazeArtifact {
    qualifier?:string;
    appendent?:string;
    labelList?:string[];
    type?:string;
}
export interface MutationArtifacts {
    initiateUpload?:MutationInitiateUpload;
    transferChunk?:MutationTransferChunk;
    completeUpload?:MutationCompleteUpload;
    abortUpload?:boolean;
}

export interface MutationInitiateUpload {
    transportId?:string;
    key?:string;
}

export interface MutationTransferChunk {
    transportId?:string;
    key?:string;
    partNumber?:number;
    etag?:string;
}

export interface MutationCompleteUpload {
    location?:string;
    key?:string;
    etag?:string;
}
