class RainResponse:
    None
class QueryInsights:
    def classify(self) -> 'QueryClassify':
        return self.classify
    def gaiaQuery(self) -> ['dict']:
        return self.gaiaQuery


class QueryClassify:
    def qualifier(self) -> str:
        return self.qualifier
    def reference(self) -> str:
        return self.reference
    def score(self) -> float:
        return self.score


class QueryData:    
    def insights(self) -> 'QueryInsights':
        return self.insights

class RainQueryResponse(RainResponse):
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

class RainMutationResponse extends RainResponse:
    data?:MutationData;
    logs?:Record<string, Array<string>>
    errors?:Array<string>;

class MutationData    
    def receptionImpulse(self) -> 'MutationReceptionImpulse':
        return self.receptionImpulse
    def buttonImpulse(self) -> 'MutationButtonImpulse':
        return self.buttonImpulse
    def submitImpulse(self) -> 'MutationSubmitImpulse':
        return self.submitImpulse
    def suggestionImpulse(self) -> 'MutationSuggestionImpulse':
        return self.suggestionImpulse
    def utteranceImpulse(self) -> 'MutationUtteranceImpulse':
        return self.utteranceImpulse

class MutationReceptionImpulse:
    def identityId(self) -> str:
        return self.identityId
    def clientId(self) -> str:
        return self.clientId
    def userId(self) -> str:
        return self.userId
    def attributes(self) -> dict:
        return self.attributes

class MutationButtonImpulse:
    def identityId(self) -> str:
        return self.identityId
    def clientId(self) -> str:
        return self.clientId
    def userId(self) -> str:
        return self.userId
    def attributes(self) -> dict:
        return self.attributes

class MutationSubmitImpulse:
    def identityId(self) -> str:
        return self.identityId
    def clientId(self) -> str:
        return self.clientId
    def userId(self) -> str:
        return self.userId
    def attributes(self) -> dict:
        return self.attributes

class MutationSuggestionImpulse:
    def identityId(self) -> str:
        return self.identityId
    def clientId(self) -> str:
        return self.clientId
    def userId(self) -> str:
        return self.userId
    def attributes(self) -> dict:
        return self.attributes

class MutationUtteranceImpulse:
    def identityId(self) -> str:
        return self.identityId
    def clientId(self) -> str:
        return self.clientId
    def userId(self) -> str:
        return self.userId
    def payload(self) -> str:
        return self.payload

