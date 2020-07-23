package gaia.sdk.api.skill

import gaia.sdk.api.exception.GaiaSdkException

class SkillEvaluation(private val response: Map<String, Any>) {

    fun asString() = `as`(String::class.java)
    fun asInt() = `as`(Int::class.java)
    fun asLong() = `as`(Long::class.java)
    fun asShort() = `as`(Short::class.java)
    fun asByte() = `as`(Byte::class.java)
    fun asFloat() = `as`(Float::class.java)
    fun asDouble() = `as`(Double::class.java)
    fun asBoolean() = `as`(Boolean::class.java)

    fun asMap() = response

    @Suppress("UNCHECKED_CAST")
    private fun <T>`as`(type:Class<T>): T {
        val result = response["result"]
        if (type.isInstance(result))
            return result as T
        throw GaiaSdkException("result is not of type ${type.simpleName}: '${response["result"]}'")
    }

}