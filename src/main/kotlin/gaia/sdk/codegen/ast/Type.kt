package gaia.sdk.codegen.ast

import gaia.sdk.codegen.extension.find
import gaia.sdk.codegen.extension.findAll
import gaia.sdk.codegen.extension.findOptional

class Type(val description: Description?,
           val name: String,
           val intf: Interface?,
           val fields: List<Field>) : AbstractAST() {
    constructor(list: List<AbstractAST>) : this(list.findOptional(Description::class),
            list.find(Identifier::class).name,
            list.findOptional(Interface::class),
            list.findAll(Field::class))
}
