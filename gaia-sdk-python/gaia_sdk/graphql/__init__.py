from gaia_sdk.graphql.request.type.Behaviour import Behaviour as BehaviourReq
from gaia_sdk.graphql.request.type.Code import Code as CodeReq
from gaia_sdk.graphql.request.input.CreateIdentityImpulse import CreateIdentityImpulse
from gaia_sdk.graphql.request.input.UpdateIdentityImpulse import UpdateIdentityImpulse
from gaia_sdk.graphql.request.input.DeleteIdentityImpulse import DeleteIdentityImpulse
from gaia_sdk.graphql.request.input.CreateIntentImpulse import CreateIntentImpulse
from gaia_sdk.graphql.request.input.UpdateIntentImpulse import UpdateIntentImpulse
from gaia_sdk.graphql.request.input.DeleteIntentImpulse import DeleteIntentImpulse
from gaia_sdk.graphql.request.input.CreatePromptImpulse import CreatePromptImpulse
from gaia_sdk.graphql.request.input.UpdatePromptImpulse import UpdatePromptImpulse
from gaia_sdk.graphql.request.input.DeletePromptImpulse import DeletePromptImpulse
from gaia_sdk.graphql.request.input.CreateStatementImpulse import CreateStatementImpulse
from gaia_sdk.graphql.request.input.UpdateStatementImpulse import UpdateStatementImpulse
from gaia_sdk.graphql.request.input.DeleteStatementImpulse import DeleteStatementImpulse
from gaia_sdk.graphql.request.input.CreateFulfilmentImpulse import CreateFulfilmentImpulse
from gaia_sdk.graphql.request.input.UpdateFulfilmentImpulse import UpdateFulfilmentImpulse
from gaia_sdk.graphql.request.input.DeleteFulfilmentImpulse import DeleteFulfilmentImpulse
from gaia_sdk.graphql.request.input.CreateBehaviourImpulse import CreateBehaviourImpulse
from gaia_sdk.graphql.request.input.UpdateBehaviourImpulse import UpdateBehaviourImpulse
from gaia_sdk.graphql.request.input.DeleteBehaviourImpulse import DeleteBehaviourImpulse
from gaia_sdk.graphql.request.input.CreateCodeImpulse import CreateCodeImpulse
from gaia_sdk.graphql.request.input.UpdateCodeImpulse import UpdateCodeImpulse
from gaia_sdk.graphql.request.input.DeleteCodeImpulse import DeleteCodeImpulse
from gaia_sdk.graphql.request.input.CreateEdgeImpulse import CreateEdgeImpulse
from gaia_sdk.graphql.request.input.DeleteEdgeImpulse import DeleteEdgeImpulse
from gaia_sdk.graphql.request.type.Experience import Experience as ExperienceReq
from gaia_sdk.graphql.request.type.Fulfilment import Fulfilment as FulfilmentReq
from gaia_sdk.graphql.request.type.Identity import Identity as IdentityReq
from gaia_sdk.graphql.request.type.Intent import Intent as IntentReq
from gaia_sdk.graphql.request.type.Introspection import Introspection as IntrospectionReq
from gaia_sdk.graphql.request.type.Knowledge import Knowledge as KnowledgeReq
from gaia_sdk.graphql.request.type.Edge import Edge as EdgeReq
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
from gaia_sdk.graphql.response.type.CreatedIdentityImpulse import CreatedIdentityImpulse
from gaia_sdk.graphql.response.type.UpdatedIdentityImpulse import UpdatedIdentityImpulse
from gaia_sdk.graphql.response.type.DeletedIdentityImpulse import DeletedIdentityImpulse
from gaia_sdk.graphql.response.type.CreatedIntentImpulse import CreatedIntentImpulse
from gaia_sdk.graphql.response.type.UpdatedIntentImpulse import UpdatedIntentImpulse
from gaia_sdk.graphql.response.type.DeletedIntentImpulse import DeletedIntentImpulse
from gaia_sdk.graphql.response.type.CreatedPromptImpulse import CreatedPromptImpulse
from gaia_sdk.graphql.response.type.UpdatedPromptImpulse import UpdatedPromptImpulse
from gaia_sdk.graphql.response.type.DeletedPromptImpulse import DeletedPromptImpulse
from gaia_sdk.graphql.response.type.CreatedStatementImpulse import CreatedStatementImpulse
from gaia_sdk.graphql.response.type.UpdatedStatementImpulse import UpdatedStatementImpulse
from gaia_sdk.graphql.response.type.DeletedStatementImpulse import DeletedStatementImpulse
from gaia_sdk.graphql.response.type.CreatedFulfilmentImpulse import CreatedFulfilmentImpulse
from gaia_sdk.graphql.response.type.UpdatedFulfilmentImpulse import UpdatedFulfilmentImpulse
from gaia_sdk.graphql.response.type.DeletedFulfilmentImpulse import DeletedFulfilmentImpulse
from gaia_sdk.graphql.response.type.CreatedBehaviourImpulse import CreatedBehaviourImpulse
from gaia_sdk.graphql.response.type.UpdatedBehaviourImpulse import UpdatedBehaviourImpulse
from gaia_sdk.graphql.response.type.DeletedBehaviourImpulse import DeletedBehaviourImpulse
from gaia_sdk.graphql.response.type.CreatedCodeImpulse import CreatedCodeImpulse
from gaia_sdk.graphql.response.type.UpdatedCodeImpulse import UpdatedCodeImpulse
from gaia_sdk.graphql.response.type.DeletedCodeImpulse import DeletedCodeImpulse
from gaia_sdk.graphql.response.type.CreatedEdgeImpulse import CreatedEdgeImpulse
from gaia_sdk.graphql.response.type.DeletedEdgeImpulse import DeletedEdgeImpulse
from gaia_sdk.graphql.response.type.Preservation import Preservation as PreservationRes
from gaia_sdk.graphql.response.type.SkillIntrospection import SkillIntrospection as SkillIntrospectionRes
from gaia_sdk.graphql.response.type.Introspection import Introspection as IntrospectionRes
from gaia_sdk.graphql.response.type.Behaviour import Behaviour as BehaviourRes
from gaia_sdk.graphql.response.type.Code import Code as CodeRes
from gaia_sdk.graphql.response.type.Fulfilment import Fulfilment as FulfilmentRes
from gaia_sdk.graphql.response.type.Statement import Statement as StatementRes
from gaia_sdk.graphql.response.type.Prompt import Prompt as PromptRes
from gaia_sdk.graphql.response.type.Identity import Identity as IdentityRes
from gaia_sdk.graphql.response.type.Intent import Intent as IntentRes
from gaia_sdk.graphql.response.type.Edge import Edge as EdgeRes
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
from gaia_sdk.graphql.request.type.BehaviourExecution import BehaviourExecution as BehaviourExecutionReq
from gaia_sdk.graphql.request.type.BehaviourExecutionDetail import BehaviourExecutionDetail as BehaviourExecutionDetailReq
from gaia_sdk.graphql.response.type.BehaviourExecution import BehaviourExecution as BehaviourExecutionRes
from gaia_sdk.graphql.response.type.BehaviourExecutionDetail import BehaviourExecutionDetail as BehaviourExecutionDetailRes
from gaia_sdk.graphql.request.type.SkillProvisionBuildJob import SkillProvisionBuildJob as SkillProvisionBuildJobReq
from gaia_sdk.graphql.response.type.SkillProvisionBuildJob import SkillProvisionBuildJob as SkillProvisionBuildJobRes

Uuid = dict
