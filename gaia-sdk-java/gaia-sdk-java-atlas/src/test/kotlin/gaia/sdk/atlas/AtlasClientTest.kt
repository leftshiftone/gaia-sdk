package gaia.sdk.atlas

import com.fasterxml.jackson.databind.ObjectMapper
import gaia.sdk.api.ClientOptions
import gaia.sdk.api.ITransporter
import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.Test
import org.reactivestreams.Publisher

class AtlasClientTest {

    @Test
    fun test() {
        val transporter = AssertionTransporter()
        val client = AtlasClientBuilder.custom(transporter)
                .withApiKey("apikey")
                .withSecret("secret")
                .build()

        val request = AtlasRequest.query {
            nlu("text", false) {
                lex {
                    lemma()
                    pos()
                    base()
                    abbreviations { lemma() }
                    labels()
                    parts { lemma() }
                    causations { lemma() }
                    hyperonyms { lemma() }
                    meronyms { lemma() }
                    flexions { lemma() }
                    synonyms { lemma() }
                }
                dep {
                    source()
                    sourceIndex()
                    sourcePos()
                    sourceBase()
                    target()
                    targetIndex()
                    targetPos()
                    targetBase()
                    relation()
                    main()
                    modifier()
                    parenthesized()
                }
                txt()
                cls()
                raw()
                ner {
                    datetime {
                        date()
                        date1()
                        date2()
                        negation()
                        fuzzy()
                        indices()
                    }
                    duration {
                        amount()
                        amountMin()
                        amountMax()
                        unit()
                        negation()
                        indices()
                    }
                    price {
                        amount()
                        amountMin()
                        amountMax()
                        currency()
                        negation()
                        indices()
                    }
                    bool()
                    email()
                    url()
                    location {
                        name()
                        type()
                        negation()
                        indices()
                    }
                    organization {
                        name()
                        type()
                        negation()
                        indices()
                    }
                    accommodation {
                        name()
                        type()
                        negation()
                        indices()
                    }
                    person {
                        isAdult()
                        age()
                        negation()
                        indices()
                    }
                }
            }
        }

        client.query(request)
    }

    private class AssertionTransporter : ITransporter {
        override fun <T> transport(options: ClientOptions, type: Class<T>, payload: ByteArray): Publisher<T> {
            val map = ObjectMapper().readValue(payload, Map::class.java)

            assertThat(map["variables"]).isEqualTo(mapOf("text1" to "text", "merge1" to false, "normalized1" to true, "qualifier1" to "default"))
            assertThat(map["statement"]).isEqualTo("query atlas(\$text1: String!, \$merge1: Boolean!, \$qualifier1: String!, \$normalized1: Boolean!) { nlu(text:\$text1, merge:\$merge1) { lex { lemma pos base lex { lemma } labels lex { lemma } lex { lemma } lex { lemma } lex { lemma } lex { lemma } lex { lemma } } dep { source sourceIndex sourcePos sourceBase target targetIndex targetPos targetBase relation main modifier parenthesized } txt cls(qualifier:\$qualifier1) raw ner { datetime { date date1 date2 negation fuzzy indices } duration { amount amountMin amountMax unit negation indices } price { amount amountMin amountMax currency negation indices } bool email url location(normalized:\$normalized1) { name type negation indices } organization { name type negation indices } accommodation { name type negation indices } person { isAdult age negation indices } } } }")
            return Publisher { it.onComplete() }
        }

    }

}
