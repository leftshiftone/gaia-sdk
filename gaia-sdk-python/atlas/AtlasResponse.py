class AtlasResponse:
    None
class QueryNlu:
    def txt(self) -> str:
        return self.txt
    def raw(self) -> str:
        return self.raw
    def cls(self) -> ['str']:
        return self.cls
    def lex(self) -> ['QueryLex']:
        return self.lex
    def dep(self) -> ['QueryDep']:
        return self.dep
    def ner(self) -> ['QueryNer']:
        return self.ner


class QueryLex:
    def lemma(self) -> str:
        return self.lemma
    def phonetic(self) -> float:
        return self.phonetic
    def pos(self) -> str:
        return self.pos
    def base(self) -> str:
        return self.base
    def flexions(self) -> ['QueryLex']:
        return self.flexions
    def synonyms(self) -> ['QueryLex']:
        return self.synonyms
    def collocations(self) -> ['QueryLex']:
        return self.collocations
    def hyperonyms(self) -> ['QueryLex']:
        return self.hyperonyms
    def meronyms(self) -> ['QueryLex']:
        return self.meronyms
    def parts(self) -> ['QueryLex']:
        return self.parts
    def abbreviations(self) -> ['QueryLex']:
        return self.abbreviations
    def causations(self) -> ['QueryLex']:
        return self.causations
    def labels(self) -> ['str']:
        return self.labels


class QueryDep:
    def sourcePos(self) -> str:
        return self.sourcePos
    def targetPos(self) -> str:
        return self.targetPos
    def sourceTag(self) -> str:
        return self.sourceTag
    def targetTag(self) -> str:
        return self.targetTag
    def sourceIndex(self) -> int:
        return self.sourceIndex
    def targetIndex(self) -> int:
        return self.targetIndex
    def sourceBase(self) -> str:
        return self.sourceBase
    def targetBase(self) -> str:
        return self.targetBase
    def main(self) -> bool:
        return self.main
    def modifier(self) -> bool:
        return self.modifier
    def parenthesized(self) -> bool:
        return self.parenthesized
    def source(self) -> str:
        return self.source
    def target(self) -> str:
        return self.target
    def relation(self) -> str:
        return self.relation
    def rawRelation(self) -> str:
        return self.rawRelation


class QueryDatetime:
    def date(self) -> datetime:
        return self.date
    def date1(self) -> datetime:
        return self.date1
    def date2(self) -> datetime:
        return self.date2
    def negation(self) -> bool:
        return self.negation
    def fuzzy(self) -> bool:
        return self.fuzzy
    def indices(self) -> ['int']:
        return self.indices

class QueryDuration:
    def amount(self) -> int:
        return self.amount
    def amountMin(self) -> int:
        return self.amountMin
    def amountMax(self) -> int:
        return self.amountMax
    def unit(self) -> str:
        return self.unit
    def negation(self) -> bool:
        return self.negation
    def indices(self) -> ['int']:
        return self.indices

class QueryLocation:
    def name(self) -> str:
        return self.name
    def type(self) -> str:
        return self.type
    def negation(self) -> bool:
        return self.negation
    def indices(self) -> ['int']:
        return self.indices

class QueryOrganization:
    def name(self) -> str:
        return self.name
    def type(self) -> str:
        return self.type
    def negation(self) -> bool:
        return self.negation
    def indices(self) -> ['int']:
        return self.indices

class QueryAccommodation:
    def name(self) -> str:
        return self.name
    def type(self) -> str:
        return self.type
    def amount(self) -> int:
        return self.amount
    def negation(self) -> bool:
        return self.negation
    def indices(self) -> ['int']:
        return self.indices

class QueryPerson:
    def name(self) -> str:
        return self.name
    def isAdult(self) -> bool:
        return self.isAdult
    def age(self) -> int:
        return self.age
    def negation(self) -> bool:
        return self.negation
    def indices(self) -> ['int']:
        return self.indices

class QueryPrice:
    def amount(self) -> float:
        return self.amount
    def amountMin(self) -> float:
        return self.amountMin
    def amountMax(self) -> float:
        return self.amountMax
    def currency(self) -> str:
        return self.currency
    def priceCategory(self) -> str:
        return self.priceCategory
    def sensibility(self) -> str:
        return self.sensibility
    def scope(self) -> str:
        return self.scope
    def negation(self) -> bool:
        return self.negation
    def indices(self) -> ['int']:
        return self.indices

class QueryAge:
    def age(self) -> int:
        return self.age
    def negation(self) -> bool:
        return self.negation
    def indices(self) -> ['int']:
        return self.indices

class QueryCustom:
    def data(self) -> dict:
        return self.data
    def negation(self) -> bool:
        return self.negation
    def indices(self) -> ['int']:
        return self.indices

class QueryNer:
    def datetime(self) -> ['QueryDatetime']:
        return self.datetime
    def duration(self) -> ['QueryDuration']:
        return self.duration
    def location(self) -> ['QueryLocation']:
        return self.location
    def organization(self) -> ['QueryOrganization']:
        return self.organization
    def accommodation(self) -> ['QueryAccommodation']:
        return self.accommodation
    def person(self) -> ['QueryPerson']:
        return self.person
    def price(self) -> ['QueryPrice']:
        return self.price
    def age(self) -> ['QueryAge']:
        return self.age
    def bool(self) -> ['bool']:
        return self.bool
    def email(self) -> ['str']:
        return self.email
    def url(self) -> ['str']:
        return self.url
    def custom(self) -> ['QueryCustom']:
        return self.custom


class QueryData:    
    def nlu(self) -> ['QueryNlu']:
        return self.nlu

class AtlasQueryResponse(AtlasResponse):
    def data(self) -> QueryData:
        return self.data
    def nluScore(self) -> float:
        return self.nluScore
    def nerScore(self) -> float:
        return self.nerScore
    def score(self) -> float:
        return self.score
    def logs(self) -> dict:
        return self.logs
    def errors(self) -> list:
        return self.errors

