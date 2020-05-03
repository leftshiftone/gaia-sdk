package gaia.sdk.http

import gaia.sdk.request.input.PerceiveActionImpulse
import gaia.sdk.request.input.PerceiveDataImpulse
import org.junit.jupiter.api.Assertions
import org.junit.jupiter.api.Disabled
import org.junit.jupiter.api.Test
import reactor.core.publisher.Flux
import java.util.*
import kotlin.collections.HashMap

class RetrievalTest {

    @Test
    fun `test retrieve behaviour`() {
        val gaiaRef = Gaia.connect("http://localhost:8080", "apiKey", "apiSecret")

        val publisher = gaiaRef.retrieveBehaviour {
            identityId()
            reference()
        }
        val result = Flux.from(publisher).blockFirst()

        Assertions.assertNotNull(result)
        Assertions.assertNotNull(result!!)
        Assertions.assertNotNull(result.identityId)
        Assertions.assertNotNull(result.reference)
    }

    @Test
    fun `test retrieve code`() {
        val gaiaRef = Gaia.connect("http://localhost:8080", "apiKey", "apiSecret")

        val publisher = gaiaRef.retrieveCode {
            identityId()
            reference()
        }
        val result = Flux.from(publisher).blockFirst()

        Assertions.assertNotNull(result)
        Assertions.assertNotNull(result!!)
        Assertions.assertNotNull(result.identityId)
        Assertions.assertNotNull(result.reference)
    }

    @Test
    fun `test retrieve intent`() {
        val gaiaRef = Gaia.connect("http://localhost:8080", "apiKey", "apiSecret")

        val publisher = gaiaRef.retrieveIntents {
            identityId()
            reference()
        }
        val result = Flux.from(publisher).blockFirst()

        Assertions.assertNotNull(result)
        Assertions.assertNotNull(result!!)
        Assertions.assertNotNull(result.identityId)
        Assertions.assertNotNull(result.reference)
    }

    @Test
    fun `test retrieve prompt`() {
        val gaiaRef = Gaia.connect("http://localhost:8080", "apiKey", "apiSecret")

        val publisher = gaiaRef.retrievePrompts {
            identityId()
            reference()
        }
        val result = Flux.from(publisher).blockFirst()

        Assertions.assertNotNull(result)
        Assertions.assertNotNull(result!!)
        Assertions.assertNotNull(result.identityId)
        Assertions.assertNotNull(result.reference)
    }

    @Test
    fun `test retrieve fulfilment`() {
        val gaiaRef = Gaia.connect("http://localhost:8080", "apiKey", "apiSecret")

        val publisher = gaiaRef.retrieveFulfilments {
            identityId()
            reference()
        }
        val result = Flux.from(publisher).blockFirst()

        Assertions.assertNotNull(result)
        Assertions.assertNotNull(result!!)
        Assertions.assertNotNull(result.identityId)
        Assertions.assertNotNull(result.reference)
    }

    @Test
    fun `test retrieve statement`() {
        val gaiaRef = Gaia.connect("http://localhost:8080", "apiKey", "apiSecret")

        val publisher = gaiaRef.retrieveStatements {
            identityId()
            reference()
        }
        val result = Flux.from(publisher).blockFirst()

        Assertions.assertNotNull(result)
        Assertions.assertNotNull(result!!)
        Assertions.assertNotNull(result.identityId)
        Assertions.assertNotNull(result.reference)
    }

    @Test
    fun `test retrieve knowledge edge`() {
        val gaiaRef = Gaia.connect("http://localhost:8080", "apiKey", "apiSecret")

        val publisher = gaiaRef.retrieveKnowledgeEdge {
            source()
            target()
        }
        val result = Flux.from(publisher).blockFirst()

        Assertions.assertNotNull(result)
        Assertions.assertNotNull(result!!)
        Assertions.assertNotNull(result.source)
        Assertions.assertNotNull(result.target)
    }

}
