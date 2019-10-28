package gaia.sdk.codegen.ast.type

import gaia.sdk.codegen.ast.AbstractAST
import gaia.sdk.codegen.ast.Identifier
import gaia.sdk.codegen.extension.find

class RefType(val name:String, val optional:Boolean):AbstractType() {
    constructor(list:List<AbstractAST>, optional: Boolean):this(list.find(Identifier::class).name, optional)
}
