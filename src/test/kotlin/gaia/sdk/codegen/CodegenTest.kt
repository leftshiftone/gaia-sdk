package gaia.sdk.codegen

import org.junit.jupiter.api.Test

class CodegenTest {

    @Test
    fun test() {
        val script1 = CodegenTest::class.java.getResourceAsStream("/schema/schema.graphqls")
        Codegen.parse(script1)

        val script2 = CodegenTest::class.java.getResourceAsStream("/schema/mutation.graphqls")
        Codegen.parse(script2)

        val script3 = CodegenTest::class.java.getResourceAsStream("/schema/query.graphqls")
        Codegen.parse(script3)

        val script4 = CodegenTest::class.java.getResourceAsStream("/schema/subscription.graphqls")
        Codegen.parse(script4)
    }

}
