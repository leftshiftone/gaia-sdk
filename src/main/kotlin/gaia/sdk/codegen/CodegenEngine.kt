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
        const val REQUEST_TEMPLATE = "/template/kotlin/RequestTemplate.vm"
        const val RESPONSE_TEMPLATE = "/template/kotlin/ResponseTemplate.vm"
        const val CLIENT_TEMPLATE = "/template/kotlin/ClientTemplate.vm"
        const val CLIENTBUILDER_TEMPLATE = "/template/kotlin/ClientBuilderTemplate.vm"

        fun requestPath(name: String, lang: String) = System.getProperty("user.dir") + "/gaia-sdk-$lang/gaia-sdk-$lang-$name/src/main/${if (lang == "java") "kotlin" else lang}/gaia/sdk/$name/${name.capitalize()}Request.kt"
        fun responsePath(name: String, lang: String) = System.getProperty("user.dir") + "/gaia-sdk-$lang/gaia-sdk-$lang-$name/src/main/${if (lang == "java") "kotlin" else lang}/gaia/sdk/$name/${name.capitalize()}Response.kt"
        fun clientPath(name: String, lang: String) = System.getProperty("user.dir") + "/gaia-sdk-$lang/gaia-sdk-$lang-$name/src/main/${if (lang == "java") "kotlin" else lang}/gaia/sdk/$name/${name.capitalize()}Client.kt"
        fun clientBuilderPath(name: String, lang: String) = System.getProperty("user.dir") + "/gaia-sdk-$lang/gaia-sdk-$lang-$name/src/main/${if (lang == "java") "kotlin" else lang}/gaia/sdk/$name/${name.capitalize()}ClientBuilder.kt"
    }

    fun generate() {
        val props = Properties()
        props["resource.loader"] = "class"
        props["class.resource.loader.class"] = "org.apache.velocity.runtime.resource.loader.ClasspathResourceLoader"

        generateRequest(VelocityEngine(props), getContext())
        generateClientBuilder(VelocityEngine(props), getContext())
        generateClient(VelocityEngine(props), getContext())
        generateResponse(VelocityEngine(props), getContext())
    }

    private fun generateRequest(engine: VelocityEngine, context: VelocityContext) {
        generate(engine, context, REQUEST_TEMPLATE, requestPath(name, "java"))
    }

    private fun generateClientBuilder(engine: VelocityEngine, context: VelocityContext) {
        generate(engine, context, CLIENTBUILDER_TEMPLATE, clientBuilderPath(name, "java"))
    }

    private fun generateClient(engine: VelocityEngine, context: VelocityContext) {
        generate(engine, context, CLIENT_TEMPLATE, clientPath(name, "java"))
    }

    private fun generateResponse(engine: VelocityEngine, context: VelocityContext) {
        generate(engine, context, RESPONSE_TEMPLATE, responsePath(name, "java"))
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
