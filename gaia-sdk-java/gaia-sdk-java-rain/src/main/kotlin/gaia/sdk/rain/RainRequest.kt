package gaia.sdk.rain

import gaia.sdk.VariableRegistry

// AUTOGENERATED CLASS. DO NOT MODIFY.
@Suppress("unused", "SpellCheckingInspection")
abstract class RainRequest : ArrayList<(VariableRegistry) -> String>() {

    companion object {
        @JvmStatic
        fun query(config: RainQueryRequest.() -> Unit): RainQueryRequest {
            return RainQueryRequest().apply(config)
        }
        @JvmStatic
        fun mutation(config: RainMutationRequest.() -> Unit): RainMutationRequest {
            return RainMutationRequest().apply(config)
        }
    }

    val preprocessors = ArrayList<String>()

    abstract fun getStatement():Pair<String, Map<String, Any>>
    class RainQueryRequest: RainRequest() {
        
        class Insights(private val identityId:Any) : ArrayList<(VariableRegistry) -> String>() {
            
            class Classify(private val text:Any) : ArrayList<(VariableRegistry) -> String>() {
                fun qualifier() = add { "qualifier" }
                fun reference() = add { "reference" }
                fun score() = add { "score" }

                fun render(registry:VariableRegistry, name:String = "classify"): String {
                    val name1 = registry.register("text", text)
                    return "$name(text:\$$name1) { ${joinToString(" ") { it(registry) }} }"
                }
            }

            fun classify(text:String, config: Classify.() -> Unit) = add {Classify(text).apply(config).render(it) }
            fun gaiaQuery(statement:String) = add { 
                val name1 = it.register("statement", statement)
                "gaiaQuery(statement:\$$name1)" 
            }

            fun render(registry:VariableRegistry, name:String = "insights"): String {
                val name1 = registry.register("identityId", identityId)
                return "$name(identityId:\$$name1) { ${joinToString(" ") { it(registry) }} }"
            }
        }

        fun insights(identityId:String, config: Insights.() -> Unit) = add {Insights(identityId).apply(config).render(it) }
        
        class Skills : ArrayList<(VariableRegistry) -> String>() {
            fun status(name:String) = add { 
                val name1 = it.register("name", name)
                "status(name:\$$name1)" 
            }

            fun render(registry:VariableRegistry, name:String = "skills"): String {
                return "$name { ${joinToString(" ") { it(registry) }} }"
            }
        }

        fun skills(config: Skills.() -> Unit) = add {Skills().apply(config).render(it) }

        override fun getStatement():Pair<String, Map<String, Any>> {
            val registry = VariableRegistry()
            val fields = map { it(registry) }.joinToString(" ")
            val statement = "query rain(${registry.getDatatypes().joinToString(", ")}) { $fields }"
            return Pair(statement, registry.getVariables())
        }
    }

    class RainMutationRequest: RainRequest() {
        class ReceptionImpulse {
            lateinit var identityId:String
            lateinit var clientId:String
            lateinit var userId:String
            lateinit var attributes:Map<String, Any>
        }


        class ButtonImpulse {
            lateinit var identityId:String
            lateinit var clientId:String
            lateinit var userId:String
            lateinit var attributes:Map<String, Any>
        }


        class SubmitImpulse {
            lateinit var identityId:String
            lateinit var clientId:String
            lateinit var userId:String
            lateinit var attributes:Map<String, Any>
        }


        class SuggestionImpulse {
            lateinit var identityId:String
            lateinit var clientId:String
            lateinit var userId:String
            lateinit var attributes:Map<String, Any>
        }


        class UtteranceImpulse {
            lateinit var identityId:String
            lateinit var clientId:String
            lateinit var userId:String
            lateinit var payload:String
        }


        fun handleReception(impulse:ReceptionImpulse) = add { 
            val name1 = it.register("impulse", impulse)
            "handleReception(impulse:\$$name1)" 
        }
        fun handleUtterance(impulse:UtteranceImpulse) = add { 
            val name1 = it.register("impulse", impulse)
            "handleUtterance(impulse:\$$name1)" 
        }
        fun handleSuggestion(impulse:SuggestionImpulse) = add { 
            val name1 = it.register("impulse", impulse)
            "handleSuggestion(impulse:\$$name1)" 
        }
        fun handleButton(impulse:ButtonImpulse) = add { 
            val name1 = it.register("impulse", impulse)
            "handleButton(impulse:\$$name1)" 
        }
        fun handleSubmit(impulse:SubmitImpulse) = add { 
            val name1 = it.register("impulse", impulse)
            "handleSubmit(impulse:\$$name1)" 
        }


        override fun getStatement():Pair<String, Map<String, Any>> {
            val registry = VariableRegistry()
            val fields = map { it(registry) }.joinToString(" ")
            val statement = "mutation rain(${registry.getDatatypes().joinToString(", ")}) { $fields }"
            return Pair(statement, registry.getVariables())
        }
    }

}
