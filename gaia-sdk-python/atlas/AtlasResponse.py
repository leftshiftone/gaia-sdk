class AtlasResponse:
    None
class QueryNlu:
    def txt(self) -> str:
        return self.txt
    def raw(self) -> str:
        return self.raw
    def cls(self) -> str:
        return self.cls
    def lex(self) -> 'QueryLex':
        return self.lex
    def dep(self) -> 'QueryDep':
        return self.dep
    def ner(self) -> 'QueryNer':
        return self.ner


class QueryLex:
    def txt(self) -> str:
        return self.txt
    def raw(self) -> str:
        return self.raw
    def cls(self) -> str:
        return self.cls
    def lex(self) -> 'QueryLex':
        return self.lex
    def dep(self) -> 'QueryDep':
        return self.dep
    def ner(self) -> 'QueryNer':
        return self.ner


class QueryDep:
    def txt(self) -> str:
        return self.txt
    def raw(self) -> str:
        return self.raw
    def cls(self) -> str:
        return self.cls
    def lex(self) -> 'QueryLex':
        return self.lex
    def dep(self) -> 'QueryDep':
        return self.dep
    def ner(self) -> 'QueryNer':
        return self.ner


class QueryNer:
    def txt(self) -> str:
        return self.txt
    def raw(self) -> str:
        return self.raw
    def cls(self) -> str:
        return self.cls
    def lex(self) -> 'QueryLex':
        return self.lex
    def dep(self) -> 'QueryDep':
        return self.dep
    def ner(self) -> 'QueryNer':
        return self.ner


class QueryData:    
    def nlu(self) -> 'QueryNlu':
        return self.nlu

class AtlasQueryResponse(AtlasResponse):
    def data(self) -> QueryData:
        return self.data
    def nluScore(self) -> float:
        return self.nluScore
    def nerScore(self) -> float:
        return self.newScore
    def score(self) -> float:
        return self.score
    def logs(self) -> dict:
        return self.logs
    def errors(self) -> list:
        return self.errors

