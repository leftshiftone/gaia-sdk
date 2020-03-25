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

class QuerySkills:
    def status(self) -> 'QueryStatus':
        return self.status


class QueryStatus:
    def name(self) -> str:
        return self.name
    def status(self) -> str:
        return self.status
    def created(self) -> str:
        return self.created


class QueryData:    
    def insights(self) -> 'QueryInsights':
        return self.insights
    def skills(self) -> 'QuerySkills':
        return self.skills

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
    def initiateUploadImpulse(self) -> 'MutationInitiateUploadImpulse':
        return self.initiateUploadImpulse
    def transferChunkImpulse(self) -> 'MutationTransferChunkImpulse':
        return self.transferChunkImpulse
    def completeUploadImpulse(self) -> 'MutationCompleteUploadImpulse':
        return self.completeUploadImpulse
    def abortUploadImpulse(self) -> 'MutationAbortUploadImpulse':
        return self.abortUploadImpulse
    def hazeArtifact(self) -> 'MutationHazeArtifact':
        return self.hazeArtifact
    def artifacts(self) -> 'MutationArtifacts':
        return self.artifacts

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

class MutationInitiateUploadImpulse:
    def fileName(self) -> str:
        return self.fileName

class MutationTransferChunkImpulse:
    def key(self) -> str:
        return self.key
    def transportId(self) -> str:
        return self.transportId
    def partNumber(self) -> int:
        return self.partNumber
    def partSize(self) -> Mutation${str.substring(0, 1).toUpperCase()}${str.substring(1)}:
        return self.partSize
    def encodedBytes(self) -> str:
        return self.encodedBytes

class MutationCompleteUploadImpulse:
    def key(self) -> str:
        return self.key
    def transportId(self) -> str:
        return self.transportId
    def etags(self) -> ['dict']:
        return self.etags

class MutationAbortUploadImpulse:
    def key(self) -> str:
        return self.key
    def transportId(self) -> str:
        return self.transportId

class MutationHazeArtifact:
    def qualifier(self) -> str:
        return self.qualifier
    def appendent(self) -> str:
        return self.appendent
    def labelList(self) -> ['str']:
        return self.labelList
    def type(self) -> str:
        return self.type

class MutationArtifacts:
    def initiateUpload(self) -> 'MutationInitiateUpload':
        return self.initiateUpload
    def transferChunk(self) -> 'MutationTransferChunk':
        return self.transferChunk
    def completeUpload(self) -> 'MutationCompleteUpload':
        return self.completeUpload
    def abortUpload(self) -> bool:
        return self.abortUpload


class MutationInitiateUpload:
    def transportId(self) -> str:
        return self.transportId
    def key(self) -> str:
        return self.key


class MutationTransferChunk:
    def transportId(self) -> str:
        return self.transportId
    def key(self) -> str:
        return self.key
    def partNumber(self) -> int:
        return self.partNumber
    def etag(self) -> str:
        return self.etag


class MutationCompleteUpload:
    def location(self) -> str:
        return self.location
    def key(self) -> str:
        return self.key
    def etag(self) -> str:
        return self.etag

