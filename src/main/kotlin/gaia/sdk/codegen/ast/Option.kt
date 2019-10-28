package gaia.sdk.codegen.ast

import gaia.sdk.codegen.ast.annotation.AbstractAnnotation
import gaia.sdk.codegen.ast.type.AbstractType
import gaia.sdk.codegen.ast.value.AbstractValue
import gaia.sdk.codegen.extension.find
import gaia.sdk.codegen.extension.findAll

class Option(val annotations: List<AbstractAnnotation>,
             val name: String,
             val type: AbstractType,
             val value: AbstractValue) : AbstractField() {
    constructor(list: List<AbstractAST>) : this(list.findAll(AbstractAnnotation::class),
            list.find(Identifier::class).name,
            list.find(AbstractType::class),
            list.find(AbstractValue::class))
}
