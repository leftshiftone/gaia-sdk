package gaia.sdk.core

import gaia.sdk.GaiaCredentials
import gaia.sdk.GaiaResponse
import gaia.sdk.request.enumeration.EdgeType
import gaia.sdk.request.input.*
import gaia.sdk.response.type.*
import io.reactivex.Flowable
import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.BeforeAll
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.TestInstance
import org.junit.jupiter.api.TestInstance.Lifecycle.PER_CLASS
import reactor.core.publisher.Flux
import java.util.*

@TestInstance(PER_CLASS)
abstract class PreservationTest {

    lateinit var credentials: GaiaCredentials

    @BeforeAll
    fun beforeAll() {
        credentials = retrieveCredentials()
    }

    abstract fun retrieveCredentials(): GaiaCredentials

    @Test
    fun `test preserve create identity`() {
        Gaia.transporterFactory = MockTransporterFactory { request -> Flowable.just(GaiaResponse.MutationResponse(Mutation(preserve = Preservation(create = CreateKnowledge(identities = listOf(CreatedIdentityImpulse(id = UUID.randomUUID().toString()))))))) }
        val gaiaRef = Gaia.connect("http://localhost:8080", credentials)
        val impulse = CreateIdentityImpulse("", "", mapOf("de" to "Deutsch"))

        val publisher = gaiaRef.preserveCreateIdentities(impulse)
        val result = Flux.from(publisher).blockFirst()

        assertThat(result).isNotNull
        assertThat(result!!.id).isNotBlank()
    }

    @Test
    fun `test preserve update identity`() {
        Gaia.transporterFactory = MockTransporterFactory { request -> Flowable.just(GaiaResponse.MutationResponse(Mutation(preserve = Preservation(update = UpdateKnowledge(identities = listOf(UpdatedIdentityImpulse(id = UUID.randomUUID().toString()))))))) }
        val gaiaRef = Gaia.connect("http://localhost:8080", credentials)
        val impulse = UpdateIdentityImpulse(UUID.randomUUID().toString(), "", "", mapOf("de" to "Deutsch"))

        val publisher = gaiaRef.preserveUpdateIdentities(impulse)
        val result = Flux.from(publisher).blockFirst()

        assertThat(result).isNotNull
        assertThat(result!!.id).isNotBlank()
    }

    @Test
    fun `test preserve delete identity`() {
        Gaia.transporterFactory = MockTransporterFactory { request -> Flowable.just(GaiaResponse.MutationResponse(Mutation(preserve = Preservation(delete = DeleteKnowledge(identities = listOf(DeletedIdentityImpulse(id = UUID.randomUUID().toString()))))))) }
        val gaiaRef = Gaia.connect("http://localhost:8080", credentials)
        val impulse = DeleteIdentityImpulse(UUID.randomUUID().toString())

        val publisher = gaiaRef.preserveDeleteIdentities(impulse)
        val result = Flux.from(publisher).blockFirst()

        assertThat(result).isNotNull
        assertThat(result!!.id).isNotBlank()
    }

    @Test
    fun `test preserve create tenant`() {
        Gaia.transporterFactory = MockTransporterFactory { request -> Flowable.just(GaiaResponse.MutationResponse(Mutation(preserve = Preservation(create = CreateKnowledge(tenants = listOf(CreatedTenantImpulse(id = UUID.randomUUID().toString()))))))) }
        val gaiaRef = Gaia.connect("http://localhost:8080", credentials)
        val impulse = CreateTenantImpulse("")

        val publisher = gaiaRef.preserveCreateTenants(impulse)
        val result = Flux.from(publisher).blockFirst()

        assertThat(result).isNotNull
        assertThat(result!!.id).isNotBlank()
    }

    @Test
    fun `test preserve update tenant`() {
        Gaia.transporterFactory = MockTransporterFactory { request -> Flowable.just(GaiaResponse.MutationResponse(Mutation(preserve = Preservation(update = UpdateKnowledge(tenants = listOf(UpdatedTenantImpulse(id = UUID.randomUUID().toString()))))))) }
        val gaiaRef = Gaia.connect("http://localhost:8080", credentials)
        val impulse = UpdateTenantImpulse(UUID.randomUUID().toString(), "")

        val publisher = gaiaRef.preserveUpdateTenants(impulse)
        val result = Flux.from(publisher).blockFirst()

        assertThat(result).isNotNull
        assertThat(result!!.id).isNotBlank()
    }

    @Test
    fun `test preserve delete tenant`() {
        Gaia.transporterFactory = MockTransporterFactory { request -> Flowable.just(GaiaResponse.MutationResponse(Mutation(preserve = Preservation(delete = DeleteKnowledge(tenants = listOf(DeletedTenantImpulse(id = UUID.randomUUID().toString()))))))) }
        val gaiaRef = Gaia.connect("http://localhost:8080", credentials)
        val impulse = DeleteTenantImpulse(UUID.randomUUID().toString())

        val publisher = gaiaRef.preserveDeleteTenants(impulse)
        val result = Flux.from(publisher).blockFirst()

        assertThat(result).isNotNull
        assertThat(result!!.id).isNotBlank()
    }

    @Test
    fun `test preserve create user`() {
        Gaia.transporterFactory = MockTransporterFactory { request -> Flowable.just(GaiaResponse.MutationResponse(Mutation(preserve = Preservation(create = CreateKnowledge(users = listOf(CreatedUserImpulse(id = UUID.randomUUID().toString()))))))) }
        val gaiaRef = Gaia.connect("http://localhost:8080", credentials)
        val impulse = CreateUserImpulse("username", "foo@bar", "foo", "bar", "password")

        val publisher = gaiaRef.preserveCreateUsers(impulse)
        val result = Flux.from(publisher).blockFirst()

        assertThat(result).isNotNull
        assertThat(result!!.id).isNotBlank()
    }

    @Test
    fun `test preserve update user`() {
        Gaia.transporterFactory = MockTransporterFactory { request -> Flowable.just(GaiaResponse.MutationResponse(Mutation(preserve = Preservation(update = UpdateKnowledge(users = listOf(UpdatedUserImpulse(id = UUID.randomUUID().toString()))))))) }
        val gaiaRef = Gaia.connect("http://localhost:8080", credentials)
        val impulse = UpdateUserImpulse(UUID.randomUUID().toString(), "username", "foo@bar", "foo", "bar", "password")

        val publisher = gaiaRef.preserveUpdateUsers(impulse)
        val result = Flux.from(publisher).blockFirst()

        assertThat(result).isNotNull
        assertThat(result!!.id).isNotBlank()
    }

    @Test
    fun `test preserve delete user`() {
        Gaia.transporterFactory = MockTransporterFactory { request -> Flowable.just(GaiaResponse.MutationResponse(Mutation(preserve = Preservation(delete = DeleteKnowledge(users = listOf(DeletedUserImpulse(id = UUID.randomUUID().toString()))))))) }
        val gaiaRef = Gaia.connect("http://localhost:8080", credentials)
        val impulse = DeleteUserImpulse(UUID.randomUUID().toString())

        val publisher = gaiaRef.preserveDeleteUsers(impulse)
        val result = Flux.from(publisher).blockFirst()

        assertThat(result).isNotNull
        assertThat(result!!.id).isNotBlank()
    }

    @Test
    fun `test preserve create role`() {
        Gaia.transporterFactory = MockTransporterFactory { request -> Flowable.just(GaiaResponse.MutationResponse(Mutation(preserve = Preservation(create = CreateKnowledge(roles = listOf(CreatedRoleImpulse(id = UUID.randomUUID().toString()))))))) }
        val gaiaRef = Gaia.connect("http://localhost:8080", credentials)
        val impulse = CreateRoleImpulse(UUID.randomUUID().toString(), "Super Admin", arrayOf("*"))

        val publisher = gaiaRef.preserveCreateRoles(impulse)
        val result = Flux.from(publisher).blockFirst()

        assertThat(result).isNotNull
        assertThat(result!!.id).isNotBlank()
    }

    @Test
    fun `test preserve update role`() {
        Gaia.transporterFactory = MockTransporterFactory { request -> Flowable.just(GaiaResponse.MutationResponse(Mutation(preserve = Preservation(update = UpdateKnowledge(roles = listOf(UpdatedRoleImpulse(id = UUID.randomUUID().toString()))))))) }
        val gaiaRef = Gaia.connect("http://localhost:8080", credentials)
        val impulse = UpdateRoleImpulse(UUID.randomUUID().toString(), UUID.randomUUID().toString(), "Super Admin", arrayOf("*"))

        val publisher = gaiaRef.preserveUpdateRoles(impulse)
        val result = Flux.from(publisher).blockFirst()

        assertThat(result).isNotNull
        assertThat(result!!.id).isNotBlank()
    }

    @Test
    fun `test preserve delete role`() {
        Gaia.transporterFactory = MockTransporterFactory { request -> Flowable.just(GaiaResponse.MutationResponse(Mutation(preserve = Preservation(delete = DeleteKnowledge(roles = listOf(DeletedRoleImpulse(id = UUID.randomUUID().toString()))))))) }
        val gaiaRef = Gaia.connect("http://localhost:8080", credentials)
        val impulse = DeleteRoleImpulse(UUID.randomUUID().toString(), UUID.randomUUID().toString())

        val publisher = gaiaRef.preserveDeleteRoles(impulse)
        val result = Flux.from(publisher).blockFirst()

        assertThat(result).isNotNull
        assertThat(result!!.id).isNotBlank()
    }

    @Test
    fun `test preserve create intent`() {
        Gaia.transporterFactory = MockTransporterFactory { request -> Flowable.just(GaiaResponse.MutationResponse(Mutation(preserve = Preservation(create = CreateKnowledge(intents = listOf(CreatedIntentImpulse(id = UUID.randomUUID().toString()))))))) }
        val gaiaRef = Gaia.connect("http://localhost:8080", credentials)
        val impulse = CreateIntentImpulse(UUID.randomUUID().toString(), "", "", emptyMap(), emptyArray())

        val publisher = gaiaRef.preserveCreateIntents(impulse)
        val result = Flux.from(publisher).blockFirst()

        assertThat(result).isNotNull
        assertThat(result!!.id).isNotBlank()
    }

    @Test
    fun `test preserve update intent`() {
        Gaia.transporterFactory = MockTransporterFactory { request -> Flowable.just(GaiaResponse.MutationResponse(Mutation(preserve = Preservation(update = UpdateKnowledge(intents = listOf(UpdatedIntentImpulse(id = UUID.randomUUID().toString()))))))) }
        val gaiaRef = Gaia.connect("http://localhost:8080", credentials)
        val impulse = UpdateIntentImpulse(UUID.randomUUID().toString(), UUID.randomUUID().toString(), "", "", emptyMap(), emptyArray())

        val publisher = gaiaRef.preserveUpdateIntents(impulse)
        val result = Flux.from(publisher).blockFirst()

        assertThat(result).isNotNull
        assertThat(result!!.id).isNotBlank()
    }

    @Test
    fun `test preserve delete intent`() {
        Gaia.transporterFactory = MockTransporterFactory { request -> Flowable.just(GaiaResponse.MutationResponse(Mutation(preserve = Preservation(delete = DeleteKnowledge(intents = listOf(DeletedIntentImpulse(id = UUID.randomUUID().toString()))))))) }
        val gaiaRef = Gaia.connect("http://localhost:8080", credentials)
        val impulse = DeleteIntentImpulse(UUID.randomUUID().toString(), UUID.randomUUID().toString())

        val publisher = gaiaRef.preserveDeleteIntents(impulse)
        val result = Flux.from(publisher).blockFirst()

        assertThat(result).isNotNull
        assertThat(result!!.id).isNotBlank()
    }

    @Test
    fun `test preserve create prompt`() {
        Gaia.transporterFactory = MockTransporterFactory { request -> Flowable.just(GaiaResponse.MutationResponse(Mutation(preserve = Preservation(create = CreateKnowledge(prompts = listOf(CreatedPromptImpulse(id = UUID.randomUUID().toString()))))))) }
        val gaiaRef = Gaia.connect("http://localhost:8080", credentials)
        val impulse = CreatePromptImpulse(UUID.randomUUID().toString(), "", "", emptyMap(), emptyArray())

        val publisher = gaiaRef.preserveCreatePrompts(impulse)
        val result = Flux.from(publisher).blockFirst()

        assertThat(result).isNotNull
        assertThat(result!!.id).isNotBlank()
    }

    @Test
    fun `test preserve update prompt`() {
        Gaia.transporterFactory = MockTransporterFactory { request -> Flowable.just(GaiaResponse.MutationResponse(Mutation(preserve = Preservation(update = UpdateKnowledge(prompts = listOf(UpdatedPromptImpulse(id = UUID.randomUUID().toString()))))))) }
        val gaiaRef = Gaia.connect("http://localhost:8080", credentials)
        val impulse = UpdatePromptImpulse(UUID.randomUUID().toString(), UUID.randomUUID().toString(), "", "", emptyMap(), emptyArray())

        val publisher = gaiaRef.preserveUpdatePrompts(impulse)
        val result = Flux.from(publisher).blockFirst()

        assertThat(result).isNotNull
        assertThat(result!!.id).isNotBlank()
    }

    @Test
    fun `test preserve delete prompt`() {
        Gaia.transporterFactory = MockTransporterFactory { request -> Flowable.just(GaiaResponse.MutationResponse(Mutation(preserve = Preservation(delete = DeleteKnowledge(prompts = listOf(DeletedPromptImpulse(id = UUID.randomUUID().toString()))))))) }
        val gaiaRef = Gaia.connect("http://localhost:8080", credentials)
        val impulse = DeletePromptImpulse(UUID.randomUUID().toString(), UUID.randomUUID().toString())

        val publisher = gaiaRef.preserveDeletePrompts(impulse)
        val result = Flux.from(publisher).blockFirst()

        assertThat(result).isNotNull
        assertThat(result!!.id).isNotBlank()
    }

    @Test
    fun `test preserve create statement`() {
        Gaia.transporterFactory = MockTransporterFactory { request -> Flowable.just(GaiaResponse.MutationResponse(Mutation(preserve = Preservation(create = CreateKnowledge(statements = listOf(CreatedStatementImpulse(id = UUID.randomUUID().toString()))))))) }
        val gaiaRef = Gaia.connect("http://localhost:8080", credentials)
        val impulse = CreateStatementImpulse(UUID.randomUUID().toString(), "", "", emptyMap(), emptyArray())

        val publisher = gaiaRef.preserveCreateStatements(impulse)
        val result = Flux.from(publisher).blockFirst()

        assertThat(result).isNotNull
        assertThat(result!!.id).isNotBlank()
    }

    @Test
    fun `test preserve update statement`() {
        Gaia.transporterFactory = MockTransporterFactory { request -> Flowable.just(GaiaResponse.MutationResponse(Mutation(preserve = Preservation(update = UpdateKnowledge(statements = listOf(UpdatedStatementImpulse(id = UUID.randomUUID().toString()))))))) }
        val gaiaRef = Gaia.connect("http://localhost:8080", credentials)
        val impulse = UpdateStatementImpulse(UUID.randomUUID().toString(), UUID.randomUUID().toString(), "", "", emptyMap(), emptyArray())

        val publisher = gaiaRef.preserveUpdateStatements(impulse)
        val result = Flux.from(publisher).blockFirst()

        assertThat(result).isNotNull
        assertThat(result!!.id).isNotBlank()
    }

    @Test
    fun `test preserve delete statement`() {
        Gaia.transporterFactory = MockTransporterFactory { request -> Flowable.just(GaiaResponse.MutationResponse(Mutation(preserve = Preservation(delete = DeleteKnowledge(statements = listOf(DeletedStatementImpulse(id = UUID.randomUUID().toString()))))))) }
        val gaiaRef = Gaia.connect("http://localhost:8080", credentials)
        val impulse = DeleteStatementImpulse(UUID.randomUUID().toString(), UUID.randomUUID().toString())

        val publisher = gaiaRef.preserveDeleteStatements(impulse)
        val result = Flux.from(publisher).blockFirst()

        assertThat(result).isNotNull
        assertThat(result!!.id).isNotBlank()
    }

    @Test
    fun `test preserve create fulfilment`() {
        Gaia.transporterFactory = MockTransporterFactory { request -> Flowable.just(GaiaResponse.MutationResponse(Mutation(preserve = Preservation(create = CreateKnowledge(fulfilments = listOf(CreatedFulfilmentImpulse(id = UUID.randomUUID().toString()))))))) }
        val gaiaRef = Gaia.connect("http://localhost:8080", credentials)
        val impulse = CreateFulfilmentImpulse(UUID.randomUUID().toString(), "", "", emptyMap(), emptyArray())

        val publisher = gaiaRef.preserveCreateFulfilments(impulse)
        val result = Flux.from(publisher).blockFirst()

        assertThat(result).isNotNull
        assertThat(result!!.id).isNotBlank()
    }

    @Test
    fun `test preserve update fulfilment`() {
        Gaia.transporterFactory = MockTransporterFactory { request -> Flowable.just(GaiaResponse.MutationResponse(Mutation(preserve = Preservation(update = UpdateKnowledge(fulfilments = listOf(UpdatedFulfilmentImpulse(id = UUID.randomUUID().toString()))))))) }
        val gaiaRef = Gaia.connect("http://localhost:8080", credentials)
        val impulse = UpdateFulfilmentImpulse(UUID.randomUUID().toString(), UUID.randomUUID().toString(), "", "", emptyMap(), emptyArray())

        val publisher = gaiaRef.preserveUpdateFulfilments(impulse)
        val result = Flux.from(publisher).blockFirst()

        assertThat(result).isNotNull
        assertThat(result!!.id).isNotBlank()
    }

    @Test
    fun `test preserve delete fulfilment`() {
        Gaia.transporterFactory = MockTransporterFactory { request -> Flowable.just(GaiaResponse.MutationResponse(Mutation(preserve = Preservation(delete = DeleteKnowledge(fulfilments = listOf(DeletedFulfilmentImpulse(id = UUID.randomUUID().toString()))))))) }
        val gaiaRef = Gaia.connect("http://localhost:8080", credentials)
        val impulse = DeleteFulfilmentImpulse(UUID.randomUUID().toString(), UUID.randomUUID().toString())

        val publisher = gaiaRef.preserveDeleteFulfilments(impulse)
        val result = Flux.from(publisher).blockFirst()

        assertThat(result).isNotNull
        assertThat(result!!.id).isNotBlank()
    }

    @Test
    fun `test preserve create behaviour`() {
        Gaia.transporterFactory = MockTransporterFactory { request -> Flowable.just(GaiaResponse.MutationResponse(Mutation(preserve = Preservation(create = CreateKnowledge(behaviours = listOf(CreatedBehaviourImpulse(id = UUID.randomUUID().toString()))))))) }
        val gaiaRef = Gaia.connect("http://localhost:8080", credentials)
        val impulse = CreateBehaviourImpulse(UUID.randomUUID().toString(), "", "", "", emptyArray())

        val publisher = gaiaRef.preserveCreateBehaviours(impulse)
        val result = Flux.from(publisher).blockFirst()

        assertThat(result).isNotNull
        assertThat(result!!.id).isNotBlank()
    }

    @Test
    fun `test preserve update behaviour`() {
        Gaia.transporterFactory = MockTransporterFactory { request -> Flowable.just(GaiaResponse.MutationResponse(Mutation(preserve = Preservation(update = UpdateKnowledge(behaviours = listOf(UpdatedBehaviourImpulse(id = UUID.randomUUID().toString()))))))) }
        val gaiaRef = Gaia.connect("http://localhost:8080", credentials)
        val impulse = UpdateBehaviourImpulse(UUID.randomUUID().toString(), UUID.randomUUID().toString(), "", "", "", emptyArray())

        val publisher = gaiaRef.preserveUpdateBehaviours(impulse)
        val result = Flux.from(publisher).blockFirst()

        assertThat(result).isNotNull
        assertThat(result!!.id).isNotBlank()
    }

    @Test
    fun `test preserve delete behaviour`() {
        Gaia.transporterFactory = MockTransporterFactory { request -> Flowable.just(GaiaResponse.MutationResponse(Mutation(preserve = Preservation(delete = DeleteKnowledge(behaviours = listOf(DeletedBehaviourImpulse(id = UUID.randomUUID().toString()))))))) }
        val gaiaRef = Gaia.connect("http://localhost:8080", credentials)
        val impulse = DeleteBehaviourImpulse(UUID.randomUUID().toString(), UUID.randomUUID().toString())

        val publisher = gaiaRef.preserveDeleteBehaviours(impulse)
        val result = Flux.from(publisher).blockFirst()

        assertThat(result).isNotNull
        assertThat(result!!.id).isNotBlank()
    }

    @Test
    fun `test preserve create code`() {
        Gaia.transporterFactory = MockTransporterFactory { request -> Flowable.just(GaiaResponse.MutationResponse(Mutation(preserve = Preservation(create = CreateKnowledge(codes = listOf(CreatedCodeImpulse(id = UUID.randomUUID().toString()))))))) }
        val gaiaRef = Gaia.connect("http://localhost:8080", credentials)
        val impulse = CreateCodeImpulse(UUID.randomUUID().toString(), "", "", emptyMap(), "", emptyArray())

        val publisher = gaiaRef.preserveCreateCodes(impulse)
        val result = Flux.from(publisher).blockFirst()

        assertThat(result).isNotNull
        assertThat(result!!.id).isNotBlank()
    }

    @Test
    fun `test preserve update code`() {
        Gaia.transporterFactory = MockTransporterFactory { request -> Flowable.just(GaiaResponse.MutationResponse(Mutation(preserve = Preservation(update = UpdateKnowledge(codes = listOf(UpdatedCodeImpulse(id = UUID.randomUUID().toString()))))))) }
        val gaiaRef = Gaia.connect("http://localhost:8080", credentials)
        val impulse = UpdateCodeImpulse(UUID.randomUUID().toString(), UUID.randomUUID().toString(), "", "", emptyMap(), "", emptyArray())

        val publisher = gaiaRef.preserveUpdateCodes(impulse)
        val result = Flux.from(publisher).blockFirst()

        assertThat(result).isNotNull
        assertThat(result!!.id).isNotBlank()
    }

    @Test
    fun `test preserve delete code`() {
        Gaia.transporterFactory = MockTransporterFactory { request -> Flowable.just(GaiaResponse.MutationResponse(Mutation(preserve = Preservation(delete = DeleteKnowledge(codes = listOf(DeletedCodeImpulse(id = UUID.randomUUID().toString()))))))) }
        val gaiaRef = Gaia.connect("http://localhost:8080", credentials)
        val impulse = DeleteCodeImpulse(UUID.randomUUID().toString(), UUID.randomUUID().toString())

        val publisher = gaiaRef.preserveDeleteCodes(impulse)
        val result = Flux.from(publisher).blockFirst()

        assertThat(result).isNotNull
        assertThat(result!!.id).isNotBlank()
    }

    @Test
    fun `test preserve create edge`() {
        Gaia.transporterFactory = MockTransporterFactory { request -> Flowable.just(GaiaResponse.MutationResponse(Mutation(preserve = Preservation(create = CreateKnowledge(edges = listOf(CreatedEdgeImpulse(id = UUID.randomUUID().toString()))))))) }
        val gaiaRef = Gaia.connect("http://localhost:8080", credentials)
        val impulse = CreateEdgeImpulse(UUID.randomUUID().toString(), UUID.randomUUID().toString(), "sometype", 2.5f, mapOf())

        val publisher = gaiaRef.preserveCreateEdges(impulse)
        val result = Flux.from(publisher).blockFirst()

        assertThat(result).isNotNull
        assertThat(result!!.id).isNotBlank()
    }

    @Test
    fun `test preserve delete edge`() {
        Gaia.transporterFactory = MockTransporterFactory { request -> Flowable.just(GaiaResponse.MutationResponse(Mutation(preserve = Preservation(delete = DeleteKnowledge(edges = listOf(DeletedEdgeImpulse(id = UUID.randomUUID().toString()))))))) }
        val gaiaRef = Gaia.connect("http://localhost:8080", credentials)
        val impulse = DeleteEdgeImpulse(UUID.randomUUID().toString(), UUID.randomUUID().toString())

        val publisher = gaiaRef.preserveDeleteEdges(impulse)
        val result = Flux.from(publisher).blockFirst()

        assertThat(result).isNotNull
        assertThat(result!!.id).isNotBlank()
    }

    @Test
    fun `test preserve create skill`() {
        Gaia.transporterFactory = MockTransporterFactory { request -> Flowable.just(GaiaResponse.MutationResponse(Mutation(preserve = Preservation(create = CreateKnowledge(skills = listOf(CreatedSkillImpulse(id = UUID.randomUUID().toString()))))))) }
        val gaiaRef = Gaia.connect("http://localhost:8080", credentials)
        val impulse = CreateSkillImpulse(UUID.randomUUID().toString(), "", "", emptyArray(), "")

        val publisher = gaiaRef.preserveCreateSkills(impulse)
        val result = Flux.from(publisher).blockFirst()

        assertThat(result).isNotNull
        assertThat(result!!.id).isNotBlank()
    }

    @Test
    fun `test preserve update skill`() {
        Gaia.transporterFactory = MockTransporterFactory { request -> Flowable.just(GaiaResponse.MutationResponse(Mutation(preserve = Preservation(update = UpdateKnowledge(skills = listOf(UpdatedSkillImpulse(id = UUID.randomUUID().toString()))))))) }
        val gaiaRef = Gaia.connect("http://localhost:8080", credentials)
        val impulse = UpdateSkillImpulse(UUID.randomUUID().toString(), UUID.randomUUID().toString(), "", "", emptyArray(), "")

        val publisher = gaiaRef.preserveUpdateSkills(impulse)
        val result = Flux.from(publisher).blockFirst()

        assertThat(result).isNotNull
        assertThat(result!!.id).isNotBlank()
    }

    @Test
    fun `test preserve delete skill`() {
        Gaia.transporterFactory = MockTransporterFactory { request -> Flowable.just(GaiaResponse.MutationResponse(Mutation(preserve = Preservation(delete = DeleteKnowledge(skills = listOf(DeletedSkillImpulse(id = UUID.randomUUID().toString()))))))) }
        val gaiaRef = Gaia.connect("http://localhost:8080", credentials)
        val impulse = DeleteSkillImpulse(UUID.randomUUID().toString(), UUID.randomUUID().toString())

        val publisher = gaiaRef.preserveDeleteSkills(impulse)
        val result = Flux.from(publisher).blockFirst()

        assertThat(result).isNotNull
        assertThat(result!!.id).isNotBlank()
    }

    @Test
    fun `test preserve create skillProvision`() {
        Gaia.transporterFactory = MockTransporterFactory { request -> Flowable.just(GaiaResponse.MutationResponse(Mutation(preserve = Preservation(create = CreateKnowledge(skillProvisions = listOf(CreatedSkillProvisionImpulse(id = UUID.randomUUID().toString()))))))) }
        val gaiaRef = Gaia.connect("http://localhost:8080", credentials)
        val impulse = CreateSkillProvisionImpulse(UUID.randomUUID().toString(), "", "", emptyArray(), "", "", 100, 100, 100, true, 1, emptyMap())

        val publisher = gaiaRef.preserveCreateSkillProvisions(impulse)
        val result = Flux.from(publisher).blockFirst()

        assertThat(result).isNotNull
        assertThat(result!!.id).isNotBlank()
    }

    @Test
    fun `test preserve update skillProvision`() {
        Gaia.transporterFactory = MockTransporterFactory { request -> Flowable.just(GaiaResponse.MutationResponse(Mutation(preserve = Preservation(update = UpdateKnowledge(skillProvisions = listOf(UpdatedSkillProvisionImpulse(id = UUID.randomUUID().toString()))))))) }
        val gaiaRef = Gaia.connect("http://localhost:8080", credentials)
        val impulse = UpdateSkillProvisionImpulse(UUID.randomUUID().toString(), UUID.randomUUID().toString(), "", "", emptyArray(), "", "", 100, 100, 100, true, 1, emptyMap())

        val publisher = gaiaRef.preserveUpdateSkillProvisions(impulse)
        val result = Flux.from(publisher).blockFirst()

        assertThat(result).isNotNull
        assertThat(result!!.id).isNotBlank()
    }

    @Test
    fun `test preserve delete skillProvision`() {
        Gaia.transporterFactory = MockTransporterFactory { request -> Flowable.just(GaiaResponse.MutationResponse(Mutation(preserve = Preservation(delete = DeleteKnowledge(skillProvisions = listOf(DeletedSkillProvisionImpulse(id = UUID.randomUUID().toString()))))))) }
        val gaiaRef = Gaia.connect("http://localhost:8080", credentials)
        val impulse = DeleteSkillProvisionImpulse(UUID.randomUUID().toString(), UUID.randomUUID().toString())

        val publisher = gaiaRef.preserveDeleteSkillProvisions(impulse)
        val result = Flux.from(publisher).blockFirst()

        assertThat(result).isNotNull
        assertThat(result!!.id).isNotBlank()
    }

    @Test
    fun `test preserve set node connection`() {
        Gaia.transporterFactory = MockTransporterFactory { request ->
            Flowable.just(GaiaResponse.MutationResponse(Mutation(preserve = Preservation(connect = ConnectKnowledge(node = ConnectNodeKnowledge(set = ConnectNodeSetImpulse(
                id = "impulseId",
                removedEdges = listOf(EdgeKeyOne("deletedSource", "deletedEdgeId")),
                newEdge = Edge("source", "target", "edgeId", "type", 0.95f, mapOf("hello" to "world"))
        ))))))) }
        val gaiaRef = Gaia.connect("http://localhost:8080", credentials)
        val impulse = ConnectSetNodeImpulse(EdgeType.IdentityWelcomeBehaviour, "targetIn", mapOf("foo" to "bar"), 0.85f)

        val publisher = gaiaRef.preserveConnectNodeSet(UUID.randomUUID().toString(), impulse)
        val result = Flux.from(publisher).blockFirst()

        assertThat(result).isNotNull
        assertThat(result!!.id).isEqualTo("impulseId")
        assertThat(result!!.removedEdges).hasSize(1)
        assertThat(result!!.removedEdges!!.first().source).isEqualTo("deletedSource")
        assertThat(result!!.removedEdges!!.first().edgeId).isEqualTo("deletedEdgeId")
        assertThat(result!!.newEdge!!.source).isEqualTo("source")
        assertThat(result!!.newEdge!!.target).isEqualTo("target")
        assertThat(result!!.newEdge!!.edgeId).isEqualTo("edgeId")
        assertThat(result!!.newEdge!!.type).isEqualTo("type")
        assertThat(result!!.newEdge!!.weight).isEqualTo(0.95f)
        assertThat(result!!.newEdge!!.properties).isEqualTo(mapOf("hello" to "world"))
    }

    @Test
    fun `test preserve unset node connection`() {
        Gaia.transporterFactory = MockTransporterFactory { request ->
            Flowable.just(GaiaResponse.MutationResponse(Mutation(preserve = Preservation(connect = ConnectKnowledge(node = ConnectNodeKnowledge(unset = ConnectNodeUnsetImpulse(
                    id = "impulseId",
                    removedEdges = listOf(EdgeKeyOne("deletedSource", "deletedEdgeId"))
            ))))))) }
        val gaiaRef = Gaia.connect("http://localhost:8080", credentials)
        val impulse = ConnectUnsetNodeImpulse(EdgeType.IdentityWelcomeBehaviour)

        val publisher = gaiaRef.preserveConnectNodeUnset(UUID.randomUUID().toString(), impulse)
        val result = Flux.from(publisher).blockFirst()

        assertThat(result).isNotNull
        assertThat(result!!.id).isEqualTo("impulseId")
        assertThat(result!!.removedEdges).hasSize(1)
        assertThat(result!!.removedEdges!!.first().source).isEqualTo("deletedSource")
        assertThat(result!!.removedEdges!!.first().edgeId).isEqualTo("deletedEdgeId")
    }

    @Test
    fun `test preserve append node connection`() {
        Gaia.transporterFactory = MockTransporterFactory { request ->
            Flowable.just(GaiaResponse.MutationResponse(Mutation(preserve = Preservation(connect = ConnectKnowledge(node = ConnectNodeKnowledge(append = ConnectNodeAppendedImpulse(
                    id = "impulseId",
                    newEdge = Edge("source", "target", "edgeId", "type", 0.95f, mapOf("hello" to "world"))
            ))))))) }
        val gaiaRef = Gaia.connect("http://localhost:8080", credentials)
        val impulse = ConnectAppendNodeImpulse(EdgeType.IdentityWelcomeBehaviour, "targetIn", mapOf("foo" to "bar"), 0.85f)

        val publisher = gaiaRef.preserveConnectNodeAppend(UUID.randomUUID().toString(), impulse)
        val result = Flux.from(publisher).blockFirst()

        assertThat(result).isNotNull
        assertThat(result!!.id).isEqualTo("impulseId")
        assertThat(result!!.newEdge!!.source).isEqualTo("source")
        assertThat(result!!.newEdge!!.target).isEqualTo("target")
        assertThat(result!!.newEdge!!.edgeId).isEqualTo("edgeId")
        assertThat(result!!.newEdge!!.type).isEqualTo("type")
        assertThat(result!!.newEdge!!.weight).isEqualTo(0.95f)
        assertThat(result!!.newEdge!!.properties).isEqualTo(mapOf("hello" to "world"))
    }

    @Test
    fun `test preserve remove node connection`() {
        Gaia.transporterFactory = MockTransporterFactory { request ->
            Flowable.just(GaiaResponse.MutationResponse(Mutation(preserve = Preservation(connect = ConnectKnowledge(node = ConnectNodeKnowledge(remove = ConnectNodeRemovedImpulse(
                    id = "impulseId",
                    removedEdges = listOf(EdgeKeyOne("deletedSource", "deletedEdgeId"))
            ))))))) }
        val gaiaRef = Gaia.connect("http://localhost:8080", credentials)
        val impulse = ConnectRemoveNodeImpulse(EdgeType.IdentityWelcomeBehaviour, "targetIn")

        val publisher = gaiaRef.preserveConnectNodeRemove(UUID.randomUUID().toString(), impulse)
        val result = Flux.from(publisher).blockFirst()

        assertThat(result).isNotNull
        assertThat(result!!.id).isEqualTo("impulseId")
        assertThat(result!!.removedEdges).hasSize(1)
        assertThat(result!!.removedEdges!!.first().source).isEqualTo("deletedSource")
        assertThat(result!!.removedEdges!!.first().edgeId).isEqualTo("deletedEdgeId")
    }
}
