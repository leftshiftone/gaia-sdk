package gaia.sdk.codegen.ast

import gaia.sdk.codegen.ast.type.AbstractType
import gaia.sdk.codegen.ast.value.AbstractValue
import gaia.sdk.codegen.extension.find
import gaia.sdk.codegen.extension.findOptional

class Argument(val name: String, val type: AbstractType, val value:AbstractValue?, val mandatory: Boolean) : AbstractAST() {
    constructor(list: List<AbstractAST>, mandatory: Boolean) : this(list.find(Identifier::class).name,
            list.find(AbstractType::class),
            list.findOptional(AbstractValue::class),
            mandatory)

    fun isOptional() = !mandatory
}
