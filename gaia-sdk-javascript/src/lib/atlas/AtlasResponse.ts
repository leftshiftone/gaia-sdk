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
    
    nlu?:QueryNlu;
}
export interface QueryNlu {
    txt?:string;
    raw?:string;
    cls?:string;
    lex?:QueryLex;
    dep?:QueryDep;
    ner?:QueryNer;
}

export interface QueryLex {
    txt?:string;
    raw?:string;
    cls?:string;
    lex?:QueryLex;
    dep?:QueryDep;
    ner?:QueryNer;
}

export interface QueryDep {
    txt?:string;
    raw?:string;
    cls?:string;
    lex?:QueryLex;
    dep?:QueryDep;
    ner?:QueryNer;
}

export interface QueryNer {
    txt?:string;
    raw?:string;
    cls?:string;
    lex?:QueryLex;
    dep?:QueryDep;
    ner?:QueryNer;
}
