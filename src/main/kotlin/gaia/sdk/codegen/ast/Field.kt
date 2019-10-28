package gaia.sdk.codegen.ast

import gaia.sdk.codegen.ast.annotation.AbstractAnnotation
import gaia.sdk.codegen.ast.type.AbstractType
import gaia.sdk.codegen.extension.find
import gaia.sdk.codegen.extension.findAll

class Field(val annotations: List<AbstractAnnotation>,
            val name: String,
            val type: AbstractType,
            val arguments: List<Argument>) : AbstractField() {
    constructor(list: List<AbstractAST>) : this(list.findAll(AbstractAnnotation::class),
            list.find(Identifier::class).name,
            list.find(AbstractType::class),
            list.findAll(Argument::class))
}
