package gaia.sdk.client

import com.fasterxml.jackson.databind.ObjectMapper
import java.util.*
import java.util.concurrent.atomic.AtomicInteger
import kotlin.collections.ArrayList
import kotlin.collections.HashMap

class VariableRegistry {
    private val variables = HashMap<String, Any>()
    private val datatypes = ArrayList<String>()
    private val counters = HashMap<String, AtomicInteger>()
    private val objectMapper = ObjectMapper()

    fun register(name: String, value: Any): String {
        counters.putIfAbsent(name, AtomicInteger())

        val varName = "$name${counters[name]!!.incrementAndGet()}"

        if (value is Input)
            variables.put(varName, objectMapper.convertValue(value, HashMap::class.java))
        else
            variables.put(varName, value)
        datatypes.add("\$$varName: ${toDatatype(value)}")
        return varName
    }

    fun getVariables() = HashMap(variables)
    fun getDatatypes() = ArrayList(datatypes)

    private fun toDatatype(value: Any): String {
        if (value is Array<*>)
            return "[" + value.javaClass.simpleName
                    .replace("[", "")
                    .replace("]", "") + "]!"
        return value.let { return if(isUuid(it))  "Uuid" else it.javaClass.simpleName+"!" }
    }

    private fun isUuid(value: Any) : Boolean{
        if(value is String){
            try{
                UUID.fromString(value)
                return true
            } catch (ex : IllegalArgumentException){
                println("String value is no UUID")
            }
        }
        return false

    }

}
