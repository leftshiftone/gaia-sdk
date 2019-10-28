package gaia.sdk.codegen

import gaia.sdk.codegen.extension.stream
import org.junit.jupiter.api.Test

class KotlinCodegenTest {

    @Test
    fun test() {
        Codegen.parse("/schema/atlas.txt".stream(), "atlas").generate()
        Codegen.parse("/schema/heimdall.txt".stream(), "heimdall").generate()
        Codegen.parse("/schema/rain.txt".stream(), "rain").generate()
    }

}
