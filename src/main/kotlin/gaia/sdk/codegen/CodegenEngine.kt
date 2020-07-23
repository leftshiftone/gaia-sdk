package gaia.sdk.codegen

import gaia.sdk.codegen.ast.*
import gaia.sdk.codegen.ast.Enum
import gaia.sdk.codegen.ast.annotation.IncomingType
import gaia.sdk.codegen.ast.annotation.OutgoingType
import gaia.sdk.codegen.ast.type.ListType
import gaia.sdk.codegen.ast.type.RefType
import gaia.sdk.codegen.ast.type.ScalarType
import org.apache.velocity.VelocityContext
import org.apache.velocity.app.VelocityEngine
import java.io.File
import java.io.FileWriter
import java.io.StringWriter
import java.lang.System.getProperty
import java.util.*
import java.util.function.Function
import kotlin.collections.HashMap
import kotlin.collections.HashSet
import kotlin.math.absoluteValue

class CodegenEngine(private val list: List<AbstractAST>, private val name: String) {

    private companion object {
        private val JAVA = getProperty("user.dir") + "/gaia-sdk-java/gaia-sdk-graphql/src/main/kotlin/gaia/sdk/"
        private val JAVASCRIPT = getProperty("user.dir") + "/gaia-sdk-javascript/src/graphql/"
        private val PYTHON = getProperty("user.dir") + "/gaia-sdk-python/gaia_sdk/graphql/"
    }

    fun generate() {
        generateRequest()
        generateClientBuilder()
        generateClient()
        generateResponse()
    }

    private fun engine() = VelocityEngine(Properties().apply {
        put("resource.loader", "class")
        put("class.resource.loader.class", "org.apache.velocity.runtime.resource.loader.ClasspathResourceLoader")
    })

    private fun generateRequest() {
        generate(engine(), getContext(), "/template/java/RequestTemplate.vm", JAVA + "GaiaRequest.kt")
        generate(engine(), getContext(), "/template/javascript/RequestTemplate.vm", JAVASCRIPT + "GaiaRequest.ts")
        generate(engine(), getContext(), "/template/python/RequestTemplate.vm", PYTHON + "GaiaRequest.py")

        File(JAVA, "request").deleteRecursively()
        File(JAVA, "response").deleteRecursively()

        list.filter { it is Type }.forEach {
            // java
            generate(engine(), getContext(mapOf("ast" to it, "path" to "type")), "/template/java/RequestTypingTemplate.vm", JAVA + "/request/type/" + (it as Type).name + ".kt")
            generate(engine(), getContext(mapOf("ast" to it, "path" to "type")), "/template/java/ResponseTypingTemplate.vm", JAVA + "/response/type/" + it.name + ".kt")
            generate(engine(), getContext(mapOf("ast" to it, "path" to "type")), "/template/javascript/RequestTypingTemplate.vm", JAVASCRIPT + "/request/type/" + it.name + ".ts")
            generate(engine(), getContext(mapOf("ast" to it, "path" to "type")), "/template/javascript/ResponseTypingTemplate.vm", JAVASCRIPT + "/response/type/" + it.name + ".ts")
            generate(engine(), getContext(mapOf("ast" to it, "path" to "type")), "/template/python/RequestTypingTemplate.vm", PYTHON + "/request/type/" + it.name + ".py")
            generate(engine(), getContext(mapOf("ast" to it, "path" to "type")), "/template/python/ResponseTypingTemplate.vm", PYTHON + "/response/type/" + it.name + ".py")
        }
        list.filter { it is Interface }.forEach {
            generate(engine(), getContext(mapOf("ast" to it, "path" to "intf")), "/template/java/RequestTypingTemplate.vm", JAVA + "/request/intf/" + (it as Interface).name + ".kt")
            generate(engine(), getContext(mapOf("ast" to it, "path" to "intf")), "/template/java/ResponseTypingTemplate.vm", JAVA + "/response/intf/" + it.name + ".kt")
            generate(engine(), getContext(mapOf("ast" to it, "path" to "intf")), "/template/javascript/RequestTypingTemplate.vm", JAVASCRIPT + "/request/intf/" + it.name + ".ts")
            generate(engine(), getContext(mapOf("ast" to it, "path" to "intf")), "/template/javascript/ResponseTypingTemplate.vm", JAVASCRIPT + "/response/intf/" + it.name + ".ts")
            generate(engine(), getContext(mapOf("ast" to it, "path" to "intf")), "/template/python/RequestTypingTemplate.vm", PYTHON + "/request/intf/" + it.name + ".py")
            generate(engine(), getContext(mapOf("ast" to it, "path" to "intf")), "/template/python/ResponseTypingTemplate.vm", PYTHON + "/response/intf/" + it.name + ".py")
        }
        list.filter { it is Input }.forEach {
            generate(engine(), getContext(mapOf("ast" to it, "path" to "input")), "/template/java/RequestTypingTemplate.vm", JAVA + "/request/input/" + (it as Input).name + ".kt")
            generate(engine(), getContext(mapOf("ast" to it, "path" to "input")), "/template/javascript/RequestTypingTemplate.vm", JAVASCRIPT + "/request/input/" + it.name + ".ts")
            generate(engine(), getContext(mapOf("ast" to it, "path" to "input")), "/template/python/RequestTypingTemplate.vm", PYTHON + "/request/input/" + it.name + ".py")
        }
        list.filter { it is Enum }.forEach {
            generate(engine(), getContext(mapOf("ast" to it, "path" to "enumeration")), "/template/java/EnumTemplate.vm", JAVA + "/request/enumeration/" + (it as Enum).name + ".kt")
            generate(engine(), getContext(mapOf("ast" to it, "path" to "enumeration")), "/template/javascript/EnumTemplate.vm", JAVASCRIPT + "/request/enumeration/" + it.name + ".ts")
            generate(engine(), getContext(mapOf("ast" to it, "path" to "enumeration")), "/template/python/EnumTemplate.vm", PYTHON + "/request/enumeration/" + it.name + ".py")
        }
    }

    private fun generateClientBuilder() {
        generate(engine(), getContext(), "/template/java/ClientBuilderTemplate.vm", JAVA + "GaiaClientBuilder.kt")
        generate(engine(), getContext(), "/template/javascript/ClientBuilderTemplate.vm", JAVASCRIPT + "GaiaClientBuilder.ts")
        generate(engine(), getContext(), "/template/python/ClientBuilderTemplate.vm", PYTHON + "GaiaClientBuilder.py")
    }

    private fun generateClient() {
        generate(engine(), getContext(), "/template/java/ClientTemplate.vm", JAVA + "GaiaClient.kt")
        generate(engine(), getContext(), "/template/javascript/ClientTemplate.vm", JAVASCRIPT + "GaiaClient.ts")
        generate(engine(), getContext(), "/template/python/ClientTemplate.vm", PYTHON + "GaiaClient.py")
    }

    private fun generateResponse() {
        generate(engine(), getContext(), "/template/java/ResponseTemplate.vm", JAVA + "GaiaResponse.kt")
        generate(engine(), getContext(), "/template/javascript/ResponseTemplate.vm", JAVASCRIPT + "GaiaResponse.ts")
        generate(engine(), getContext(), "/template/python/ResponseTemplate.vm", PYTHON + "GaiaResponse.py")
    }

    private fun generate(engine: VelocityEngine, context: VelocityContext, template: String, path: String) {
        val writer = StringWriter()
        val reader = CodegenEngine::class.java.getResourceAsStream(template).reader()

        engine.evaluate(context, writer, "log", reader)

        val file = File(path)
        file.parentFile.mkdirs()
        val fileWriter = FileWriter(file)
        fileWriter.write(writer.toString())

        fileWriter.flush()
        fileWriter.close()
    }

    private fun getContext(map: Map<String, Any> = emptyMap()): VelocityContext {
        val types = HashMap<String, Type>()
        list.filter { it is Type }.forEach { types.put((it as Type).name, it) }

        val context = VelocityContext(HashMap(map))

        context.put("name", name)
        context.put("hasQuery", list.any { it is Type && it.name == "Query" })
        context.put("query", list.find { it is Type && it.name == "Query" })
        context.put("mutation", list.find { it is Type && it.name == "Mutation" })
        context.put("subscription", list.find { it is Type && it.name == "Subscription" })
        context.put("hasMutation", list.any { it is Type && it.name == "Mutation" })
        context.put("hasSubscription", list.any { it is Type && it.name == "Subscription" })
        context.put("getType", Function<String?, AbstractAST?> { t -> list.find { it is Type && it.name == t } })
        context.put("isScalarType", Function<AbstractAST?, Boolean?> { e -> e is ScalarType || (e is RefType && list.any { it is Scalar && it.name == e.name }) })
        context.put("isType", Function<AbstractAST?, Boolean?> { e -> e is Type })
        context.put("isScalar", Function<AbstractAST?, Boolean?> { e -> e is Scalar })
        context.put("isInput", Function<AbstractAST?, Boolean?> { e -> e is Input })
        context.put("isInterface", Function<AbstractAST?, Boolean?> { e -> e is Interface || (e is RefType && list.any { it is Interface && it.name == e.name }) })
        context.put("isListType", Function<AbstractAST?, Boolean?> { e -> e is ListType })
        context.put("list", list)
        context.put("newLine", "\n")
        context.put("lt", "<")
        context.put("gt", ">")
        context.put("randomInt", Random().nextInt().absoluteValue)
        context.put("tab", { i: Int -> " ".repeat(i) })
        context.put("print", { it: String -> it })
        context.put("isIncomingType", object : Function<AbstractAST, Boolean> {
            override fun apply(ast: AbstractAST): Boolean {
                return when (ast) {
                    is Entity -> ast.annotations.any { it is IncomingType }
                    is Field -> ast.arguments.firstOrNull()?.type is RefType
                    else -> false
                }
            }

        })
        context.put("isOutgoingType", object : Function<Entity, Boolean> {
            override fun apply(entity: Entity): Boolean {
                return entity.annotations.any { it is OutgoingType }
            }
        })
        context.put("isEntity", object : Function<AbstractAST, Boolean> {
            override fun apply(ast: AbstractAST): Boolean {
                return ast is Entity
            }
        })
        context.put("filterFields", object : Function<List<AbstractAST>, List<AbstractAST>> {
            override fun apply(list: List<AbstractAST>): List<AbstractAST> {
                return list.filter { it is AbstractField }.map { it as AbstractField }
                        .filter {
                            when (it) {
                                is Entity -> it.annotations.none { it is IncomingType || it is OutgoingType }
                                is Field -> it.annotations.none { it is IncomingType || it is OutgoingType }
                                else -> false
                            }
                        }
            }
        })
        context.put("getTypeImports", object : Function<AbstractAST, Set<String>> {
            override fun apply(ast: AbstractAST): Set<String> {
                val result = HashSet<String>()
                if (ast is Type) {
                    ast.fields.forEach {
                        if (!it.type.isScalar(list)) {
                            result.add(it.type.name())
                        }
                    }
                }
                return result
            }
        })
        context.put("getInputImports", object : Function<AbstractAST, Set<String>> {
            override fun apply(ast: AbstractAST): Set<String> {
                val result = HashSet<String>()
                if (ast is Type) {
                    ast.fields.forEach {
                        it.arguments.forEach { arg ->
                            if (!arg.type.isScalar(list)) {
                                result.add(arg.type.name())
                            }
                        }
                    }
                }
                return result
            }
        })
        context.put("toLowercaseWithUnderscores", object : Function<String, String> {
            override fun apply(str: String): String {
                val builder = StringBuilder()
                str.forEach {
                    if (Character.isUpperCase(it)) {
                        builder.append("_").append(it.toLowerCase())
                    }
                    else {
                        builder.append(it)
                    }
                }
                return builder.toString()
            }
        })
        return context
    }

}
