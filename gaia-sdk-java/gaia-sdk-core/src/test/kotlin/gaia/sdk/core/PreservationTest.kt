package gaia.sdk.core

import gaia.sdk.GaiaCredentials
import gaia.sdk.request.input.*
import org.junit.jupiter.api.*
import reactor.core.publisher.Flux
import java.util.*

@TestInstance(TestInstance.Lifecycle.PER_CLASS)
abstract class PreservationTest {

    lateinit var credentials : GaiaCredentials

    @BeforeAll
    fun beforeAll() {
        credentials= retrieveCredentials()
    }

    abstract fun retrieveCredentials(): GaiaCredentials

    @Test
    fun `test preserve create identity`() {
        val gaiaRef = Gaia.connect("http://localhost:8080",  credentials)
        val impulse = CreateIdentityImpulse("")

        val publisher = gaiaRef.preserveCreateIdentities(impulse)
        val result = Flux.from(publisher).blockFirst()

        Assertions.assertNotNull(result)
        Assertions.assertNotNull(result!!.id)
    }

    @Test
    fun `test preserve update identity`() {
        val gaiaRef = Gaia.connect("http://localhost:8080",  credentials)
        val impulse = UpdateIdentityImpulse(UUID.randomUUID().toString(), "")

        val publisher = gaiaRef.preserveUpdateIdentities(impulse)
        val result = Flux.from(publisher).blockFirst()

        Assertions.assertNotNull(result)
        Assertions.assertNotNull(result!!.id)
    }

    @Test
    fun `test preserve delete identity`() {
        val gaiaRef = Gaia.connect("http://localhost:8080",  credentials)
        val impulse = DeleteIdentityImpulse(UUID.randomUUID().toString())

        val publisher = gaiaRef.preserveDeleteIdentities(impulse)
        val result = Flux.from(publisher).blockFirst()

        Assertions.assertNotNull(result)
        Assertions.assertNotNull(result!!.id)
    }

    @Test
    fun `test preserve create tenant`() {
        val gaiaRef = Gaia.connect("http://localhost:8080",  credentials)
        val impulse = CreateTenantImpulse("", emptyArray(), emptyArray())

        val publisher = gaiaRef.preserveCreateTenants(impulse)
        val result = Flux.from(publisher).blockFirst()

        Assertions.assertNotNull(result)
        Assertions.assertNotNull(result!!.id)
    }

    @Test
    fun `test preserve update tenant`() {
        val gaiaRef = Gaia.connect("http://localhost:8080",  credentials)
        val impulse = UpdateTenantImpulse(UUID.randomUUID().toString(), "", emptyArray(), emptyArray())

        val publisher = gaiaRef.preserveUpdateTenants(impulse)
        val result = Flux.from(publisher).blockFirst()

        Assertions.assertNotNull(result)
        Assertions.assertNotNull(result!!.id)
    }

    @Test
    fun `test preserve delete tenant`() {
        val gaiaRef = Gaia.connect("http://localhost:8080",  credentials)
        val impulse = DeleteTenantImpulse(UUID.randomUUID().toString())

        val publisher = gaiaRef.preserveDeleteTenants(impulse)
        val result = Flux.from(publisher).blockFirst()

        Assertions.assertNotNull(result)
        Assertions.assertNotNull(result!!.id)
    }

    @Test
    fun `test preserve create user`() {
        val gaiaRef = Gaia.connect("http://localhost:8080",  credentials)
        val impulse = CreateUserImpulse("username", "password", true,  emptyArray(), emptyArray(), emptyArray(), emptyArray())

        val publisher = gaiaRef.preserveCreateUsers(impulse)
        val result = Flux.from(publisher).blockFirst()

        Assertions.assertNotNull(result)
        Assertions.assertNotNull(result!!.id)
    }

    @Test
    fun `test preserve update user`() {
        val gaiaRef = Gaia.connect("http://localhost:8080",  credentials)
        val impulse = UpdateUserImpulse(UUID.randomUUID().toString(), "username", "password", false, emptyArray(), emptyArray(), emptyArray(), emptyArray())

        val publisher = gaiaRef.preserveUpdateUsers(impulse)
        val result = Flux.from(publisher).blockFirst()

        Assertions.assertNotNull(result)
        Assertions.assertNotNull(result!!.id)
    }

    @Test
    fun `test preserve delete user`() {
        val gaiaRef = Gaia.connect("http://localhost:8080",  credentials)
        val impulse = DeleteUserImpulse(UUID.randomUUID().toString())

        val publisher = gaiaRef.preserveDeleteUsers(impulse)
        val result = Flux.from(publisher).blockFirst()

        Assertions.assertNotNull(result)
        Assertions.assertNotNull(result!!.id)
    }

    @Test
    fun `test preserve create intent`() {
        val gaiaRef = Gaia.connect("http://localhost:8080",  credentials)
        val impulse = CreateIntentImpulse(UUID.randomUUID().toString(), "", "", emptyMap(), emptyArray())

        val publisher = gaiaRef.preserveCreateIntents(impulse)
        val result = Flux.from(publisher).blockFirst()

        Assertions.assertNotNull(result)
        Assertions.assertNotNull(result!!.id)
    }

    @Test
    fun `test preserve update intent`() {
        val gaiaRef = Gaia.connect("http://localhost:8080",  credentials)
        val impulse = UpdateIntentImpulse(UUID.randomUUID().toString(), UUID.randomUUID().toString(), "", "", emptyMap(), emptyArray())

        val publisher = gaiaRef.preserveUpdateIntents(impulse)
        val result = Flux.from(publisher).blockFirst()

        Assertions.assertNotNull(result)
        Assertions.assertNotNull(result!!.id)
    }

    @Test
    fun `test preserve delete intent`() {
        val gaiaRef = Gaia.connect("http://localhost:8080",  credentials)
        val impulse = DeleteIntentImpulse(UUID.randomUUID().toString(), UUID.randomUUID().toString())

        val publisher = gaiaRef.preserveDeleteIntents(impulse)
        val result = Flux.from(publisher).blockFirst()

        Assertions.assertNotNull(result)
        Assertions.assertNotNull(result!!.id)
    }

    @Test
    fun `test preserve create prompt`() {
        val gaiaRef = Gaia.connect("http://localhost:8080",  credentials)
        val impulse = CreatePromptImpulse(UUID.randomUUID().toString(), "", "", emptyMap(), emptyArray())

        val publisher = gaiaRef.preserveCreatePrompts(impulse)
        val result = Flux.from(publisher).blockFirst()

        Assertions.assertNotNull(result)
        Assertions.assertNotNull(result!!.id)
    }

    @Test
    fun `test preserve update prompt`() {
        val gaiaRef = Gaia.connect("http://localhost:8080",  credentials)
        val impulse = UpdatePromptImpulse(UUID.randomUUID().toString(), UUID.randomUUID().toString(), "", "", emptyMap(), emptyArray())

        val publisher = gaiaRef.preserveUpdatePrompts(impulse)
        val result = Flux.from(publisher).blockFirst()

        Assertions.assertNotNull(result)
        Assertions.assertNotNull(result!!.id)
    }

    @Test
    fun `test preserve delete prompt`() {
        val gaiaRef = Gaia.connect("http://localhost:8080",  credentials)
        val impulse = DeletePromptImpulse(UUID.randomUUID().toString(), UUID.randomUUID().toString())

        val publisher = gaiaRef.preserveDeletePrompts(impulse)
        val result = Flux.from(publisher).blockFirst()

        Assertions.assertNotNull(result)
        Assertions.assertNotNull(result!!.id)
    }

    @Test
    fun `test preserve create statement`() {
        val gaiaRef = Gaia.connect("http://localhost:8080",  credentials)
        val impulse = CreateStatementImpulse(UUID.randomUUID().toString(), "", "", emptyMap(), emptyArray())

        val publisher = gaiaRef.preserveCreateStatements(impulse)
        val result = Flux.from(publisher).blockFirst()

        Assertions.assertNotNull(result)
        Assertions.assertNotNull(result!!.id)
    }

    @Test
    fun `test preserve update statement`() {
        val gaiaRef = Gaia.connect("http://localhost:8080",  credentials)
        val impulse = UpdateStatementImpulse(UUID.randomUUID().toString(), UUID.randomUUID().toString(), "", "", emptyMap(), emptyArray())

        val publisher = gaiaRef.preserveUpdateStatements(impulse)
        val result = Flux.from(publisher).blockFirst()

        Assertions.assertNotNull(result)
        Assertions.assertNotNull(result!!.id)
    }

    @Test
    fun `test preserve delete statement`() {
        val gaiaRef = Gaia.connect("http://localhost:8080",  credentials)
        val impulse = DeleteStatementImpulse(UUID.randomUUID().toString(), UUID.randomUUID().toString())

        val publisher = gaiaRef.preserveDeleteStatements(impulse)
        val result = Flux.from(publisher).blockFirst()

        Assertions.assertNotNull(result)
        Assertions.assertNotNull(result!!.id)
    }

    @Test
    fun `test preserve create fulfilment`() {
        val gaiaRef = Gaia.connect("http://localhost:8080",  credentials)
        val impulse = CreateFulfilmentImpulse(UUID.randomUUID().toString(), "", "", emptyMap(), emptyArray())

        val publisher = gaiaRef.preserveCreateFulfilments(impulse)
        val result = Flux.from(publisher).blockFirst()

        Assertions.assertNotNull(result)
        Assertions.assertNotNull(result!!.id)
    }

    @Test
    fun `test preserve update fulfilment`() {
        val gaiaRef = Gaia.connect("http://localhost:8080",  credentials)
        val impulse = UpdateFulfilmentImpulse(UUID.randomUUID().toString(), UUID.randomUUID().toString(), "", "", emptyMap(), emptyArray())

        val publisher = gaiaRef.preserveUpdateFulfilments(impulse)
        val result = Flux.from(publisher).blockFirst()

        Assertions.assertNotNull(result)
        Assertions.assertNotNull(result!!.id)
    }

    @Test
    fun `test preserve delete fulfilment`() {
        val gaiaRef = Gaia.connect("http://localhost:8080",  credentials)
        val impulse = DeleteFulfilmentImpulse(UUID.randomUUID().toString(), UUID.randomUUID().toString())

        val publisher = gaiaRef.preserveDeleteFulfilments(impulse)
        val result = Flux.from(publisher).blockFirst()

        Assertions.assertNotNull(result)
        Assertions.assertNotNull(result!!.id)
    }

    @Test
    fun `test preserve create behaviour`() {
        val gaiaRef = Gaia.connect("http://localhost:8080",  credentials)
        val impulse = CreateBehaviourImpulse(UUID.randomUUID().toString(), "", "", "", emptyArray())

        val publisher = gaiaRef.preserveCreateBehaviours(impulse)
        val result = Flux.from(publisher).blockFirst()

        Assertions.assertNotNull(result)
        Assertions.assertNotNull(result!!.id)
    }

    @Test
    fun `test preserve update behaviour`() {
        val gaiaRef = Gaia.connect("http://localhost:8080",  credentials)
        val impulse = UpdateBehaviourImpulse(UUID.randomUUID().toString(), UUID.randomUUID().toString(), "", "", "", emptyArray())

        val publisher = gaiaRef.preserveUpdateBehaviours(impulse)
        val result = Flux.from(publisher).blockFirst()

        Assertions.assertNotNull(result)
        Assertions.assertNotNull(result!!.id)
    }

    @Test
    fun `test preserve delete behaviour`() {
        val gaiaRef = Gaia.connect("http://localhost:8080",  credentials)
        val impulse = DeleteBehaviourImpulse(UUID.randomUUID().toString(), UUID.randomUUID().toString())

        val publisher = gaiaRef.preserveDeleteBehaviours(impulse)
        val result = Flux.from(publisher).blockFirst()

        Assertions.assertNotNull(result)
        Assertions.assertNotNull(result!!.id)
    }

    @Test
    fun `test preserve create code`() {
        val gaiaRef = Gaia.connect("http://localhost:8080",  credentials)
        val impulse = CreateCodeImpulse(UUID.randomUUID().toString(), "", "", emptyMap(), "", emptyArray())

        val publisher = gaiaRef.preserveCreateCodes(impulse)
        val result = Flux.from(publisher).blockFirst()

        Assertions.assertNotNull(result)
        Assertions.assertNotNull(result!!.id)
    }

    @Test
    fun `test preserve update code`() {
        val gaiaRef = Gaia.connect("http://localhost:8080",  credentials)
        val impulse = UpdateCodeImpulse(UUID.randomUUID().toString(), UUID.randomUUID().toString(), "", "", emptyMap(), "", emptyArray())

        val publisher = gaiaRef.preserveUpdateCodes(impulse)
        val result = Flux.from(publisher).blockFirst()

        Assertions.assertNotNull(result)
        Assertions.assertNotNull(result!!.id)
    }

    @Test
    fun `test preserve delete code`() {
        val gaiaRef = Gaia.connect("http://localhost:8080",  credentials)
        val impulse = DeleteCodeImpulse(UUID.randomUUID().toString(), UUID.randomUUID().toString())

        val publisher = gaiaRef.preserveDeleteCodes(impulse)
        val result = Flux.from(publisher).blockFirst()

        Assertions.assertNotNull(result)
        Assertions.assertNotNull(result!!.id)
    }

    @Test
    fun `test preserve create edge`() {
        val gaiaRef = Gaia.connect("http://localhost:8080",  credentials)
        val impulse = CreateEdgeImpulse(UUID.randomUUID().toString(), UUID.randomUUID().toString(), "sometype", 2.5f)

        val publisher = gaiaRef.preserveCreateEdges(impulse)
        val result = Flux.from(publisher).blockFirst()

        Assertions.assertNotNull(result)
        Assertions.assertNotNull(result!!.id)
    }

    @Test
    fun `test preserve delete edge`() {
        val gaiaRef = Gaia.connect("http://localhost:8080",  credentials)
        val impulse = DeleteEdgeImpulse(UUID.randomUUID().toString(), UUID.randomUUID().toString())

        val publisher = gaiaRef.preserveDeleteEdges(impulse)
        val result = Flux.from(publisher).blockFirst()

        Assertions.assertNotNull(result)
        Assertions.assertNotNull(result!!.id)
    }

    @Test
    fun `test preserve create skill`() {
        val gaiaRef = Gaia.connect("http://localhost:8080",  credentials)
        val impulse = CreateSkillImpulse(UUID.randomUUID().toString(), "", "", emptyArray(), "")

        val publisher = gaiaRef.preserveCreateSkills(impulse)
        val result = Flux.from(publisher).blockFirst()

        Assertions.assertNotNull(result)
        Assertions.assertNotNull(result!!.id)
    }

    @Test
    fun `test preserve update skill`() {
        val gaiaRef = Gaia.connect("http://localhost:8080",  credentials)
        val impulse = UpdateSkillImpulse(UUID.randomUUID().toString(), UUID.randomUUID().toString(), "", "", emptyArray(), "")

        val publisher = gaiaRef.preserveUpdateSkills(impulse)
        val result = Flux.from(publisher).blockFirst()

        Assertions.assertNotNull(result)
        Assertions.assertNotNull(result!!.id)
    }

    @Test
    fun `test preserve delete skill`() {
        val gaiaRef = Gaia.connect("http://localhost:8080",  credentials)
        val impulse = DeleteSkillImpulse(UUID.randomUUID().toString(), UUID.randomUUID().toString())

        val publisher = gaiaRef.preserveDeleteSkills(impulse)
        val result = Flux.from(publisher).blockFirst()

        Assertions.assertNotNull(result)
        Assertions.assertNotNull(result!!.id)
    }

    @Test
    fun `test preserve create skillProvision`() {
        val gaiaRef = Gaia.connect("http://localhost:8080",  credentials)
        val impulse = CreateSkillProvisionImpulse(UUID.randomUUID().toString(), "", "", emptyArray(), "", "",100,100,100,true,1,emptyMap())

        val publisher = gaiaRef.preserveCreateSkillProvisions(impulse)
        val result = Flux.from(publisher).blockFirst()

        Assertions.assertNotNull(result)
        Assertions.assertNotNull(result!!.id)
    }

    @Test
    fun `test preserve update skillProvision`() {
        val gaiaRef = Gaia.connect("http://localhost:8080",  credentials)
        val impulse = UpdateSkillProvisionImpulse(UUID.randomUUID().toString(), UUID.randomUUID().toString(), "", "", emptyArray(), "", "",100,100,100,true,1, emptyMap())

        val publisher = gaiaRef.preserveUpdateSkillProvisions(impulse)
        val result = Flux.from(publisher).blockFirst()

        Assertions.assertNotNull(result)
        Assertions.assertNotNull(result!!.id)
    }

    @Test
    fun `test preserve delete skillProvision`() {
        val gaiaRef = Gaia.connect("http://localhost:8080",  credentials)
        val impulse = DeleteSkillProvisionImpulse(UUID.randomUUID().toString(), UUID.randomUUID().toString())

        val publisher = gaiaRef.preserveDeleteSkillProvisions(impulse)
        val result = Flux.from(publisher).blockFirst()

        Assertions.assertNotNull(result)
        Assertions.assertNotNull(result!!.id)
    }


}
