package gaia.sdk.api.identity

import gaia.sdk.GaiaStreamClient
import gaia.sdk.api.data.DataRef
import gaia.sdk.api.identity.request.IdentitySourceRequestImpulse
import org.reactivestreams.Publisher
import org.slf4j.Logger
import org.slf4j.LoggerFactory

class IdentityRef(private val id: String?, private val client: GaiaStreamClient) {

    private val log: Logger = LoggerFactory.getLogger(DataRef::class.java)

    fun export(): Publisher<ByteArray> {

        if (this.id == null) {
            throw IllegalArgumentException("Identity ID of IdentityRef must be set in order to export an identity")
        }

        log.info("Export identity with ID $this.id")
        return this.client.streamBytes(IdentitySourceRequestImpulse(this.id), "/identity/source")
    }
}
