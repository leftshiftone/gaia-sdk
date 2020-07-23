package gaia.sdk.codegen.ast.type

import gaia.sdk.codegen.ast.AbstractAST
import gaia.sdk.codegen.ast.Enum
import gaia.sdk.codegen.ast.Scalar

class RefType(val name:String, val optional:Boolean):AbstractType() {
    override fun name() = name
    override fun isList() = false
    override fun isScalar(list: List<AbstractAST>) = list.any {
        (it is Scalar && it.name == name) ||
        (it is Enum && it.name == name)
    }
}
