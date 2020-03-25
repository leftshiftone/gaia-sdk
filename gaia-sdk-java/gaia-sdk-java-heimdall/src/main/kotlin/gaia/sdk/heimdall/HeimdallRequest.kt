package gaia.sdk.heimdall

import gaia.sdk.VariableRegistry

// AUTOGENERATED CLASS. DO NOT MODIFY.
@Suppress("unused", "SpellCheckingInspection")
abstract class HeimdallRequest : ArrayList<(VariableRegistry) -> String>() {

    companion object {
        @JvmStatic
        fun mutation(config: HeimdallMutationRequest.() -> Unit): HeimdallMutationRequest {
            return HeimdallMutationRequest().apply(config)
        }
    }

    val preprocessors = ArrayList<String>()

    abstract fun getStatement():Pair<String, Map<String, Any>>

    class HeimdallMutationRequest: HeimdallRequest() {
        class Impulse {
             lateinit var impulsePayload:ByteArray
            lateinit var impulseHeader:ImpulseHeader

            class ImpulseHeader {
                 lateinit var identityId:String
                 lateinit var clientId:String
                 lateinit var userId:String
            }

        }


        class ImpulseContext {
             lateinit var impulseContextPayload:ByteArray
            lateinit var impulseContextHeader:ImpulseContextHeader

            class ImpulseContextHeader {
                 lateinit var identityId:String
                 lateinit var clientId:String
                 lateinit var userId:String
            }

        }


        class ImpulseNotification {
             lateinit var impulseNotificationPayload:ByteArray
            lateinit var impulseNotificationHeader:ImpulseNotificationHeader

            class ImpulseNotificationHeader {
                 lateinit var identityId:String
                 lateinit var clientId:String
                 lateinit var userId:String
            }

        }


        class ImpulseLog {
             lateinit var impulseLogPayload:ByteArray
            lateinit var impulseLogHeader:ImpulseLogHeader

            class ImpulseLogHeader {
                 lateinit var identityId:String
                 lateinit var clientId:String
                 lateinit var userId:String
            }

        }


        fun dispatchImpulse(impulse:Impulse) = add { 
            val name1 = it.register("impulse", impulse)
            "dispatchImpulse(impulse:\$$name1)" 
        }
        fun dispatchImpulseContext(impulse:ImpulseContext) = add { 
            val name1 = it.register("impulse", impulse)
            "dispatchImpulseContext(impulse:\$$name1)" 
        }
        fun dispatchImpulseNotification(impulse:ImpulseNotification) = add { 
            val name1 = it.register("impulse", impulse)
            "dispatchImpulseNotification(impulse:\$$name1)" 
        }
        fun dispatchImpulseLog(impulse:ImpulseLog) = add { 
            val name1 = it.register("impulse", impulse)
            "dispatchImpulseLog(impulse:\$$name1)" 
        }


        override fun getStatement():Pair<String, Map<String, Any>> {
            val registry = VariableRegistry()
            val fields = map { it(registry) }.joinToString(" ")
            val statement = "mutation heimdall(${registry.getDatatypes().joinToString(", ")}) { $fields }"
            return Pair(statement, registry.getVariables())
        }
    }

}
