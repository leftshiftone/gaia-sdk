package gaia.sdk.api.extension

import gaia.sdk.GaiaResponse
import gaia.sdk.response.type.Mutation
import gaia.sdk.response.type.Query
import org.reactivestreams.Publisher
import reactor.core.publisher.Flux


fun <T> map(publisher: Publisher<GaiaResponse.QueryResponse>, mapper: (Query) -> T): Publisher<T> {
    return Flux.from(publisher)
            .flatMap {
                if ((it.errors ?: emptyList<Error>()).isNotEmpty()) {
                    val error = it.errors?.first()
                    return@flatMap Flux.error<T>(RuntimeException(error?.message))
                }
                return@flatMap Flux.just(mapper(it.data!!))
            }
}

fun <T> mapM(publisher: Publisher<GaiaResponse.MutationResponse>, mapper: (Mutation) -> T): Publisher<T> {
    return Flux.from(publisher)
            .flatMap {
                if ((it.errors ?: emptyList<Error>()).isNotEmpty()) {
                    val error = it.errors?.first()
                    return@flatMap Flux.error<T>(RuntimeException(error?.message))
                }
                return@flatMap Flux.just(mapper(it.data!!))
            }
}

fun <T> flatMap(publisher: Publisher<GaiaResponse.QueryResponse>, mapper: (Query) -> List<T>): Publisher<T> {
    return Flux.from(publisher)
            .flatMap {
                if ((it.errors ?: emptyList<Error>()).isNotEmpty()) {
                    val error = it.errors?.first()
                    Flux.error<T>(RuntimeException(error?.message))
                } else {
                    Flux.fromIterable(mapper(it.data!!))
                }
            }
}

fun <T> flatMapM(publisher: Publisher<GaiaResponse.MutationResponse>, mapper: (Mutation) -> List<T>): Publisher<T> {
    return Flux.from(publisher)
            .flatMap {
                if ((it.errors ?: emptyList<Error>()).isNotEmpty()) {
                    val error = it.errors?.first()
                    Flux.error<T>(RuntimeException(error?.message))
                } else {
                    Flux.fromIterable(mapper(it.data!!))
                }
            }
}
