package gaia.sdk.codegen

import org.junit.jupiter.api.Test
import java.io.File

class KotlinCodegenTest {

    @Test
    fun generate() {
        //todo: delete files before creating in order to force removal of outdated files
        val schemaDir = File(this::class.java.getResource("/schema/schema.graphqls").file).parentFile

        val list = schemaDir.listFiles()!!
                .filter { it.name.endsWith(".graphqls") }
                .flatMap { Codegen.parse(it.inputStream()) }

        val engine = CodegenEngine(list, "gaia")
        engine.generate()
    }

}
