package gaia.sdk.core

import gaia.sdk.GaiaCredentials
import io.reactivex.Flowable
import org.junit.jupiter.api.BeforeAll
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.TestInstance
import java.util.*
import java.util.concurrent.TimeUnit

@TestInstance(TestInstance.Lifecycle.PER_CLASS)
abstract class RetrievalTest() {

    lateinit var credentials : GaiaCredentials

    @BeforeAll
    fun beforeAll() {
        credentials= retrieveCredentials()
    }

    abstract fun retrieveCredentials(): GaiaCredentials


    @Test
    fun `test retrieve identities`() {
        val gaiaRef = Gaia.connect("http://localhost:8080",  credentials)

        val publisher = gaiaRef.retrieveIdentities({
            identityId()
            qualifier()
        })
        val ts = Flowable.fromPublisher(publisher).test()
        ts.awaitDone(5,TimeUnit.SECONDS)
        ts.assertNoErrors()
        ts.assertValueCount(1)
        ts.assertValueAt(0){
            it.identityId!=null && it.qualifier!=null
        }
    }

    @Test
    fun `test retrieve paginated identities`() {
        val gaiaRef = Gaia.connect("http://localhost:8080",  credentials)

        val publisher = gaiaRef.retrieveIdentities({
            identityId()
            qualifier()
        }, 10, 100)
        val ts = Flowable.fromPublisher(publisher).test()
        ts.awaitDone(5,TimeUnit.SECONDS)
        ts.assertNoErrors()
        ts.assertValueCount(10)

        ts.assertValueAt(0){
            it.identityId!=null && it.qualifier == "101"
        }
        ts.assertValueAt(9){
            it.identityId!=null && it.qualifier == "110"
        }
    }

    @Test
    fun `test retrieve identity`() {
        val gaiaRef = Gaia.connect("http://localhost:8080",  credentials)
        val identityId = UUID.randomUUID().toString()

        val publisher = gaiaRef.retrieveIdentity(identityId) {
            identityId()
            qualifier()
        }
        val ts = Flowable.fromPublisher(publisher).test()
        ts.awaitDone(5,TimeUnit.SECONDS)
        ts.assertNoErrors()
        ts.assertValueCount(1)
        ts.assertValueAt(0){
            it.identityId!=null && it.qualifier!=null
        }
    }

    @Test
    fun `test retrieve tenants`() {
        val gaiaRef = Gaia.connect("http://localhost:8080",  credentials)

        val publisher = gaiaRef.retrieveTenants({
            tenantId()
            qualifier()
            implicitIdentities()
            explicitIdentities()
        })
        val ts = Flowable.fromPublisher(publisher).test()
        ts.awaitDone(5,TimeUnit.SECONDS)
        ts.assertNoErrors()
        ts.assertValueCount(1)
        ts.assertValueAt(0){
            it.tenantId!=null && it.qualifier!=null
        }
    }

    @Test
    fun `test retrieve paginated tenants`() {
        val gaiaRef = Gaia.connect("http://localhost:8080",  credentials)

        val publisher = gaiaRef.retrieveTenants({
            tenantId()
            qualifier()
            implicitIdentities()
            explicitIdentities()
        }, 10, 100)
        val ts = Flowable.fromPublisher(publisher).test()
        ts.awaitDone(5,TimeUnit.SECONDS)
        ts.assertNoErrors()
        ts.assertValueCount(10)

        ts.assertValueAt(0){
            it.tenantId!=null && it.qualifier == "101"
        }
        ts.assertValueAt(9){
            it.tenantId!=null && it.qualifier == "110"
        }
    }

    @Test
    fun `test retrieve tenant`() {
        val gaiaRef = Gaia.connect("http://localhost:8080",  credentials)
        val tenantId = UUID.randomUUID().toString()

        val publisher = gaiaRef.retrieveTenant(tenantId) {
            tenantId()
            qualifier()
        }
        val ts = Flowable.fromPublisher(publisher).test()
        ts.awaitDone(5,TimeUnit.SECONDS)
        ts.assertNoErrors()
        ts.assertValueCount(1)
        ts.assertValueAt(0){
            it.tenantId!=null && it.qualifier!=null
        }
    }

    @Test
    fun `test retrieve users`() {
        val gaiaRef = Gaia.connect("http://localhost:8080",  credentials)

        val publisher = gaiaRef.retrieveUsers({
            userId()
            username()
            using2FA()
            groups()
            permissions()
            tenants()
        })
        val ts = Flowable.fromPublisher(publisher).test()
        ts.awaitDone(5,TimeUnit.SECONDS)
        ts.assertNoErrors()
        ts.values().size == 1
        ts.assertValueAt(0){
            it.userId!=null
        }
    }

    @Test
    fun `test retrieve paginated users`() {
        val gaiaRef = Gaia.connect("http://localhost:8080",  credentials)

        val publisher = gaiaRef.retrieveUsers({
            userId()
            username()
            using2FA()
            groups()
            permissions()
            tenants()
        }, 10, 100)
        val ts = Flowable.fromPublisher(publisher).test()
        ts.awaitDone(5,TimeUnit.SECONDS)
        ts.assertNoErrors()
        ts.assertValueCount(10)

        ts.assertValueAt(0){
            it.userId!=null && it.username == "101"
        }
        ts.assertValueAt(9){
            it.userId!=null && it.username == "110"
        }
    }

    @Test
    fun `test retrieve user`() {
        val gaiaRef = Gaia.connect("http://localhost:8080",  credentials)
        val userId = UUID.randomUUID().toString()

        val publisher = gaiaRef.retrieveUser(userId) {
            userId()
            username()
        }
        val ts = Flowable.fromPublisher(publisher).test()
        ts.awaitDone(5,TimeUnit.SECONDS)
        ts.assertNoErrors()
        ts.assertValueCount(1)
        ts.assertValueAt(0){
            it.userId!=null && it.username!=null
        }
    }

    @Test
    fun `test retrieve api keys`() {
        val gaiaRef = Gaia.connect("http://localhost:8080",  credentials)

        val publisher = gaiaRef.retrieveApiKeys({
            apiKeyId()
            name()
            secret()
            enabled()
        })
        val ts = Flowable.fromPublisher(publisher).test()
        ts.awaitDone(5, TimeUnit.SECONDS)
        ts.assertNoErrors()
        ts.assertValueCount(1)
        ts.assertValueAt(0){
            it.apiKeyId!=null && it.name!=null
        }
    }

    @Test
    fun `test retrieve paginated api keys`() {
        val gaiaRef = Gaia.connect("http://localhost:8080",  credentials)

        val publisher = gaiaRef.retrieveApiKeys({
            apiKeyId()
            name()
            secret()
            enabled()
        }, 10, 100)
        val ts = Flowable.fromPublisher(publisher).test()
        ts.awaitDone(5, TimeUnit.SECONDS)
        ts.assertNoErrors()
        ts.assertValueCount(10)

        ts.assertValueAt(0){
            it.apiKeyId!=null && it.name == "101"
        }
        ts.assertValueAt(9){
            it.apiKeyId!=null && it.name == "110"
        }
    }

    @Test
    fun `test retrieve api key`() {
        val gaiaRef = Gaia.connect("http://localhost:8080",  credentials)
        val apiKeyId = UUID.randomUUID().toString()

        val publisher = gaiaRef.retrieveApiKey(apiKeyId) {
            apiKeyId()
            name()
        }
        val ts = Flowable.fromPublisher(publisher).test()
        ts.awaitDone(5, TimeUnit.SECONDS)
        ts.assertNoErrors()
        ts.assertValueCount(1)
        ts.assertValueAt(0){
            it.apiKeyId!=null && it.name!=null
        }
    }

    @Test
    fun `test retrieve behaviours`() {
        val gaiaRef = Gaia.connect("http://localhost:8080",  credentials)
        val identityId = UUID.randomUUID().toString()

        val publisher = gaiaRef.retrieveBehaviours(identityId, {
            identityId()
            reference()
        })
        val ts = Flowable.fromPublisher(publisher).test()
        ts.awaitDone(5,TimeUnit.SECONDS)
        ts.assertNoErrors()
        ts.assertValueCount(1)
        ts.assertValueAt(0){
            it.identityId!=null && it.reference!=null
        }
    }

    @Test
    fun `test retrieve paginiated behaviours`() {
        val gaiaRef = Gaia.connect("http://localhost:8080",  credentials)
        val identityId = UUID.randomUUID().toString()

        val publisher = gaiaRef.retrieveBehaviours(identityId, {
            identityId()
            qualifier()
        }, 10, 100)
        val ts = Flowable.fromPublisher(publisher).test()
        ts.awaitDone(5,TimeUnit.SECONDS)
        ts.assertNoErrors()
        ts.assertValueCount(10)

        ts.assertValueAt(0){
            it.identityId!=null && it.qualifier == "101"
        }
        ts.assertValueAt(9){
            it.identityId!=null && it.qualifier == "110"
        }
    }

    @Test
    fun `test retrieve behaviour`() {
        val gaiaRef = Gaia.connect("http://localhost:8080",  credentials)
        val identityId = UUID.randomUUID().toString()
        val reference = UUID.randomUUID().toString()

        val publisher = gaiaRef.retrieveBehaviour(identityId, reference) {
            identityId()
            reference()
        }
        val ts = Flowable.fromPublisher(publisher).test()
        ts.awaitDone(5,TimeUnit.SECONDS)
        ts.assertNoErrors()
        ts.assertValueCount(1)
        ts.assertValueAt(0){
            it.identityId!=null && it.reference!=null
        }
    }

    @Test
    fun `test retrieve codes`() {
        val gaiaRef = Gaia.connect("http://localhost:8080",  credentials)
        val identityId = UUID.randomUUID().toString()

        val publisher = gaiaRef.retrieveCodes(identityId, {
            identityId()
            reference()
        })
        val ts = Flowable.fromPublisher(publisher).test()
        ts.awaitDone(5,TimeUnit.SECONDS)
        ts.assertNoErrors()
        ts.assertValueCount(1)
        ts.assertValueAt(0){
            it.identityId!=null && it.reference!=null
        }
    }

    @Test
    fun `test retrieve paginiated codes`() {
        val gaiaRef = Gaia.connect("http://localhost:8080",  credentials)
        val identityId = UUID.randomUUID().toString()

        val publisher = gaiaRef.retrieveCodes(identityId, {
            identityId()
            qualifier()
        }, 10, 100)
        val ts = Flowable.fromPublisher(publisher).test()
        ts.awaitDone(5,TimeUnit.SECONDS)
        ts.assertNoErrors()
        ts.assertValueCount(10)

        ts.assertValueAt(0){
            it.identityId!=null && it.qualifier == "101"
        }
        ts.assertValueAt(9){
            it.identityId!=null && it.qualifier == "110"
        }
    }

    @Test
    fun `test retrieve code`() {
        val gaiaRef = Gaia.connect("http://localhost:8080",  credentials)
        val identityId = UUID.randomUUID().toString()
        val reference = UUID.randomUUID().toString()

        val publisher = gaiaRef.retrieveCode(identityId, reference) {
            identityId()
            reference()
        }
        val ts = Flowable.fromPublisher(publisher).test()
        ts.awaitDone(5,TimeUnit.SECONDS)
        ts.assertNoErrors()
        ts.assertValueCount(1)
        ts.assertValueAt(0){
            it.identityId!=null && it.reference!=null
        }

    }

    @Test
    fun `test retrieve intents`() {
        val gaiaRef = Gaia.connect("http://localhost:8080",  credentials)
        val identityId = UUID.randomUUID().toString()

        val publisher = gaiaRef.retrieveIntents(identityId, {
            identityId()
            reference()
        })
        val ts = Flowable.fromPublisher(publisher).test()
        ts.awaitDone(5,TimeUnit.SECONDS)
        ts.assertNoErrors()
        ts.assertValueCount(1)
        ts.assertValueAt(0){
            it.identityId!=null && it.reference!=null
        }
    }

    @Test
    fun `test retrieve paginiated intents`() {
        val gaiaRef = Gaia.connect("http://localhost:8080",  credentials)
        val identityId = UUID.randomUUID().toString()

        val publisher = gaiaRef.retrieveIntents(identityId, {
            identityId()
            qualifier()
        }, 10, 100)
        val ts = Flowable.fromPublisher(publisher).test()
        ts.awaitDone(5,TimeUnit.SECONDS)
        ts.assertNoErrors()
        ts.assertValueCount(10)

        ts.assertValueAt(0){
            it.identityId!=null && it.qualifier == "101"
        }
        ts.assertValueAt(9){
            it.identityId!=null && it.qualifier == "110"
        }
    }

    @Test
    fun `test retrieve intent`() {
        val gaiaRef = Gaia.connect("http://localhost:8080",  credentials)
        val identityId = UUID.randomUUID().toString()
        val reference = UUID.randomUUID().toString()

        val publisher = gaiaRef.retrieveIntent(identityId, reference) {
            identityId()
            reference()
        }
        val ts = Flowable.fromPublisher(publisher).test()
        ts.awaitDone(5,TimeUnit.SECONDS)
        ts.assertNoErrors()
        ts.assertValueCount(1)
        ts.assertValueAt(0){
            it.identityId!=null && it.reference!=null
        }
    }

    @Test
    fun `test retrieve prompts`() {
        val gaiaRef = Gaia.connect("http://localhost:8080",  credentials)
        val identityId = UUID.randomUUID().toString()

        val publisher = gaiaRef.retrievePrompts(identityId, {
            identityId()
            reference()
        })

        val ts = Flowable.fromPublisher(publisher).test()
        ts.awaitDone(5,TimeUnit.SECONDS)
        ts.assertNoErrors()
        ts.assertValueCount(1)
        ts.assertValueAt(0){
            it.identityId!=null && it.reference!=null
        }

    }

    @Test
    fun `test retrieve paginiated prompts`() {
        val gaiaRef = Gaia.connect("http://localhost:8080",  credentials)
        val identityId = UUID.randomUUID().toString()

        val publisher = gaiaRef.retrievePrompts(identityId, {
            identityId()
            qualifier()
        }, 10, 100)
        val ts = Flowable.fromPublisher(publisher).test()
        ts.awaitDone(5,TimeUnit.SECONDS)
        ts.assertNoErrors()
        ts.assertValueCount(10)

        ts.assertValueAt(0){
            it.identityId!=null && it.qualifier == "101"
        }
        ts.assertValueAt(9){
            it.identityId!=null && it.qualifier == "110"
        }
    }

    @Test
    fun `test retrieve prompt`() {
        val gaiaRef = Gaia.connect("http://localhost:8080",  credentials)
        val identityId = UUID.randomUUID().toString()
        val reference = UUID.randomUUID().toString()

        val publisher = gaiaRef.retrievePrompt(identityId, reference) {
            identityId()
            reference()
        }
        val ts = Flowable.fromPublisher(publisher).test()
        ts.awaitDone(5,TimeUnit.SECONDS)
        ts.assertNoErrors()
        ts.assertValueCount(1)
        ts.assertValueAt(0){
            it.identityId!=null && it.reference!=null
        }
    }

    @Test
    fun `test retrieve fulfilments`() {
        val gaiaRef = Gaia.connect("http://localhost:8080",  credentials)
        val identityId = UUID.randomUUID().toString()

        val publisher = gaiaRef.retrieveFulfilments(identityId, {
            identityId()
            reference()
        })
        val ts = Flowable.fromPublisher(publisher).test()
        ts.awaitDone(5,TimeUnit.SECONDS)
        ts.assertNoErrors()
        ts.assertValueCount(1)
        ts.assertValueAt(0){
            it.identityId!=null && it.reference!=null
        }
    }

    @Test
    fun `test retrieve paginiated fulfilments`() {
        val gaiaRef = Gaia.connect("http://localhost:8080",  credentials)
        val identityId = UUID.randomUUID().toString()

        val publisher = gaiaRef.retrieveFulfilments(identityId, {
            identityId()
            qualifier()
        }, 10, 100)
        val ts = Flowable.fromPublisher(publisher).test()
        ts.awaitDone(5,TimeUnit.SECONDS)
        ts.assertNoErrors()
        ts.assertValueCount(10)

        ts.assertValueAt(0){
            it.identityId!=null && it.qualifier == "101"
        }
        ts.assertValueAt(9){
            it.identityId!=null && it.qualifier == "110"
        }
    }

    @Test
    fun `test retrieve fulfilment`() {
        val gaiaRef = Gaia.connect("http://localhost:8080",  credentials)
        val identityId = UUID.randomUUID().toString()
        val reference = UUID.randomUUID().toString()

        val publisher = gaiaRef.retrieveFulfilment(identityId, reference) {
            identityId()
            reference()
        }
        val ts = Flowable.fromPublisher(publisher).test()
        ts.awaitDone(5,TimeUnit.SECONDS)
        ts.assertNoErrors()
        ts.assertValueCount(1)
        ts.assertValueAt(0){
            it.identityId!=null && it.reference!=null
        }
    }

    @Test
    fun `test retrieve statements`() {
        val gaiaRef = Gaia.connect("http://localhost:8080",  credentials)
        val identityId = UUID.randomUUID().toString()

        val publisher = gaiaRef.retrieveStatements(identityId, {
            identityId()
            reference()
        })
        val ts = Flowable.fromPublisher(publisher).test()
        ts.awaitDone(5,TimeUnit.SECONDS)
        ts.assertNoErrors()
        ts.assertValueCount(1)
        ts.assertValueAt(0){
            it.identityId!=null && it.reference!=null
        }
    }

    @Test
    fun `test retrieve paginiated statements`() {
        val gaiaRef = Gaia.connect("http://localhost:8080",  credentials)
        val identityId = UUID.randomUUID().toString()

        val publisher = gaiaRef.retrieveStatements(identityId, {
            identityId()
            qualifier()
        }, 10, 100)
        val ts = Flowable.fromPublisher(publisher).test()
        ts.awaitDone(5,TimeUnit.SECONDS)
        ts.assertNoErrors()
        ts.assertValueCount(10)

        ts.assertValueAt(0){
            it.identityId!=null && it.qualifier == "101"
        }
        ts.assertValueAt(9){
            it.identityId!=null && it.qualifier == "110"
        }
    }

    @Test
    fun `test retrieve statement`() {
        val gaiaRef = Gaia.connect("http://localhost:8080",  credentials)
        val identityId = UUID.randomUUID().toString()
        val reference = UUID.randomUUID().toString()

        val publisher = gaiaRef.retrieveStatement(identityId, reference) {
            identityId()
            reference()
        }
        val ts = Flowable.fromPublisher(publisher).test()
        ts.awaitDone(5,TimeUnit.SECONDS)
        ts.assertNoErrors()
        ts.assertValueCount(1)
        ts.assertValueAt(0){
            it.identityId!=null && it.reference!=null
        }
    }

    @Test
    fun `test retrieve edges`() {
        val gaiaRef = Gaia.connect("http://localhost:8080",  credentials)
        val source = UUID.randomUUID().toString()

        val publisher = gaiaRef.retrieveEdges(source, {
            source()
            target()
        })
        val ts = Flowable.fromPublisher(publisher).test()
        ts.awaitDone(5,TimeUnit.SECONDS)
        ts.assertNoErrors()
        ts.assertValueCount(1)
        ts.assertValueAt(0){
            it.source!=null && it.target!=null
        }
    }

    @Test
    fun `test retrieve paginiated edges`() {
        val gaiaRef = Gaia.connect("http://localhost:8080",  credentials)
        val source = UUID.randomUUID().toString()

        val publisher = gaiaRef.retrieveEdges(source, {
            source()
            target()
            type()
        }, 10, 100)
        val ts = Flowable.fromPublisher(publisher).test()
        ts.awaitDone(5,TimeUnit.SECONDS)
        ts.assertNoErrors()
        ts.assertValueCount(10)

        ts.assertValueAt(0){
            it.source!=null && it.type == "101"
        }
        ts.assertValueAt(9){
            it.source!=null && it.type == "110"
        }
    }

    @Test
    fun `test retrieve knowledge edge`() {
        val gaiaRef = Gaia.connect("http://localhost:8080",  credentials)
        val source = UUID.randomUUID().toString()
        val target = UUID.randomUUID().toString()

        val publisher = gaiaRef.retrieveEdge(source, target) {
            source()
            target()
        }
        val ts = Flowable.fromPublisher(publisher).test()
        ts.awaitDone(5,TimeUnit.SECONDS)
        ts.assertNoErrors()
        ts.assertValueCount(1)
        ts.assertValueAt(0){
            it.source!=null && it.target!=null
        }
    }

    @Test
    fun `test retrieve skills`() {
        val gaiaRef = Gaia.connect("http://localhost:8080",  credentials)
        val tenantId = UUID.randomUUID().toString()

        val publisher = gaiaRef.retrieveSkills(tenantId, {
            tenantId()
            reference()
        })
        val ts = Flowable.fromPublisher(publisher).test()
        ts.awaitDone(5,TimeUnit.SECONDS)
        ts.assertNoErrors()
        ts.assertValueCount(1)
        ts.assertValueAt(0){
            it.tenantId!=null && it.reference!=null
        }
    }

    @Test
    fun `test retrieve paginiated skills`() {
        val gaiaRef = Gaia.connect("http://localhost:8080",  credentials)
        val tenantId = UUID.randomUUID().toString()

        val publisher = gaiaRef.retrieveSkills(tenantId, {
            tenantId()
            qualifier()
        }, 10, 100)
        val ts = Flowable.fromPublisher(publisher).test()
        ts.awaitDone(5,TimeUnit.SECONDS)
        ts.assertNoErrors()
        ts.assertValueCount(10)

        ts.assertValueAt(0){
            it.tenantId!=null && it.qualifier == "101"
        }
        ts.assertValueAt(9){
            it.tenantId!=null && it.qualifier == "110"
        }
    }

    @Test
    fun `test retrieve skill`() {
        val gaiaRef = Gaia.connect("http://localhost:8080",  credentials)
        val tenantId = UUID.randomUUID().toString()
        val reference = UUID.randomUUID().toString()

        val publisher = gaiaRef.retrieveSkill(tenantId, reference) {
            tenantId()
            reference()
        }
        val ts = Flowable.fromPublisher(publisher).test()
        ts.awaitDone(5,TimeUnit.SECONDS)
        ts.assertNoErrors()
        ts.assertValueCount(1)
        ts.assertValueAt(0){
            it.tenantId!=null && it.reference!=null
        }
    }

    @Test
    fun `test retrieve skillProvisions`() {
        val gaiaRef = Gaia.connect("http://localhost:8080",  credentials)
        val tenantId = UUID.randomUUID().toString()

        val publisher = gaiaRef.retrieveSkillProvisions(tenantId, {
            tenantId()
            reference()
        })
        val ts = Flowable.fromPublisher(publisher).test()
        ts.awaitDone(5,TimeUnit.SECONDS)
        ts.assertNoErrors()
        ts.assertValueCount(1)
        println(ts.values())
        ts.assertValueAt(0){
            it.tenantId!=null && it.reference!=null
        }
    }

    @Test
    fun `test retrieve paginiated skillProvisions`() {
        val gaiaRef = Gaia.connect("http://localhost:8080",  credentials)
        val tenantId = UUID.randomUUID().toString()

        val publisher = gaiaRef.retrieveSkillProvisions(tenantId, {
            tenantId()
            qualifier()
        }, 10, 100)
        val ts = Flowable.fromPublisher(publisher).test()
        ts.awaitDone(5,TimeUnit.SECONDS)
        ts.assertNoErrors()
        ts.assertValueCount(10)

        ts.assertValueAt(0){
            it.tenantId!=null && it.qualifier == "101"
        }
        ts.assertValueAt(9){
            it.tenantId!=null && it.qualifier == "110"
        }
    }

    @Test
    fun `test retrieve skillProvision`() {
        val gaiaRef = Gaia.connect("http://localhost:8080",  credentials)
        val tenantId = UUID.randomUUID().toString()
        val reference = UUID.randomUUID().toString()

        val publisher = gaiaRef.retrieveSkillProvision(tenantId, reference) {
            tenantId()
            reference()
        }
        val ts = Flowable.fromPublisher(publisher).test()
        ts.awaitDone(5,TimeUnit.SECONDS)
        ts.assertNoErrors()
        ts.assertValueCount(1)
        ts.assertValueAt(0){
            it.tenantId!=null && it.reference!=null
        }
    }

    @Test
    fun `test retrieve error handling`() {
        val gaiaRef = Gaia.connect("http://localhost:8080",  credentials)
        val identityId = "eeeeeeee-eeee-eeee-eeee-eeeeeeeeeeee"
        val reference = UUID.randomUUID().toString()

        val publisher = gaiaRef.retrieveIntent(identityId, reference) {
            identityId()
            reference()
        }
        val ts = Flowable.fromPublisher(publisher).test()
        ts.awaitDone(5,TimeUnit.SECONDS)
        ts.assertError { it.message == "forced error" }
        ts.assertNoValues()
    }

}
