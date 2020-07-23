package gaia.sdk.codegen.ast

import gaia.sdk.codegen.ast.annotation.AbstractAnnotation
import gaia.sdk.codegen.ast.type.AbstractType
import gaia.sdk.codegen.ast.value.AbstractValue
import gaia.sdk.codegen.extension.find
import gaia.sdk.codegen.extension.findAll
import gaia.sdk.codegen.extension.findOptional

class Field(val description: Description?,
            val annotations: List<AbstractAnnotation>,
            val name: String,
            val type: AbstractType,
            val defaultValue: AbstractValue?,
            val arguments: List<Argument>) : AbstractField() {
    constructor(list: List<AbstractAST>) : this(list.findOptional(Description::class),
            list.findAll(AbstractAnnotation::class),
            list.find(Identifier::class).name,
            list.find(AbstractType::class),
            list.findOptional(AbstractValue::class),
            list.findAll(Argument::class))
}
