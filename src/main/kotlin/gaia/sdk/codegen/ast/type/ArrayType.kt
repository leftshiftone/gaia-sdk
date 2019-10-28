package gaia.sdk.codegen.ast.type

import gaia.sdk.codegen.ast.AbstractAST
import gaia.sdk.codegen.extension.find

class ArrayType(val type:AbstractType, val optional:Boolean):AbstractType() {
    constructor(list:List<AbstractAST>, optional:Boolean):this(list.find(AbstractType::class), optional)
}
