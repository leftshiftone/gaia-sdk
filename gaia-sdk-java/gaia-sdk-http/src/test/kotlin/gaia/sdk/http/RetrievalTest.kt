package gaia.sdk.http

import io.reactivex.Flowable
import org.junit.jupiter.api.Test
import java.util.*
import java.util.concurrent.TimeUnit

class RetrievalTest {

    @Test
    fun `test retrieve behaviours`() {
        val gaiaRef = Gaia.connect("http://localhost:8080", "apiKey", "apiSecret")
        val identityId = UUID.randomUUID().toString()

        val publisher = gaiaRef.retrieveBehaviours(identityId) {
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
    fun `test retrieve behaviour`() {
        val gaiaRef = Gaia.connect("http://localhost:8080", "apiKey", "apiSecret")
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
        val gaiaRef = Gaia.connect("http://localhost:8080", "apiKey", "apiSecret")
        val identityId = UUID.randomUUID().toString()

        val publisher = gaiaRef.retrieveCodes(identityId) {
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
    fun `test retrieve code`() {
        val gaiaRef = Gaia.connect("http://localhost:8080", "apiKey", "apiSecret")
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
        val gaiaRef = Gaia.connect("http://localhost:8080", "apiKey", "apiSecret")
        val identityId = UUID.randomUUID().toString()

        val publisher = gaiaRef.retrieveIntents(identityId) {
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
    fun `test retrieve intent`() {
        val gaiaRef = Gaia.connect("http://localhost:8080", "apiKey", "apiSecret")
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
        val gaiaRef = Gaia.connect("http://localhost:8080", "apiKey", "apiSecret")
        val identityId = UUID.randomUUID().toString()

        val publisher = gaiaRef.retrievePrompts(identityId) {
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
    fun `test retrieve prompt`() {
        val gaiaRef = Gaia.connect("http://localhost:8080", "apiKey", "apiSecret")
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
        val gaiaRef = Gaia.connect("http://localhost:8080", "apiKey", "apiSecret")
        val identityId = UUID.randomUUID().toString()

        val publisher = gaiaRef.retrieveFulfilments(identityId) {
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
    fun `test retrieve fulfilment`() {
        val gaiaRef = Gaia.connect("http://localhost:8080", "apiKey", "apiSecret")
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
        val gaiaRef = Gaia.connect("http://localhost:8080", "apiKey", "apiSecret")
        val identityId = UUID.randomUUID().toString()

        val publisher = gaiaRef.retrieveStatements(identityId) {
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
    fun `test retrieve statement`() {
        val gaiaRef = Gaia.connect("http://localhost:8080", "apiKey", "apiSecret")
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
        val gaiaRef = Gaia.connect("http://localhost:8080", "apiKey", "apiSecret")
        val source = UUID.randomUUID().toString()

        val publisher = gaiaRef.retrieveEdges(source) {
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
    fun `test retrieve knowledge edge`() {
        val gaiaRef = Gaia.connect("http://localhost:8080", "apiKey", "apiSecret")
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

}
