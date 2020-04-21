package gaia.sdk.http

import gaia.sdk.GaiaClientBuilder
import gaia.sdk.GaiaRequest
import org.junit.jupiter.api.Test
import reactor.core.publisher.Flux
import reactor.netty.http.client.HttpClient

class AtlasClientTest {

    @Test
    fun test() {
        val client = GaiaClientBuilder(HttpTransport("http://localhost:8080/api/associate", HttpClient.create()))
                .withApiKey("apikey")
                .withSecret("secret")
                .build()

        val request = GaiaRequest.query {
            introspect {
                cpu()
                gpu()
                memory()
            }
        }

        println(Flux.from(client.query(request)).blockFirst())//.subscribe(System.out::println, System.err::println, { println("complete")})
        println("asdf")
    }

}
