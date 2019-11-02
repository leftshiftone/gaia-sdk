package gaia.sdk.codegen

import gaia.sdk.codegen.ast.*
import gaia.sdk.codegen.ast.annotation.IncomingType
import gaia.sdk.codegen.ast.annotation.OutgoingType
import gaia.sdk.codegen.ast.type.EntityType
import org.apache.velocity.VelocityContext
import org.apache.velocity.app.VelocityEngine
import java.io.File
import java.io.FileWriter
import java.io.StringWriter
import java.util.*
import java.util.function.Function
import kotlin.math.absoluteValue

class CodegenEngine(private val list: List<AbstractAST>, private val name: String) {

    private companion object {
        fun requestPath(name: String, lang: String):String {
            return when(lang) {
                "java" -> System.getProperty("user.dir") + "/gaia-sdk-java/gaia-sdk-java-$name/src/main/kotlin/gaia/sdk/$name/${name.capitalize()}Request.kt"
                "javascript" -> System.getProperty("user.dir") + "/gaia-sdk-javascript/src/lib/$name/${name.capitalize()}Request.ts"
                "python" -> System.getProperty("user.dir") + "/gaia-sdk-python/$name/${name.capitalize()}Request.py"
                else -> ""
            }
        }
        fun responsePath(name: String, lang: String):String {
            return when(lang) {
                "java" -> System.getProperty("user.dir") + "/gaia-sdk-java/gaia-sdk-java-$name/src/main/kotlin/gaia/sdk/$name/${name.capitalize()}Response.kt"
                "javascript" -> System.getProperty("user.dir") + "/gaia-sdk-javascript/src/lib/$name/${name.capitalize()}Response.ts"
                "python" -> System.getProperty("user.dir") + "/gaia-sdk-python/$name/${name.capitalize()}Response.py"
                else -> ""
            }
        }
        fun clientPath(name: String, lang: String):String {
            return when(lang) {
                "java" -> System.getProperty("user.dir") + "/gaia-sdk-java/gaia-sdk-java-$name/src/main/kotlin/gaia/sdk/$name/${name.capitalize()}Client.kt"
                "javascript" -> System.getProperty("user.dir") + "/gaia-sdk-javascript/src/lib/$name/${name.capitalize()}Client.ts"
                "python" -> System.getProperty("user.dir") + "/gaia-sdk-python/$name/${name.capitalize()}Client.py"
                else -> ""
            }
        }
        fun clientBuilderPath(name: String, lang: String):String {
            return when(lang) {
                "java" -> System.getProperty("user.dir") + "/gaia-sdk-java/gaia-sdk-java-$name/src/main/kotlin/gaia/sdk/$name/${name.capitalize()}ClientBuilder.kt"
                "javascript" -> System.getProperty("user.dir") + "/gaia-sdk-javascript/src/lib/$name/${name.capitalize()}ClientBuilder.ts"
                "python" -> System.getProperty("user.dir") + "/gaia-sdk-python/$name/${name.capitalize()}ClientBuilder.py"
                else -> ""
            }
        }
    }

    fun generate() {
        val props = Properties()
        props["resource.loader"] = "class"
        props["class.resource.loader.class"] = "org.apache.velocity.runtime.resource.loader.ClasspathResourceLoader"

        generateRequest(props)
        generateClientBuilder(props)
        generateClient(props)
        generateResponse(props)
    }

    private fun generateRequest(props:Properties) {
        generate(VelocityEngine(props), getContext(), "/template/java/RequestTemplate.vm", requestPath(name, "java"))
        generate(VelocityEngine(props), getContext(), "/template/javascript/RequestTemplate.vm", requestPath(name, "javascript"))
        generate(VelocityEngine(props), getContext(), "/template/python/RequestTemplate.vm", requestPath(name, "python"))
    }

    private fun generateClientBuilder(props:Properties) {
        generate(VelocityEngine(props), getContext(), "/template/java/ClientBuilderTemplate.vm", clientBuilderPath(name, "java"))
        generate(VelocityEngine(props), getContext(), "/template/javascript/ClientBuilderTemplate.vm", clientBuilderPath(name, "javascript"))
        generate(VelocityEngine(props), getContext(), "/template/python/ClientBuilderTemplate.vm", clientBuilderPath(name, "python"))
    }

    private fun generateClient(props:Properties) {
        generate(VelocityEngine(props), getContext(), "/template/java/ClientTemplate.vm", clientPath(name, "java"))
        generate(VelocityEngine(props), getContext(), "/template/javascript/ClientTemplate.vm", clientPath(name, "javascript"))
        generate(VelocityEngine(props), getContext(), "/template/python/ClientTemplate.vm", clientPath(name, "python"))
    }

    private fun generateResponse(props:Properties) {
        generate(VelocityEngine(props), getContext(), "/template/java/ResponseTemplate.vm", responsePath(name, "java"))
        generate(VelocityEngine(props), getContext(), "/template/javascript/ResponseTemplate.vm", responsePath(name, "javascript"))
        generate(VelocityEngine(props), getContext(), "/template/python/ResponseTemplate.vm", responsePath(name, "python"))
    }

    private fun generate(engine: VelocityEngine, context: VelocityContext, template: String, path:String) {
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

    private fun getContext(): VelocityContext {
        val context = VelocityContext()
        context.put("name", name)
        context.put("hasQuery", list.any { it is Query })
        context.put("hasMutation", list.any { it is Mutation })
        context.put("hasSubscription", list.any { it is Subscription })
        context.put("list", list)
        context.put("newLine", "\n")
        context.put("lt", "<")
        context.put("gt", ">")
        context.put("randomInt", Random().nextInt().absoluteValue)
        context.put("tab", {i:Int -> " ".repeat(i)})
        context.put("print", {it:String -> it})
        context.put("isIncomingType", object : Function<AbstractAST, Boolean> {
            override fun apply(ast: AbstractAST): Boolean {
                return when (ast) {
                    is Entity -> ast.annotations.any { it is IncomingType }
                    is Field -> ast.arguments.firstOrNull()?.type is EntityType
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
        return context
    }

}
