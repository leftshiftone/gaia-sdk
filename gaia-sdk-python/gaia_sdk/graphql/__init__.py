from gaia_sdk.graphql.request.type.Behaviour import Behaviour as BehaviourReq
from gaia_sdk.graphql.request.type.Code import Code as CodeReq
from gaia_sdk.graphql.request.type.CreatedIntentImpulse import CreatedIntentImpulse
from gaia_sdk.graphql.request.type.DeletedIntentImpulse import DeletedIntentImpulse
from gaia_sdk.graphql.request.type.Experience import Experience as ExperienceReq
from gaia_sdk.graphql.request.type.Fulfilment import Fulfilment as FulfilmentReq
from gaia_sdk.graphql.request.type.Intent import Intent as IntentReq
from gaia_sdk.graphql.request.type.Introspection import Introspection as IntrospectionReq
from gaia_sdk.graphql.request.type.Knowledge import Knowledge as KnowledgeReq
from gaia_sdk.graphql.request.type.KnowledgeEdge import KnowledgeEdge as KnowledgeEdgeReq
from gaia_sdk.graphql.request.type.Perception import Perception as PerceptionReq
from gaia_sdk.graphql.request.type.Preservation import Preservation as PreservationReq
from gaia_sdk.graphql.request.type.Prompt import Prompt as PromptReq
from gaia_sdk.graphql.request.type.Query import Query as QueryReq
from gaia_sdk.graphql.request.type.Retrieval import Retrieval as RetrievalReq
from gaia_sdk.graphql.request.type.SkillIntrospection import SkillIntrospection as SkillIntrospectionReq
from gaia_sdk.graphql.request.type.Statement import Statement as StatementReq
from gaia_sdk.graphql.request.type.UpdatedIntentImpulse import UpdatedIntentImpulse
from gaia_sdk.graphql.response.type.PerceivedImpulse import PerceivedImpulse
from gaia_sdk.graphql.response.type.Query import Query as QueryRes
from gaia_sdk.graphql.response.type.Perception import Perception as PerceptionRes
from gaia_sdk.graphql.response.type.CreatedIntentImpulse import CreatedIntentImpulse
from gaia_sdk.graphql.response.type.UpdatedIntentImpulse import UpdatedIntentImpulse
from gaia_sdk.graphql.response.type.DeletedIntentImpulse import DeletedIntentImpulse
from gaia_sdk.graphql.response.type.Preservation import Preservation as PreservationRes
from gaia_sdk.graphql.response.type.SkillIntrospection import SkillIntrospection as SkillIntrospectionRes
from gaia_sdk.graphql.response.type.Introspection import Introspection as IntrospectionRes
from gaia_sdk.graphql.response.type.Behaviour import Behaviour as BehaviourRes
from gaia_sdk.graphql.response.type.Code import Code as CodeRes
from gaia_sdk.graphql.response.type.Fulfilment import Fulfilment as FulfilmentRes
from gaia_sdk.graphql.response.type.Statement import Statement as StatementRes
from gaia_sdk.graphql.response.type.Prompt import Prompt as PromptRes
from gaia_sdk.graphql.response.type.Intent import Intent as IntentRes
from gaia_sdk.graphql.response.type.KnowledgeEdge import KnowledgeEdge as KnowledgeEdgeRes
from gaia_sdk.graphql.response.type.Knowledge import Knowledge as KnowledgeRes
from gaia_sdk.graphql.response.type.Experience import Experience as ExperienceRes
from gaia_sdk.graphql.response.type.Retrieval import Retrieval as RetrievalRes
from gaia_sdk.graphql.request.type.Mutation import Mutation as MutationReq
from gaia_sdk.graphql.response.type.Mutation import Mutation as MutationRes
from gaia_sdk.graphql.request.type.PerceivedImpulse import PerceivedImpulse
from gaia_sdk.graphql.request.input.PerceiveActionImpulse import PerceiveActionImpulse
from gaia_sdk.graphql.request.input.PerceiveDataImpulse import PerceiveDataImpulse
from gaia_sdk.graphql.request.type.Conversational import Conversational as ConversationalReq
from gaia_sdk.graphql.response.type.Conversational import Conversational as ConversationalRes
from gaia_sdk.graphql.request.input.PerceiveDataImpulse import PerceiveDataImpulse
from gaia_sdk.graphql.request.input.PerceiveActionImpulse import PerceiveActionImpulse
from gaia_sdk.graphql.request.input.DeleteIntentImpulse import DeleteIntentImpulse
from gaia_sdk.graphql.request.input.CreateIntentImpulse import CreateIntentImpulse
from gaia_sdk.graphql.request.input.UpdateIntentImpulse import UpdateIntentImpulse

Uuid = dict
