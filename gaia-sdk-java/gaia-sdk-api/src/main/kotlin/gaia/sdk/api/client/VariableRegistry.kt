package gaia.sdk.api.client

import java.util.concurrent.atomic.AtomicInteger

class VariableRegistry {
    private val variables = HashMap<String, Any>()
    private val datatypes = ArrayList<String>()
    private val counters = HashMap<String, AtomicInteger>()

    fun register(name:String, value:Any):String {
        counters.putIfAbsent(name, AtomicInteger())

        val varName = "$name${counters[name]!!.incrementAndGet()}"

        variables.put(varName, value)
        datatypes.add("\$$varName: ${value.javaClass.simpleName}!")
        return varName
    }

    fun getVariables() = HashMap(variables)
    fun getDatatypes() = ArrayList(datatypes)
}
