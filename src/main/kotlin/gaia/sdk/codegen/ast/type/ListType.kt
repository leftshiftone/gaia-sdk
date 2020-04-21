package gaia.sdk.codegen.ast.type

import gaia.sdk.codegen.ast.AbstractAST
import gaia.sdk.codegen.extension.find

class ListType(val type:AbstractType, val optional:Boolean):AbstractType() {
    override fun name() = type.name()
    override fun isScalar(list: List<AbstractAST>) = type.isScalar(list)
    override fun isList() = true
    constructor(list:List<AbstractAST>, optional:Boolean):this(list.find(AbstractType::class), optional)
}
