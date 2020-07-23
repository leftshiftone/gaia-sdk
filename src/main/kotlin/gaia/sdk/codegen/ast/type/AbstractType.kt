package gaia.sdk.codegen.ast.type

import gaia.sdk.codegen.ast.AbstractAST

abstract class AbstractType : AbstractAST() {
    abstract fun name():String
    abstract fun isScalar(list: List<AbstractAST>): Boolean
    abstract fun isList(): Boolean
}
