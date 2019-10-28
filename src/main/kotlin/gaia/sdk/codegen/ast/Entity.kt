package gaia.sdk.codegen.ast

import gaia.sdk.codegen.ast.annotation.AbstractAnnotation
import gaia.sdk.codegen.extension.find
import gaia.sdk.codegen.extension.findAll

class Entity(val name: String,
             val arguments: List<Argument>,
             val fields: List<AbstractField>,
             val annotations: List<AbstractAnnotation>,
             val listType:Boolean) : AbstractField() {
    constructor(list: List<AbstractAST>, listType:Boolean) : this(list.find(Identifier::class).name,
            list.findAll(Argument::class),
            list.findAll(AbstractField::class),
            list.findAll(AbstractAnnotation::class),
            listType)
}
