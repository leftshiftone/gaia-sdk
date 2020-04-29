package gaia.sdk.codegen

import org.junit.jupiter.api.Test

class CodegenTest {

    @Test
    fun test() {
        val script1 = CodegenTest::class.java.getResourceAsStream("/schema/schema.graphqls")
        Codegen.parse(script1)
        //todo: test other schema files
    }

}
