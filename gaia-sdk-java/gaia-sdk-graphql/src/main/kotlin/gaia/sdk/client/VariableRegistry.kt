package gaia.sdk.client

import com.fasterxml.jackson.databind.ObjectMapper
import java.util.concurrent.atomic.AtomicInteger

class VariableRegistry {
    private val variables = HashMap<String, Any>()
    private val datatypes = ArrayList<String>()
    private val counters = HashMap<String, AtomicInteger>()
    private val objectMapper = ObjectMapper()

    fun register(name:String, value:Any):String {
        counters.putIfAbsent(name, AtomicInteger())

        val varName = "$name${counters[name]!!.incrementAndGet()}"

        if (value is Input)
            variables.put(varName, objectMapper.convertValue(value, HashMap::class.java))
        else
            variables.put(varName, value)
        datatypes.add("\$$varName: ${value.javaClass.simpleName}!")
        return varName
    }

    fun getVariables() = HashMap(variables)
    fun getDatatypes() = ArrayList(datatypes)
}
