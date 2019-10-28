package gaia.sdk.codegen

import gaia.sdk.antlr.GaiaSdkLexer
import gaia.sdk.antlr.GaiaSdkParser
import gaia.sdk.codegen.ast.AbstractAST
import gaia.sdk.codegen.exception.CodegenException
import gaia.sdk.exception.CodegenExceptionListener
import org.antlr.v4.runtime.CharStream
import org.antlr.v4.runtime.CharStreams
import org.antlr.v4.runtime.CommonTokenStream
import java.io.InputStream
import java.io.Reader
import java.nio.channels.ReadableByteChannel

class Codegen {

    companion object {

        @JvmStatic
        fun parse(string: String, name:String) = CodegenEngine(parse(CharStreams.fromString(string)), name)

        @JvmStatic
        fun parse(stream: InputStream, name:String) = CodegenEngine(parse(CharStreams.fromStream(stream)), name)

        @JvmStatic
        fun parse(reader: Reader, name:String) = CodegenEngine(parse(CharStreams.fromReader(reader)), name)

        @JvmStatic
        fun parse(channel: ReadableByteChannel, name:String) = CodegenEngine(parse(CharStreams.fromChannel(channel)), name)

        private fun parse(stream: CharStream): List<AbstractAST> {
            val lexer = GaiaSdkLexer(stream)
            val commonTokenStream = CommonTokenStream(lexer)
            val parser = GaiaSdkParser(commonTokenStream)

            val errorListener = CodegenExceptionListener()
            parser.addErrorListener(errorListener)

            val visitor = CodegenVisitor()
            val astList = visitor.visit(parser.compilation())

            if (errorListener.get() != null) {
                throw CodegenException(errorListener.get())
            }
            return astList
        }
    }

}
