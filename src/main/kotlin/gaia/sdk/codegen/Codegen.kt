package gaia.sdk.codegen

import gaia.sdk.antlr.GaiaSdkLexer
import gaia.sdk.antlr.GaiaSdkParser
import gaia.sdk.codegen.ast.AbstractAST
import gaia.sdk.codegen.exception.CodegenException
import gaia.sdk.codegen.exception.CodegenExceptionListener
import org.antlr.v4.runtime.CharStream
import org.antlr.v4.runtime.CharStreams
import org.antlr.v4.runtime.CommonTokenStream
import java.io.InputStream
import java.io.Reader
import java.nio.channels.ReadableByteChannel

class Codegen {

    companion object {

        @JvmStatic
        fun parse(string: String) = parse(CharStreams.fromString(string))

        @JvmStatic
        fun parse(stream: InputStream) = parse(CharStreams.fromStream(stream))

        @JvmStatic
        fun parse(reader: Reader) = parse(CharStreams.fromReader(reader))

        @JvmStatic
        fun parse(channel: ReadableByteChannel) = parse(CharStreams.fromChannel(channel))

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
