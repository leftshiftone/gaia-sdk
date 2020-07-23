package gaia.sdk.codegen.ast.type

import gaia.sdk.codegen.ast.AbstractAST

class ScalarType(val name:String, val optional:Boolean):AbstractType() {
    override fun name() = name
    override fun isList() = false
    override fun isScalar(list: List<AbstractAST>) = true
}
