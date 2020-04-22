package gaia.sdk

import gaia.sdk.client.Type
import gaia.sdk.client.VariableRegistry
import gaia.sdk.spi.ClientOptions
import gaia.sdk.spi.ITransporter
import gaia.sdk.request.type.Mutation
import gaia.sdk.request.type.Query
import org.reactivestreams.Publisher
import org.slf4j.LoggerFactory
import java.security.SecureRandom
import java.util.*
import java.util.concurrent.atomic.AtomicLong
import kotlin.reflect.KClass


class GaiaClient(private val options: ClientOptions, private val transporter: ITransporter) {

    companion object {
        private val log = LoggerFactory.getLogger(this::class.java.enclosingClass)
    }

    private val nonce = AtomicLong(SecureRandom().nextLong())

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
        return transporter.transport(options, type.java, body);
    }

    fun query(request: Query): Publisher<GaiaResponse.GaiaQueryResponse> {
        val (statement, variables) = getStatement("query", request)
        return executeNative(statement, variables, GaiaResponse.GaiaQueryResponse::class)
    }
    fun mutation(request: Mutation): Publisher<GaiaResponse.GaiaMutationResponse> {
        val (statement, variables) = getStatement("mutation", request)
        return executeNative(statement, variables, GaiaResponse.GaiaMutationResponse::class)
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
