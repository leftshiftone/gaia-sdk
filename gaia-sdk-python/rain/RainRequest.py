from api.VariableRegistry import VariableRegistry
from typing import Callable
import abc

"""
AUTOGENERATED CLASS. DO NOT MODIFY.
"""
class RainRequest(list):
    @staticmethod
    def query(config:Callable[['RainQueryRequest'], None]):
        request = RainQueryRequest()
        config(request)
        return request

    @staticmethod
    def mutation(config:Callable[['RainMutationRequest'], None]):
        request = RainMutationRequest()
        config(request)
        return request

    @abc.abstractmethod
    def getStatement(self):
        return

class RainQueryRequest(list):
    def __init__(self):
        super().__init__()
        self.preprocessors = []

    def insights(self, identityId:str, config:Callable[['QueryInsights'], None]):
        def callback(registry:VariableRegistry):
            entity = QueryInsights(identityId)
            config(entity)
            return entity.render(registry)
        self.append(callback)

    def skills(self, tenantId:str, config:Callable[['QuerySkills'], None]):
        def callback(registry:VariableRegistry):
            entity = QuerySkills(tenantId)
            config(entity)
            return entity.render(registry)
        self.append(callback)

    def getStatement(self):
        registry = VariableRegistry()
        fields = " ".join(map(lambda e: e(registry), self))
        statement = "query rain(" + ", ".join(registry.getDatatypes()) + "{" + fields + "}"
        return (statement, registry.getVariables())

class QueryInsights(list):
    def __init__(self, identityId:str):
        super().__init__()
        self.identityId = identityId

    def classify(self, text:str, config:Callable[['QueryClassify'], None]):
        def callback(registry:VariableRegistry):
            entity = QueryClassify(text)
            config(entity)
            return entity.render(registry)
        self.append(callback)
    def gaiaQuery(self, statement:str):
        def callback(registry:VariableRegistry):
            name1 = registry.register("statement", statement)
            return "gaiaQuery(statement:$" + name1 + ")"
        self.append(callback)


    def render(self, registry:VariableRegistry):
        name1 = registry.register("identityId", self.identityId)
        return "insights(identityId:$" + name1 + ") { " + " ".join(map(lambda e: e(registry), self)) + " }"


class QueryClassify(list):
    def __init__(self, text:str):
        super().__init__()
        self.text = text

    def qualifier(self):
        self.append(lambda x: "qualifier")

    def reference(self):
        self.append(lambda x: "reference")

    def score(self):
        self.append(lambda x: "score")


    def render(self, registry:VariableRegistry):
        name1 = registry.register("text", self.text)
        return "classify(text:$" + name1 + ") { " + " ".join(map(lambda e: e(registry), self)) + " }"


class QuerySkills(list):
    def __init__(self, tenantId:str):
        super().__init__()
        self.tenantId = tenantId

    def status(self, skillName:str, config:Callable[['QueryStatus'], None]):
        def callback(registry:VariableRegistry):
            entity = QueryStatus(skillName)
            config(entity)
            return entity.render(registry)
        self.append(callback)

    def render(self, registry:VariableRegistry):
        name1 = registry.register("tenantId", self.tenantId)
        return "skills(tenantId:$" + name1 + ") { " + " ".join(map(lambda e: e(registry), self)) + " }"


class QueryStatus(list):
    def __init__(self, skillName:str):
        super().__init__()
        self.skillName = skillName

    def name(self):
        self.append(lambda x: "name")

    def status(self):
        self.append(lambda x: "status")

    def created(self):
        self.append(lambda x: "created")


    def render(self, registry:VariableRegistry):
        name1 = registry.register("skillName", self.skillName)
        return "status(skillName:$" + name1 + ") { " + " ".join(map(lambda e: e(registry), self)) + " }"


class RainMutationRequest(RainRequest):
    def __init__(self):
        super().__init__()
        self.preprocessors = []

    def artifacts(self, tenantId:str, config:Callable[['MutationArtifacts'], None]):
        def callback(registry:VariableRegistry):
            entity = MutationArtifacts(tenantId)
            config(entity)
            return entity.render(registry)
        self.append(callback)
    def handleReception(self, impulse:ReceptionImpulse):
        def callback(registry:VariableRegistry):
            name1 = registry.register("impulse", impulse)
            return "handleReception(impulse:$" + name1 + ")"
        self.append(callback)

    def handleUtterance(self, impulse:UtteranceImpulse):
        def callback(registry:VariableRegistry):
            name1 = registry.register("impulse", impulse)
            return "handleUtterance(impulse:$" + name1 + ")"
        self.append(callback)

    def handleSuggestion(self, impulse:SuggestionImpulse):
        def callback(registry:VariableRegistry):
            name1 = registry.register("impulse", impulse)
            return "handleSuggestion(impulse:$" + name1 + ")"
        self.append(callback)

    def handleButton(self, impulse:ButtonImpulse):
        def callback(registry:VariableRegistry):
            name1 = registry.register("impulse", impulse)
            return "handleButton(impulse:$" + name1 + ")"
        self.append(callback)

    def handleSubmit(self, impulse:SubmitImpulse):
        def callback(registry:VariableRegistry):
            name1 = registry.register("impulse", impulse)
            return "handleSubmit(impulse:$" + name1 + ")"
        self.append(callback)

    def artifacts(self, tenantId:str, config:Callable[['MutationArtifacts'], None]):
        def callback(registry:VariableRegistry):
            entity = MutationArtifacts(tenantId)
            config(entity)
            return entity.render(registry)
        self.append(callback)

    def getStatement(self):
        registry = VariableRegistry()
        fields = " ".join(map(lambda e: e(registry), self))
        statement = "mutation rain(" + ", ".join(registry.getDatatypes()) + "{" + fields + "}"
        return [statement, registry.getVariables()]

class MutationArtifacts(list):
    def __init__(self, tenantId:str):
        super().__init__()
        self.tenantId = tenantId

    def initiateUpload(self, impulse:InitiateUploadImpulse, config:Callable[['MutationInitiateUpload'], None]):
        def callback(registry:VariableRegistry):
            entity = MutationInitiateUpload(impulse)
            config(entity)
            return entity.render(registry)
        self.append(callback)
    def transferChunk(self, impulse:TransferChunkImpulse, config:Callable[['MutationTransferChunk'], None]):
        def callback(registry:VariableRegistry):
            entity = MutationTransferChunk(impulse)
            config(entity)
            return entity.render(registry)
        self.append(callback)
    def completeUpload(self, impulse:CompleteUploadImpulse, artifact:HazeArtifact, config:Callable[['MutationCompleteUpload'], None]):
        def callback(registry:VariableRegistry):
            entity = MutationCompleteUpload(impulse, artifact)
            config(entity)
            return entity.render(registry)
        self.append(callback)
    def abortUpload(self, impulse:AbortUploadImpulse):
        def callback(registry:VariableRegistry):
            name1 = registry.register("impulse", impulse)
            return "abortUpload(impulse:$" + name1 + ")"
        self.append(callback)


    def render(self, registry:VariableRegistry):
        name1 = registry.register("tenantId", self.tenantId)
        return "artifacts(tenantId:$" + name1 + ") { " + " ".join(map(lambda e: e(registry), self)) + " }"


class MutationInitiateUpload(list):
    def __init__(self, impulse:InitiateUploadImpulse):
        super().__init__()
        self.impulse = impulse

    def transportId(self):
        self.append(lambda x: "transportId")

    def key(self):
        self.append(lambda x: "key")


    def render(self, registry:VariableRegistry):
        name1 = registry.register("impulse", self.impulse)
        return "initiateUpload(impulse:$" + name1 + ") { " + " ".join(map(lambda e: e(registry), self)) + " }"


class MutationTransferChunk(list):
    def __init__(self, impulse:TransferChunkImpulse):
        super().__init__()
        self.impulse = impulse

    def transportId(self):
        self.append(lambda x: "transportId")

    def key(self):
        self.append(lambda x: "key")

    def partNumber(self):
        self.append(lambda x: "partNumber")

    def etag(self):
        self.append(lambda x: "etag")


    def render(self, registry:VariableRegistry):
        name1 = registry.register("impulse", self.impulse)
        return "transferChunk(impulse:$" + name1 + ") { " + " ".join(map(lambda e: e(registry), self)) + " }"


class MutationCompleteUpload(list):
    def __init__(self, impulse:CompleteUploadImpulse, artifact:HazeArtifact):
        super().__init__()
        self.impulse = impulse
        self.artifact = artifact

    def location(self):
        self.append(lambda x: "location")

    def key(self):
        self.append(lambda x: "key")

    def etag(self):
        self.append(lambda x: "etag")


    def render(self, registry:VariableRegistry):
        name1 = registry.register("impulse", self.impulse)
        name2 = registry.register("artifact", self.artifact)
        return "completeUpload(impulse:$" + name1 + ", artifact:$" + name2 + ") { " + " ".join(map(lambda e: e(registry), self)) + " }"


class ReceptionImpulse {
    identityId?: str;
    clientId?: str;
    userId?: str;
    attributes?: dict;
}
class ButtonImpulse {
    identityId?: str;
    clientId?: str;
    userId?: str;
    attributes?: dict;
}
class SubmitImpulse {
    identityId?: str;
    clientId?: str;
    userId?: str;
    attributes?: dict;
}
class SuggestionImpulse {
    identityId?: str;
    clientId?: str;
    userId?: str;
    attributes?: dict;
}
class UtteranceImpulse {
    identityId?: str;
    clientId?: str;
    userId?: str;
    payload?: str;
}
class InitiateUploadImpulse {
    fileName?: str;
}
class TransferChunkImpulse {
    key?: str;
    transportId?: str;
    partNumber?: int;
    partSize?: int;
    encodedBytes?: str;
}
class CompleteUploadImpulse {
    key?: str;
    transportId?: str;
    etags?: ['dict'];
}
class AbortUploadImpulse {
    key?: str;
    transportId?: str;
}
class HazeArtifact {
    qualifier?: str;
    appendent?: str;
    labelList?: ['str'];
    type?: str;
}
