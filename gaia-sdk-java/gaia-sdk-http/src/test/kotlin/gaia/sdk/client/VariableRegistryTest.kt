package gaia.sdk.client

import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import java.util.*

internal class VariableRegistryTest {

    lateinit var registry : VariableRegistry

    @BeforeEach
    fun setup(){
        registry = VariableRegistry()
    }

    @Test
    fun `a UUID variable is identified as type Uuid`() {
        val uuid= UUID.randomUUID().toString()
        val field= "identityId"
        registry.register(field, uuid)
        val datatypes = registry.getDatatypes()
        assertThat(datatypes).first().isEqualTo("\$${field}1: Uuid")
        val variables = registry.getVariables()
        assertThat(variables).isNotEmpty
        assertThat(variables).extracting("${field}1").first().isEqualTo(uuid)
    }

    @Test
    fun `a String variable is identified as type String`() {
        val value="something"
        val field= "name"
        registry.register(field, value)
        val datatypes = registry.getDatatypes()
        assertThat(datatypes).first().isEqualTo("\$${field}1: String")
        val variables = registry.getVariables()
        assertThat(variables).isNotEmpty
        assertThat(variables).extracting("${field}1").first().isEqualTo(value)
    }

    @Test
    fun `a List of String variable is identified as list Strings`() {
        val value= listOf("something","else").toTypedArray()
        val field= "name"
        registry.register(field, value)
        val datatypes = registry.getDatatypes()
        assertThat(datatypes).first().isEqualTo("\$${field}1: [String]")
        val variables = registry.getVariables()
        assertThat(variables).isNotEmpty
        assertThat(variables).extracting("${field}1").first().isEqualTo(value)
    }
}