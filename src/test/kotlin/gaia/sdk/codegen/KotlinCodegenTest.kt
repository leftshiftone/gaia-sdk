package gaia.sdk.codegen

import gaia.sdk.codegen.extension.stream
import org.junit.jupiter.api.Test
import java.io.File

class KotlinCodegenTest {

    private val schemaLocation = "/schema"

    @Test
    fun generate() {
        val schemaDir = File(this::class.java.getResource("$schemaLocation/.path").file).parentFile

        schemaDir.listFiles()!!
                .filter { it.name.endsWith(".txt") }
                .forEach { schemaFile ->
                    val name = schemaFile.name.replace(".txt", "")
                    Codegen.parse("$schemaLocation/${schemaFile.name}".stream(), name).generate()
                }
    }

}
