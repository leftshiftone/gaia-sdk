package gaia.sdk.codegen.ast

import gaia.sdk.codegen.extension.find
import gaia.sdk.codegen.extension.findAll
import gaia.sdk.codegen.extension.findOptional

class Interface(val description: Description?,
                val name: String,
                val fields: List<Field>) : AbstractField() {
    constructor(list: List<AbstractAST>) : this(list.findOptional(Description::class),
            list.find(Identifier::class).name,
            list.findAll(Field::class))
}
