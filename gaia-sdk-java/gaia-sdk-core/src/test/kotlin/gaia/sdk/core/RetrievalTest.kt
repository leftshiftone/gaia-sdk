package gaia.sdk.core

import gaia.sdk.GaiaCredentials
import gaia.sdk.GaiaResponse
import gaia.sdk.response.type.*
import io.reactivex.Flowable
import org.junit.jupiter.api.BeforeAll
import org.junit.jupiter.api.Disabled
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.TestInstance
import java.lang.RuntimeException
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
        Gaia.transporterFactory = MockTransporterFactory { request -> Flowable.just(GaiaResponse.QueryResponse(Query(retrieve = Retrieval(knowledge = Knowledge(identities = listOf(Identity(identityId = UUID.randomUUID().toString(), qualifier = "q1"))))))) }
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
        Gaia.transporterFactory = MockTransporterFactory { request -> Flowable.just(GaiaResponse.QueryResponse(Query(retrieve = Retrieval(knowledge = Knowledge(identities = listOf(
                Identity(identityId = UUID.randomUUID().toString(), qualifier = "101"),
                Identity(identityId = UUID.randomUUID().toString(), qualifier = "102"),
                Identity(identityId = UUID.randomUUID().toString(), qualifier = "103"),
                Identity(identityId = UUID.randomUUID().toString(), qualifier = "104"),
                Identity(identityId = UUID.randomUUID().toString(), qualifier = "105"),
                Identity(identityId = UUID.randomUUID().toString(), qualifier = "106"),
                Identity(identityId = UUID.randomUUID().toString(), qualifier = "107"),
                Identity(identityId = UUID.randomUUID().toString(), qualifier = "108"),
                Identity(identityId = UUID.randomUUID().toString(), qualifier = "109"),
                Identity(identityId = UUID.randomUUID().toString(), qualifier = "110")
        )))))) }
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
        Gaia.transporterFactory = MockTransporterFactory { request -> Flowable.just(GaiaResponse.QueryResponse(Query(retrieve = Retrieval(knowledge = Knowledge(identity = Identity(identityId = UUID.randomUUID().toString(), qualifier = "q1")))))) }
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
        Gaia.transporterFactory = MockTransporterFactory { request -> Flowable.just(GaiaResponse.QueryResponse(Query(retrieve = Retrieval(knowledge = Knowledge(tenants = listOf(Tenant(tenantId = UUID.randomUUID().toString(), qualifier = "q1"))))))) }
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
        Gaia.transporterFactory = MockTransporterFactory { request -> Flowable.just(GaiaResponse.QueryResponse(Query(retrieve = Retrieval(knowledge = Knowledge(tenants = listOf(
                Tenant(tenantId = UUID.randomUUID().toString(), qualifier = "101"),
                Tenant(tenantId = UUID.randomUUID().toString(), qualifier = "102"),
                Tenant(tenantId = UUID.randomUUID().toString(), qualifier = "103"),
                Tenant(tenantId = UUID.randomUUID().toString(), qualifier = "104"),
                Tenant(tenantId = UUID.randomUUID().toString(), qualifier = "105"),
                Tenant(tenantId = UUID.randomUUID().toString(), qualifier = "106"),
                Tenant(tenantId = UUID.randomUUID().toString(), qualifier = "107"),
                Tenant(tenantId = UUID.randomUUID().toString(), qualifier = "108"),
                Tenant(tenantId = UUID.randomUUID().toString(), qualifier = "109"),
                Tenant(tenantId = UUID.randomUUID().toString(), qualifier = "110")
        )))))) }
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
        Gaia.transporterFactory = MockTransporterFactory { request -> Flowable.just(GaiaResponse.QueryResponse(Query(retrieve = Retrieval(knowledge = Knowledge(tenant = Tenant(tenantId = UUID.randomUUID().toString(), qualifier = "q1")))))) }
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
        Gaia.transporterFactory = MockTransporterFactory { request -> Flowable.just(GaiaResponse.QueryResponse(Query(retrieve = Retrieval(knowledge = Knowledge(users = listOf(User(userId = UUID.randomUUID().toString(), username = "q1"))))))) }
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
        Gaia.transporterFactory = MockTransporterFactory { request -> Flowable.just(GaiaResponse.QueryResponse(Query(retrieve = Retrieval(knowledge = Knowledge(users = listOf(
                User(userId = UUID.randomUUID().toString(), username = "101"),
                User(userId = UUID.randomUUID().toString(), username = "102"),
                User(userId = UUID.randomUUID().toString(), username = "103"),
                User(userId = UUID.randomUUID().toString(), username = "104"),
                User(userId = UUID.randomUUID().toString(), username = "105"),
                User(userId = UUID.randomUUID().toString(), username = "106"),
                User(userId = UUID.randomUUID().toString(), username = "107"),
                User(userId = UUID.randomUUID().toString(), username = "108"),
                User(userId = UUID.randomUUID().toString(), username = "109"),
                User(userId = UUID.randomUUID().toString(), username = "110")
        )))))) }
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
        Gaia.transporterFactory = MockTransporterFactory { request -> Flowable.just(GaiaResponse.QueryResponse(Query(retrieve = Retrieval(knowledge = Knowledge(user = User(userId = UUID.randomUUID().toString(), username = "q1")))))) }
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
    fun `test retrieve behaviours`() {
        Gaia.transporterFactory = MockTransporterFactory { request -> Flowable.just(GaiaResponse.QueryResponse(Query(retrieve = Retrieval(knowledge = Knowledge(behaviours = listOf(Behaviour(identityId = UUID.randomUUID().toString(), reference = UUID.randomUUID().toString()))))))) }
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
        Gaia.transporterFactory = MockTransporterFactory { request -> Flowable.just(GaiaResponse.QueryResponse(Query(retrieve = Retrieval(knowledge = Knowledge(behaviours = listOf(
                Behaviour(identityId = UUID.randomUUID().toString(), qualifier = "101"),
                Behaviour(identityId = UUID.randomUUID().toString(), qualifier = "102"),
                Behaviour(identityId = UUID.randomUUID().toString(), qualifier = "103"),
                Behaviour(identityId = UUID.randomUUID().toString(), qualifier = "104"),
                Behaviour(identityId = UUID.randomUUID().toString(), qualifier = "105"),
                Behaviour(identityId = UUID.randomUUID().toString(), qualifier = "106"),
                Behaviour(identityId = UUID.randomUUID().toString(), qualifier = "107"),
                Behaviour(identityId = UUID.randomUUID().toString(), qualifier = "108"),
                Behaviour(identityId = UUID.randomUUID().toString(), qualifier = "109"),
                Behaviour(identityId = UUID.randomUUID().toString(), qualifier = "110")
        )))))) }
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
        Gaia.transporterFactory = MockTransporterFactory { request -> Flowable.just(GaiaResponse.QueryResponse(Query(retrieve = Retrieval(knowledge = Knowledge(behaviour = Behaviour(identityId = UUID.randomUUID().toString(), reference = UUID.randomUUID().toString())))))) }
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
        Gaia.transporterFactory = MockTransporterFactory { request -> Flowable.just(GaiaResponse.QueryResponse(Query(retrieve = Retrieval(knowledge = Knowledge(codes = listOf(Code(identityId = UUID.randomUUID().toString(), reference = UUID.randomUUID().toString()))))))) }
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
        Gaia.transporterFactory = MockTransporterFactory { request -> Flowable.just(GaiaResponse.QueryResponse(Query(retrieve = Retrieval(knowledge = Knowledge(codes = listOf(
                Code(identityId = UUID.randomUUID().toString(), qualifier = "101"),
                Code(identityId = UUID.randomUUID().toString(), qualifier = "102"),
                Code(identityId = UUID.randomUUID().toString(), qualifier = "103"),
                Code(identityId = UUID.randomUUID().toString(), qualifier = "104"),
                Code(identityId = UUID.randomUUID().toString(), qualifier = "105"),
                Code(identityId = UUID.randomUUID().toString(), qualifier = "106"),
                Code(identityId = UUID.randomUUID().toString(), qualifier = "107"),
                Code(identityId = UUID.randomUUID().toString(), qualifier = "108"),
                Code(identityId = UUID.randomUUID().toString(), qualifier = "109"),
                Code(identityId = UUID.randomUUID().toString(), qualifier = "110")
        )))))) }
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
        Gaia.transporterFactory = MockTransporterFactory { request -> Flowable.just(GaiaResponse.QueryResponse(Query(retrieve = Retrieval(knowledge = Knowledge(code = Code(identityId = UUID.randomUUID().toString(), reference = UUID.randomUUID().toString())))))) }
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
        Gaia.transporterFactory = MockTransporterFactory { request -> Flowable.just(GaiaResponse.QueryResponse(Query(retrieve = Retrieval(knowledge = Knowledge(intents = listOf(Intent(identityId = UUID.randomUUID().toString(), reference = UUID.randomUUID().toString()))))))) }
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
        Gaia.transporterFactory = MockTransporterFactory { request -> Flowable.just(GaiaResponse.QueryResponse(Query(retrieve = Retrieval(knowledge = Knowledge(intents = listOf(
                Intent(identityId = UUID.randomUUID().toString(), qualifier = "101"),
                Intent(identityId = UUID.randomUUID().toString(), qualifier = "102"),
                Intent(identityId = UUID.randomUUID().toString(), qualifier = "103"),
                Intent(identityId = UUID.randomUUID().toString(), qualifier = "104"),
                Intent(identityId = UUID.randomUUID().toString(), qualifier = "105"),
                Intent(identityId = UUID.randomUUID().toString(), qualifier = "106"),
                Intent(identityId = UUID.randomUUID().toString(), qualifier = "107"),
                Intent(identityId = UUID.randomUUID().toString(), qualifier = "108"),
                Intent(identityId = UUID.randomUUID().toString(), qualifier = "109"),
                Intent(identityId = UUID.randomUUID().toString(), qualifier = "110")
        )))))) }
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
        Gaia.transporterFactory = MockTransporterFactory { request -> Flowable.just(GaiaResponse.QueryResponse(Query(retrieve = Retrieval(knowledge = Knowledge(intent = Intent(identityId = UUID.randomUUID().toString(), reference = UUID.randomUUID().toString())))))) }
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
        Gaia.transporterFactory = MockTransporterFactory { request -> Flowable.just(GaiaResponse.QueryResponse(Query(retrieve = Retrieval(knowledge = Knowledge(prompts = listOf(Prompt(identityId = UUID.randomUUID().toString(), reference = UUID.randomUUID().toString()))))))) }
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
        Gaia.transporterFactory = MockTransporterFactory { request -> Flowable.just(GaiaResponse.QueryResponse(Query(retrieve = Retrieval(knowledge = Knowledge(prompts = listOf(
                Prompt(identityId = UUID.randomUUID().toString(), qualifier = "101"),
                Prompt(identityId = UUID.randomUUID().toString(), qualifier = "102"),
                Prompt(identityId = UUID.randomUUID().toString(), qualifier = "103"),
                Prompt(identityId = UUID.randomUUID().toString(), qualifier = "104"),
                Prompt(identityId = UUID.randomUUID().toString(), qualifier = "105"),
                Prompt(identityId = UUID.randomUUID().toString(), qualifier = "106"),
                Prompt(identityId = UUID.randomUUID().toString(), qualifier = "107"),
                Prompt(identityId = UUID.randomUUID().toString(), qualifier = "108"),
                Prompt(identityId = UUID.randomUUID().toString(), qualifier = "109"),
                Prompt(identityId = UUID.randomUUID().toString(), qualifier = "110")
        )))))) }
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
        Gaia.transporterFactory = MockTransporterFactory { request -> Flowable.just(GaiaResponse.QueryResponse(Query(retrieve = Retrieval(knowledge = Knowledge(prompt = Prompt(identityId = UUID.randomUUID().toString(), reference = UUID.randomUUID().toString())))))) }
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
        Gaia.transporterFactory = MockTransporterFactory { request -> Flowable.just(GaiaResponse.QueryResponse(Query(retrieve = Retrieval(knowledge = Knowledge(fulfilments = listOf(Fulfilment(identityId = UUID.randomUUID().toString(), reference = UUID.randomUUID().toString()))))))) }
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
        Gaia.transporterFactory = MockTransporterFactory { request -> Flowable.just(GaiaResponse.QueryResponse(Query(retrieve = Retrieval(knowledge = Knowledge(fulfilments = listOf(
                Fulfilment(identityId = UUID.randomUUID().toString(), qualifier = "101"),
                Fulfilment(identityId = UUID.randomUUID().toString(), qualifier = "102"),
                Fulfilment(identityId = UUID.randomUUID().toString(), qualifier = "103"),
                Fulfilment(identityId = UUID.randomUUID().toString(), qualifier = "104"),
                Fulfilment(identityId = UUID.randomUUID().toString(), qualifier = "105"),
                Fulfilment(identityId = UUID.randomUUID().toString(), qualifier = "106"),
                Fulfilment(identityId = UUID.randomUUID().toString(), qualifier = "107"),
                Fulfilment(identityId = UUID.randomUUID().toString(), qualifier = "108"),
                Fulfilment(identityId = UUID.randomUUID().toString(), qualifier = "109"),
                Fulfilment(identityId = UUID.randomUUID().toString(), qualifier = "110")
        )))))) }
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
        Gaia.transporterFactory = MockTransporterFactory { request -> Flowable.just(GaiaResponse.QueryResponse(Query(retrieve = Retrieval(knowledge = Knowledge(fulfilment = Fulfilment(identityId = UUID.randomUUID().toString(), reference = UUID.randomUUID().toString())))))) }
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
        Gaia.transporterFactory = MockTransporterFactory { request -> Flowable.just(GaiaResponse.QueryResponse(Query(retrieve = Retrieval(knowledge = Knowledge(statements = listOf(Statement(identityId = UUID.randomUUID().toString(), reference = UUID.randomUUID().toString()))))))) }
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
        Gaia.transporterFactory = MockTransporterFactory { request -> Flowable.just(GaiaResponse.QueryResponse(Query(retrieve = Retrieval(knowledge = Knowledge(statements = listOf(
                Statement(identityId = UUID.randomUUID().toString(), qualifier = "101"),
                Statement(identityId = UUID.randomUUID().toString(), qualifier = "102"),
                Statement(identityId = UUID.randomUUID().toString(), qualifier = "103"),
                Statement(identityId = UUID.randomUUID().toString(), qualifier = "104"),
                Statement(identityId = UUID.randomUUID().toString(), qualifier = "105"),
                Statement(identityId = UUID.randomUUID().toString(), qualifier = "106"),
                Statement(identityId = UUID.randomUUID().toString(), qualifier = "107"),
                Statement(identityId = UUID.randomUUID().toString(), qualifier = "108"),
                Statement(identityId = UUID.randomUUID().toString(), qualifier = "109"),
                Statement(identityId = UUID.randomUUID().toString(), qualifier = "110")
        )))))) }
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
        Gaia.transporterFactory = MockTransporterFactory { request -> Flowable.just(GaiaResponse.QueryResponse(Query(retrieve = Retrieval(knowledge = Knowledge(statement = Statement(identityId = UUID.randomUUID().toString(), reference = UUID.randomUUID().toString())))))) }
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
        Gaia.transporterFactory = MockTransporterFactory { request -> Flowable.just(GaiaResponse.QueryResponse(Query(retrieve = Retrieval(knowledge = Knowledge(edges = listOf(Edge(source = UUID.randomUUID().toString(), target = UUID.randomUUID().toString()))))))) }
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
        Gaia.transporterFactory = MockTransporterFactory { request -> Flowable.just(GaiaResponse.QueryResponse(Query(retrieve = Retrieval(knowledge = Knowledge(edges = listOf(
                Edge(source = UUID.randomUUID().toString(), type = "101"),
                Edge(source = UUID.randomUUID().toString(), type = "102"),
                Edge(source = UUID.randomUUID().toString(), type = "103"),
                Edge(source = UUID.randomUUID().toString(), type = "104"),
                Edge(source = UUID.randomUUID().toString(), type = "105"),
                Edge(source = UUID.randomUUID().toString(), type = "106"),
                Edge(source = UUID.randomUUID().toString(), type = "107"),
                Edge(source = UUID.randomUUID().toString(), type = "108"),
                Edge(source = UUID.randomUUID().toString(), type = "109"),
                Edge(source = UUID.randomUUID().toString(), type = "110")
        )))))) }
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
        Gaia.transporterFactory = MockTransporterFactory { request -> Flowable.just(GaiaResponse.QueryResponse(Query(retrieve = Retrieval(knowledge = Knowledge(edge = Edge(source = UUID.randomUUID().toString(), target = UUID.randomUUID().toString())))))) }
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
        Gaia.transporterFactory = MockTransporterFactory { request -> Flowable.just(GaiaResponse.QueryResponse(Query(retrieve = Retrieval(knowledge = Knowledge(skills = listOf(Skill(tenantId = UUID.randomUUID().toString(), reference = UUID.randomUUID().toString()))))))) }
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
        Gaia.transporterFactory = MockTransporterFactory { request -> Flowable.just(GaiaResponse.QueryResponse(Query(retrieve = Retrieval(knowledge = Knowledge(skills = listOf(
                Skill(tenantId = UUID.randomUUID().toString(), qualifier = "101"),
                Skill(tenantId = UUID.randomUUID().toString(), qualifier = "102"),
                Skill(tenantId = UUID.randomUUID().toString(), qualifier = "103"),
                Skill(tenantId = UUID.randomUUID().toString(), qualifier = "104"),
                Skill(tenantId = UUID.randomUUID().toString(), qualifier = "105"),
                Skill(tenantId = UUID.randomUUID().toString(), qualifier = "106"),
                Skill(tenantId = UUID.randomUUID().toString(), qualifier = "107"),
                Skill(tenantId = UUID.randomUUID().toString(), qualifier = "108"),
                Skill(tenantId = UUID.randomUUID().toString(), qualifier = "109"),
                Skill(tenantId = UUID.randomUUID().toString(), qualifier = "110")
        )))))) }
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
        Gaia.transporterFactory = MockTransporterFactory { request -> Flowable.just(GaiaResponse.QueryResponse(Query(retrieve = Retrieval(knowledge = Knowledge(skill = Skill(tenantId = UUID.randomUUID().toString(), reference = UUID.randomUUID().toString())))))) }
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
        Gaia.transporterFactory = MockTransporterFactory { request -> Flowable.just(GaiaResponse.QueryResponse(Query(retrieve = Retrieval(knowledge = Knowledge(skillProvisions = listOf(SkillProvision(tenantId = UUID.randomUUID().toString(), reference = UUID.randomUUID().toString()))))))) }
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
        Gaia.transporterFactory = MockTransporterFactory { request -> Flowable.just(GaiaResponse.QueryResponse(Query(retrieve = Retrieval(knowledge = Knowledge(skillProvisions = listOf(
                SkillProvision(tenantId = UUID.randomUUID().toString(), qualifier = "101"),
                SkillProvision(tenantId = UUID.randomUUID().toString(), qualifier = "102"),
                SkillProvision(tenantId = UUID.randomUUID().toString(), qualifier = "103"),
                SkillProvision(tenantId = UUID.randomUUID().toString(), qualifier = "104"),
                SkillProvision(tenantId = UUID.randomUUID().toString(), qualifier = "105"),
                SkillProvision(tenantId = UUID.randomUUID().toString(), qualifier = "106"),
                SkillProvision(tenantId = UUID.randomUUID().toString(), qualifier = "107"),
                SkillProvision(tenantId = UUID.randomUUID().toString(), qualifier = "108"),
                SkillProvision(tenantId = UUID.randomUUID().toString(), qualifier = "109"),
                SkillProvision(tenantId = UUID.randomUUID().toString(), qualifier = "110")
        )))))) }
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
        Gaia.transporterFactory = MockTransporterFactory { request -> Flowable.just(GaiaResponse.QueryResponse(Query(retrieve = Retrieval(knowledge = Knowledge(skillProvision = SkillProvision(tenantId = UUID.randomUUID().toString(), reference = UUID.randomUUID().toString())))))) }
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
        Gaia.transporterFactory = MockTransporterFactory { request -> Flowable.error(RuntimeException("forced error")) }
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
