package gaia.sdk.codegen.ast

import gaia.sdk.codegen.extension.find
import gaia.sdk.codegen.extension.findAll
import gaia.sdk.codegen.extension.findOptional
import gaia.sdk.codegen.extension.skip

class Enum(val name: String,
           val values: List<String>) : AbstractAST() {
    constructor(list: List<AbstractAST>) : this(list.find(Identifier::class).name,
            list.findAll(Identifier::class).skip(1).map { it.name })


}
