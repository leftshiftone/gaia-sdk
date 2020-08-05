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
