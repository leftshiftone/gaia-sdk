package gaia.sdk.client

open class Type : ArrayList<(VariableRegistry) -> String>() {
    fun render(registry: VariableRegistry):String {
        return map { it(registry) }.joinToString(" ")
    }
}
