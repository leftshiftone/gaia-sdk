package gaia.sdk.http

import gaia.sdk.request.input.*
import org.junit.jupiter.api.Assertions
import org.junit.jupiter.api.Disabled
import org.junit.jupiter.api.Test
import reactor.core.publisher.Flux
import java.util.*

class PreservationTest {

    @Test
    fun `test preserve create intent`() {
        val gaiaRef = Gaia.connect("http://localhost:8080", "apiKey", "apiSecret")
        val impulse = CreateIntentImpulse(UUID.randomUUID().toString(), "", "", emptyMap(), emptyArray(), "")

        val publisher = gaiaRef.preserveCreateIntents(impulse)
        val result = Flux.from(publisher).blockFirst()

        Assertions.assertNotNull(result)
        Assertions.assertNotNull(result!!.id)
    }

    @Test
    fun `test preserve update intent`() {
        val gaiaRef = Gaia.connect("http://localhost:8080", "apiKey", "apiSecret")
        val impulse = UpdateIntentImpulse(UUID.randomUUID().toString(), UUID.randomUUID().toString(), "", "", emptyMap(), emptyArray(), "")

        val publisher = gaiaRef.preserveUpdateIntents(impulse)
        val result = Flux.from(publisher).blockFirst()

        Assertions.assertNotNull(result)
        Assertions.assertNotNull(result!!.id)
    }

    @Test
    fun `test preserve delete intent`() {
        val gaiaRef = Gaia.connect("http://localhost:8080", "apiKey", "apiSecret")
        val impulse = DeleteIntentImpulse(UUID.randomUUID().toString(), UUID.randomUUID().toString())

        val publisher = gaiaRef.preserveDeleteIntents(impulse)
        val result = Flux.from(publisher).blockFirst()

        Assertions.assertNotNull(result)
        Assertions.assertNotNull(result!!.id)
    }

    @Test
    fun `test preserve create prompt`() {
        val gaiaRef = Gaia.connect("http://localhost:8080", "apiKey", "apiSecret")
        val impulse = CreatePromptImpulse(UUID.randomUUID().toString(), "", "", emptyMap(), emptyArray(), "")

        val publisher = gaiaRef.preserveCreatePrompts(impulse)
        val result = Flux.from(publisher).blockFirst()

        Assertions.assertNotNull(result)
        Assertions.assertNotNull(result!!.id)
    }

    @Test
    fun `test preserve update prompt`() {
        val gaiaRef = Gaia.connect("http://localhost:8080", "apiKey", "apiSecret")
        val impulse = UpdatePromptImpulse(UUID.randomUUID().toString(), UUID.randomUUID().toString(), "", "", emptyMap(), emptyArray(), "")

        val publisher = gaiaRef.preserveUpdatePrompts(impulse)
        val result = Flux.from(publisher).blockFirst()

        Assertions.assertNotNull(result)
        Assertions.assertNotNull(result!!.id)
    }

    @Test
    fun `test preserve delete prompt`() {
        val gaiaRef = Gaia.connect("http://localhost:8080", "apiKey", "apiSecret")
        val impulse = DeletePromptImpulse(UUID.randomUUID().toString(), UUID.randomUUID().toString())

        val publisher = gaiaRef.preserveDeletePrompts(impulse)
        val result = Flux.from(publisher).blockFirst()

        Assertions.assertNotNull(result)
        Assertions.assertNotNull(result!!.id)
    }

    @Test
    fun `test preserve create statement`() {
        val gaiaRef = Gaia.connect("http://localhost:8080", "apiKey", "apiSecret")
        val impulse = CreateStatementImpulse(UUID.randomUUID().toString(), "", "", emptyMap(), emptyArray(), "")

        val publisher = gaiaRef.preserveCreateStatements(impulse)
        val result = Flux.from(publisher).blockFirst()

        Assertions.assertNotNull(result)
        Assertions.assertNotNull(result!!.id)
    }

    @Test
    fun `test preserve update statement`() {
        val gaiaRef = Gaia.connect("http://localhost:8080", "apiKey", "apiSecret")
        val impulse = UpdateStatementImpulse(UUID.randomUUID().toString(), UUID.randomUUID().toString(), "", "", emptyMap(), emptyArray(), "")

        val publisher = gaiaRef.preserveUpdateStatements(impulse)
        val result = Flux.from(publisher).blockFirst()

        Assertions.assertNotNull(result)
        Assertions.assertNotNull(result!!.id)
    }

    @Test
    fun `test preserve delete statement`() {
        val gaiaRef = Gaia.connect("http://localhost:8080", "apiKey", "apiSecret")
        val impulse = DeleteStatementImpulse(UUID.randomUUID().toString(), UUID.randomUUID().toString())

        val publisher = gaiaRef.preserveDeleteStatements(impulse)
        val result = Flux.from(publisher).blockFirst()

        Assertions.assertNotNull(result)
        Assertions.assertNotNull(result!!.id)
    }

    @Test
    fun `test preserve create fulfilment`() {
        val gaiaRef = Gaia.connect("http://localhost:8080", "apiKey", "apiSecret")
        val impulse = CreateFulfilmentImpulse(UUID.randomUUID().toString(), "", "", emptyMap(), emptyArray(), "")

        val publisher = gaiaRef.preserveCreateFulfilments(impulse)
        val result = Flux.from(publisher).blockFirst()

        Assertions.assertNotNull(result)
        Assertions.assertNotNull(result!!.id)
    }

    @Test
    fun `test preserve update fulfilment`() {
        val gaiaRef = Gaia.connect("http://localhost:8080", "apiKey", "apiSecret")
        val impulse = UpdateFulfilmentImpulse(UUID.randomUUID().toString(), UUID.randomUUID().toString(), "", "", emptyMap(), emptyArray(), "")

        val publisher = gaiaRef.preserveUpdateFulfilments(impulse)
        val result = Flux.from(publisher).blockFirst()

        Assertions.assertNotNull(result)
        Assertions.assertNotNull(result!!.id)
    }

    @Test
    fun `test preserve delete fulfilment`() {
        val gaiaRef = Gaia.connect("http://localhost:8080", "apiKey", "apiSecret")
        val impulse = DeleteFulfilmentImpulse(UUID.randomUUID().toString(), UUID.randomUUID().toString())

        val publisher = gaiaRef.preserveDeleteFulfilments(impulse)
        val result = Flux.from(publisher).blockFirst()

        Assertions.assertNotNull(result)
        Assertions.assertNotNull(result!!.id)
    }

    @Test
    fun `test preserve create behaviour`() {
        val gaiaRef = Gaia.connect("http://localhost:8080", "apiKey", "apiSecret")
        val impulse = CreateBehaviourImpulse(UUID.randomUUID().toString(), "", "", emptyMap(), emptyArray(), "")

        val publisher = gaiaRef.preserveCreateBehaviours(impulse)
        val result = Flux.from(publisher).blockFirst()

        Assertions.assertNotNull(result)
        Assertions.assertNotNull(result!!.id)
    }

    @Test
    fun `test preserve update behaviour`() {
        val gaiaRef = Gaia.connect("http://localhost:8080", "apiKey", "apiSecret")
        val impulse = UpdateBehaviourImpulse(UUID.randomUUID().toString(), UUID.randomUUID().toString(), "", "", emptyMap(), emptyArray(), "")

        val publisher = gaiaRef.preserveUpdateBehaviours(impulse)
        val result = Flux.from(publisher).blockFirst()

        Assertions.assertNotNull(result)
        Assertions.assertNotNull(result!!.id)
    }

    @Test
    fun `test preserve delete behaviour`() {
        val gaiaRef = Gaia.connect("http://localhost:8080", "apiKey", "apiSecret")
        val impulse = DeleteBehaviourImpulse(UUID.randomUUID().toString(), UUID.randomUUID().toString())

        val publisher = gaiaRef.preserveDeleteBehaviours(impulse)
        val result = Flux.from(publisher).blockFirst()

        Assertions.assertNotNull(result)
        Assertions.assertNotNull(result!!.id)
    }

    @Test
    fun `test preserve create code`() {
        val gaiaRef = Gaia.connect("http://localhost:8080", "apiKey", "apiSecret")
        val impulse = CreateCodeImpulse(UUID.randomUUID().toString(), "", "", emptyMap(), emptyArray(), "")

        val publisher = gaiaRef.preserveCreateCodes(impulse)
        val result = Flux.from(publisher).blockFirst()

        Assertions.assertNotNull(result)
        Assertions.assertNotNull(result!!.id)
    }

    @Test
    fun `test preserve update code`() {
        val gaiaRef = Gaia.connect("http://localhost:8080", "apiKey", "apiSecret")
        val impulse = UpdateCodeImpulse(UUID.randomUUID().toString(), UUID.randomUUID().toString(), "", "", emptyMap(), emptyArray(), "")

        val publisher = gaiaRef.preserveUpdateCodes(impulse)
        val result = Flux.from(publisher).blockFirst()

        Assertions.assertNotNull(result)
        Assertions.assertNotNull(result!!.id)
    }

    @Test
    fun `test preserve delete code`() {
        val gaiaRef = Gaia.connect("http://localhost:8080", "apiKey", "apiSecret")
        val impulse = DeleteCodeImpulse(UUID.randomUUID().toString(), UUID.randomUUID().toString())

        val publisher = gaiaRef.preserveDeleteCodes(impulse)
        val result = Flux.from(publisher).blockFirst()

        Assertions.assertNotNull(result)
        Assertions.assertNotNull(result!!.id)
    }

    @Test
    fun `test preserve create edge`() {
        val gaiaRef = Gaia.connect("http://localhost:8080", "apiKey", "apiSecret")
        val impulse = CreateEdgeImpulse(UUID.randomUUID().toString(), UUID.randomUUID().toString(), "sometype", 2.5f)

        val publisher = gaiaRef.preserveCreateEdges(impulse)
        val result = Flux.from(publisher).blockFirst()

        Assertions.assertNotNull(result)
        Assertions.assertNotNull(result!!.id)
    }

    @Test
    fun `test preserve delete edge`() {
        val gaiaRef = Gaia.connect("http://localhost:8080", "apiKey", "apiSecret")
        val impulse = DeleteEdgeImpulse(UUID.randomUUID().toString(), UUID.randomUUID().toString())

        val publisher = gaiaRef.preserveDeleteEdges(impulse)
        val result = Flux.from(publisher).blockFirst()

        Assertions.assertNotNull(result)
        Assertions.assertNotNull(result!!.id)
    }


}
