package gaia.sdk.rain

import com.fasterxml.jackson.databind.ObjectMapper
import gaia.sdk.api.ClientOptions
import gaia.sdk.api.ITransporter
import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.Test
import org.reactivestreams.Publisher

class RainClientTest {

    @Test
    fun testQuery() {
        val transporter = AssertionTransporter(
                expectedVariables = mapOf("statement1" to "query", "identityId1" to "abc", "text1" to "text"),
                expectedStatement = "query rain(\$identityId1: String!, \$text1: String!, \$statement1: String!) { insights(identityId:\$identityId1) { classify(text:\$text1) { qualifier reference score } gaiaQuery(statement:\$statement1) } }"
        )
        val client = RainClientBuilder.custom(transporter)
                .withApiKey("apikey")
                .withSecret("secret")
                .build()

        val request = RainRequest.query {
            insights("abc") {
                classify("text") {
                    qualifier()
                    reference()
                    score()
                }
                gaiaQuery("query")
            }
        }

        client.query(request)
    }

    @Test
    fun `skill status returns expected query`() {
        val client = RainClientBuilder.custom(AssertionTransporter(
                expectedVariables = mapOf("skillName1" to "someName", "tenantId1" to "someId"),
                expectedStatement = "query rain(\$tenantId1: String!, \$skillName1: String!) { skills(tenantId:\$tenantId1) { status(skillName:\$skillName1) { name status created } } }"
        )).withSecret("asd").withApiKey("sadsad").build()

        val request = RainRequest.query {
            this.skills("someId") {
                status("someName") {
                    name()
                    status()
                    created()
                }
            }
        }

        client.query(request)
    }

    @Test
    fun `upload completion`() {
        val client = RainClientBuilder.custom(AssertionTransporter(
                expectedVariables = mapOf("skillName1" to "someName", "tenantId1" to "someId"),
                expectedStatement = "query rain(\$tenantId1: String!, \$skillName1: String!) { skills(tenantId:\$tenantId1) { status(skillName:\$skillName1) { name status created } } }"
        )).withSecret("asd").withApiKey("sadsad").build()

        val request = RainRequest.mutation {
            artifacts("xyz") {
                completeUpload(RainRequest.RainMutationRequest.CompleteUploadImpulse().apply {
                    key = "a"
                    transportId = "b"
                    etags = listOf(mapOf("partNumber" to 0, "etag" to "1"), mapOf("partNumber" to 1, "etag" to "2"))
                },
                        RainRequest.RainMutationRequest.HazeArtifact().apply {
                            qualifier = "test-artifact"
                            appendent = "test"
                            labelList = listOf("#spacy")
                            type = "ner"
                        }) {
                    location()
                    key()
                    etag()
                }
            }
        }

        client.mutation(request)
    }

    private class AssertionTransporter(
            val expectedVariables: Map<String, String>,
            val expectedStatement: String
    ) : ITransporter {
        override fun <T> transport(options: ClientOptions, type: Class<T>, payload: ByteArray): Publisher<T> {
            val map = ObjectMapper().readValue(payload, Map::class.java)

            assertThat(map["variables"]).isEqualTo(expectedVariables)
            assertThat(map["statement"]).isEqualTo(expectedStatement)
            return Publisher { it.onComplete() }
        }

    }

}
