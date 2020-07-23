package gaia.sdk.codegen

import gaia.sdk.antlr.GaiaSdkBaseVisitor
import gaia.sdk.antlr.GaiaSdkParser.*
import gaia.sdk.codegen.ast.*
import gaia.sdk.codegen.ast.Enum
import gaia.sdk.codegen.ast.annotation.Deprecated
import gaia.sdk.codegen.ast.type.RefType
import gaia.sdk.codegen.ast.type.ListType
import gaia.sdk.codegen.ast.type.ScalarType
import gaia.sdk.codegen.ast.value.BooleanValue
import gaia.sdk.codegen.ast.value.FloatValue
import gaia.sdk.codegen.ast.value.IntValue
import gaia.sdk.codegen.ast.value.StringValue
import gaia.sdk.codegen.extension.join
import gaia.sdk.codegen.extension.substringBetween

class CodegenVisitor : GaiaSdkBaseVisitor<List<AbstractAST>>() {
    override fun visitIdentifier(ctx: IdentifierContext) = listOf(Identifier(ctx.text))
    override fun visitField(ctx: FieldContext) = listOf(Field(super.visitField(ctx)))
    override fun visitSimpleType(ctx: SimpleTypeContext) = listOf(RefType(ctx.text.replace("!", ""), ctx.text.endsWith("!")))
    override fun visitListType(ctx: ListTypeContext) = listOf(ListType(super.visitListType(ctx), ctx.text.endsWith("?")))
    override fun visitArgument(ctx: ArgumentContext) = listOf(Argument(super.visitArgument(ctx)))
    override fun visitDeprecated(ctx: DeprecatedContext) = listOf(Deprecated(ctx.text.replace("\"", "")))
    override fun visitBooleanValue(ctx: BooleanValueContext) = listOf(BooleanValue(ctx.text.equals("true")))
    override fun visitStringValue(ctx: StringValueContext) = listOf(StringValue(ctx.text))
    override fun visitIntValue(ctx: IntValueContext) = listOf(IntValue(ctx.text.toInt()))
    override fun visitFloatValue(ctx: FloatValueContext) = listOf(FloatValue(ctx.text.toFloat()))
    override fun visitType(ctx: TypeContext) = listOf(Type(super.visitType(ctx)))
    override fun visitDescription(ctx: DescriptionContext) = listOf(Description(ctx.text.replace("\"", "").trim()))
    override fun visitInterface_(ctx: Interface_Context) = listOf(Interface(super.visitInterface_(ctx)))
    override fun visitEnum_(ctx: Enum_Context) = listOf(Enum(super.visitEnum_(ctx)))
    override fun visitInput(ctx: InputContext) = listOf(Input(super.visitInput(ctx)))
    override fun visitScalar(ctx: ScalarContext) = listOf(Scalar(ctx.getChild(1).text))
    override fun visitScalarType(ctx: ScalarTypeContext) = listOf(ScalarType(ctx.text, false))
    override fun aggregateResult(list1: List<AbstractAST>?, list2: List<AbstractAST>?) = list1.join(list2)
}
