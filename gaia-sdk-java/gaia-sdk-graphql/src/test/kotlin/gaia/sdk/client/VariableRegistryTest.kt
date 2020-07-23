/*
 * Copyright (c) 2016-2020, Leftshift One
 * __________________
 * [2020] Leftshift One
 * All Rights Reserved.
 * NOTICE:  All information contained herein is, and remains
 * the property of Leftshift One and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Leftshift One
 * and its suppliers and may be covered by Patents,
 * patents in process, and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Leftshift One.
 */

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