interface AtlasResponse {}
export interface AtlasQueryResponse extends AtlasResponse {
    data?:QueryData;
    nluScore?:number;
    nerScore?:number;
    score?:number;
    logs?:Record<string, Array<string>>
    errors?:Array<string>;
}
interface QueryData {
    
    nlu?:QueryNlu;
}
interface QueryNlu {
    txt?:string;
    raw?:string;
    cls?:string;
    lex?:QueryLex;
    dep?:QueryDep;
    ner?:QueryNer;
}

interface QueryLex {
    txt?:string;
    raw?:string;
    cls?:string;
    lex?:QueryLex;
    dep?:QueryDep;
    ner?:QueryNer;
}

interface QueryDep {
    txt?:string;
    raw?:string;
    cls?:string;
    lex?:QueryLex;
    dep?:QueryDep;
    ner?:QueryNer;
}

interface QueryNer {
    txt?:string;
    raw?:string;
    cls?:string;
    lex?:QueryLex;
    dep?:QueryDep;
    ner?:QueryNer;
}
