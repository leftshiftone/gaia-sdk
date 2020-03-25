export interface AtlasResponse {}
export interface AtlasQueryResponse extends AtlasResponse {
    data?:QueryData;
    nluScore?:number;
    nerScore?:number;
    score?:number;
    logs?:Record<string, Array<string>>
    errors?:Array<string>;
}
export interface QueryData {
    
    nlu?:Array<QueryNlu>;
}
export interface QueryNlu {
    txt?:string;
    raw?:string;
    cls?:string[];
    lex?:Array<QueryLex>;
    dep?:Array<QueryDep>;
    ner?:Array<QueryNer>;
}

export interface QueryLex {
    lemma?:string;
    phonetic?:number;
    pos?:string;
    base?:string;
    flexions?:QueryLex[];
    synonyms?:QueryLex[];
    collocations?:QueryLex[];
    hyperonyms?:QueryLex[];
    meronyms?:QueryLex[];
    parts?:QueryLex[];
    abbreviations?:QueryLex[];
    causations?:QueryLex[];
    labels?:string[];
}

export interface QueryDep {
    sourcePos?:string;
    targetPos?:string;
    sourceTag?:string;
    targetTag?:string;
    sourceIndex?:number;
    targetIndex?:number;
    sourceBase?:string;
    targetBase?:string;
    main?:boolean;
    modifier?:boolean;
    parenthesized?:boolean;
    source?:string;
    target?:string;
    relation?:string;
    rawRelation?:string;
}

export interface QueryDatetime {
    date?:Date;
    date1?:Date;
    date2?:Date;
    negation?:boolean;
    fuzzy?:boolean;
    indices?:number[];
}
export interface QueryDuration {
    amount?:number;
    amountMin?:number;
    amountMax?:number;
    unit?:string;
    negation?:boolean;
    indices?:number[];
}
export interface QueryLocation {
    name?:string;
    type?:string;
    negation?:boolean;
    indices?:number[];
}
export interface QueryOrganization {
    name?:string;
    type?:string;
    negation?:boolean;
    indices?:number[];
}
export interface QueryAccommodation {
    name?:string;
    type?:string;
    amount?:number;
    negation?:boolean;
    indices?:number[];
}
export interface QueryPerson {
    name?:string;
    isAdult?:boolean;
    age?:number;
    negation?:boolean;
    indices?:number[];
}
export interface QueryPrice {
    amount?:number;
    amountMin?:number;
    amountMax?:number;
    currency?:string;
    priceCategory?:string;
    sensibility?:string;
    scope?:string;
    negation?:boolean;
    indices?:number[];
}
export interface QueryAge {
    age?:number;
    negation?:boolean;
    indices?:number[];
}
export interface QueryBool {
    value?:boolean;
    negation?:boolean;
    indices?:number[];
}
export interface QueryEmail {
    lemma?:string;
    negation?:boolean;
    indices?:number[];
}
export interface QueryUrl {
    lemma?:string;
    negation?:boolean;
    indices?:number[];
}
export interface QueryCustom {
    data?:Map<string, any>;
    negation?:boolean;
    indices?:number[];
}
export interface QueryNer {
    datetime?:Array<QueryDatetime>;
    duration?:Array<QueryDuration>;
    location?:Array<QueryLocation>;
    organization?:Array<QueryOrganization>;
    accommodation?:Array<QueryAccommodation>;
    person?:Array<QueryPerson>;
    price?:Array<QueryPrice>;
    age?:Array<QueryAge>;
    bool?:Array<QueryBool>;
    email?:Array<QueryEmail>;
    url?:Array<QueryUrl>;
    custom?:Array<QueryCustom>;
}
