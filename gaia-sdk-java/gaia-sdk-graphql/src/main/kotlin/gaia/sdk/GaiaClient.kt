package gaia.sdk

import com.fasterxml.jackson.databind.DeserializationFeature
import com.fasterxml.jackson.databind.ObjectMapper
import gaia.sdk.client.Type
import gaia.sdk.client.VariableRegistry
import gaia.sdk.spi.ClientOptions
import gaia.sdk.request.type.Mutation
import gaia.sdk.request.type.Query
import gaia.sdk.spi.ITransporter
import io.reactivex.Flowable
import org.reactivestreams.Publisher
import org.slf4j.LoggerFactory
import java.security.SecureRandom
import java.util.*
import java.util.concurrent.atomic.AtomicLong
import kotlin.reflect.KClass

//Class generated from template src/main/resources/template/java/ClientTemplate.vm

class GaiaClient(private val options: ClientOptions, private val transporter: ITransporter) {

    companion object {
        private val log = LoggerFactory.getLogger(this::class.java.enclosingClass)
    }

    private val jsonparser = ObjectMapper().disable(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES)

    fun <T:GaiaResponse>executeNative(statement: String, variables:Map<String, Any>, type:KClass<T>): Publisher<T> {
        val body = HashMap<String, Any>()
        body["statement"] = statement
        body["variables"] = variables

        if (log.isDebugEnabled) {
            log.debug("Statement: $statement")
            log.debug("Variables: $variables")
        }
        if (log.isTraceEnabled) {
            log.trace("Payload: $body")
        }
        val bytes = jsonparser.writeValueAsBytes(body)

        return transporter.transport(options, bytes).byteArrayCast(jsonparser, type.java)

    }

    fun query(request: Query): Publisher<GaiaResponse.QueryResponse> {
        val (statement, variables) = getStatement("query", request)
        return executeNative(statement, variables, GaiaResponse.QueryResponse::class)
    }
    fun mutation(request: Mutation): Publisher<GaiaResponse.MutationResponse> {
        val (statement, variables) = getStatement("mutation", request)
        return executeNative(statement, variables, GaiaResponse.MutationResponse::class)
    }

    private fun getStatement(name: String, type: Type):Pair<String, Map<String, Any>> {
        val registry = VariableRegistry()
        val fields = type.map { it(registry) }.joinToString(" ")
        if (registry.getDatatypes().isEmpty()) {
            val statement = "$name gaia { $fields }"
            return Pair(statement, registry.getVariables())
        }
        val statement = "$name gaia(${registry.getDatatypes().joinToString(", ")}) { $fields }"
        return Pair(statement, registry.getVariables())
    }

}
