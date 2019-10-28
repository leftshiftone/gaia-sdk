package gaia.sdk.codegen

import gaia.sdk.antlr.GaiaSdkBaseVisitor
import gaia.sdk.antlr.GaiaSdkParser.*
import gaia.sdk.codegen.ast.*
import gaia.sdk.codegen.ast.annotation.Deprecated
import gaia.sdk.codegen.ast.annotation.GetterSetter
import gaia.sdk.codegen.ast.annotation.IncomingType
import gaia.sdk.codegen.ast.annotation.OutgoingType
import gaia.sdk.codegen.ast.type.*
import gaia.sdk.codegen.ast.value.*
import gaia.sdk.codegen.exception.CodegenException
import gaia.sdk.codegen.extension.find
import gaia.sdk.codegen.extension.join
import gaia.sdk.codegen.extension.substringBetween

class CodegenVisitor : GaiaSdkBaseVisitor<List<AbstractAST>>() {
    override fun visitIdentifier(ctx: IdentifierContext) = listOf(Identifier(ctx.text))
    override fun visitEntity(ctx: EntityContext) = listOf(Entity(super.visitEntity(ctx), ctx.text.contains("list(")))
    override fun visitField(ctx: FieldContext) = listOf(Field(super.visitField(ctx)))
    override fun visitSimpleType(ctx: SimpleTypeContext): List<AbstractAST> {
        return when(ctx.text) {
            "string" -> listOf(StringType(false))
            "string?" -> listOf(StringType(true))
            "int" -> listOf(IntType(true))
            "int?" -> listOf(IntType(false))
            "float" -> listOf(FloatType(true))
            "float?" -> listOf(FloatType(false))
            "boolean" -> listOf(BooleanType(false))
            "boolean?" -> listOf(BooleanType(true))
            "date" -> listOf(DateType(false))
            "date?" -> listOf(DateType(true))
            "map" -> listOf(MapType(false))
            "map?" -> listOf(MapType(true))
            "byte" -> listOf(ByteType(false))
            "byte?" -> listOf(ByteType(true))
            else -> listOf(EntityType(ctx.text.replace("?", ""), ctx.text.endsWith("?")))
        }
    }
    override fun visitRefType(ctx: RefTypeContext) = listOf(RefType(super.visitRefType(ctx), ctx.text.endsWith("?")))
    override fun visitListType(ctx: ListTypeContext) = listOf(ListType(super.visitListType(ctx), ctx.text.endsWith("?")))
    override fun visitArgument(ctx: ArgumentContext) = listOf(Argument(super.visitArgument(ctx)))
    override fun visitDeprecated(ctx: DeprecatedContext) = listOf(Deprecated(ctx.text.substringBetween("(", ")")))
    override fun visitOption(ctx: OptionContext) = listOf(Option(super.visitOption(ctx)))
    override fun visitBooleanValue(ctx: BooleanValueContext) = listOf(BooleanValue(ctx.text.equals("true")))
    override fun visitStringValue(ctx: StringValueContext) = listOf(StringValue(ctx.text))
    override fun visitIntValue(ctx: IntValueContext) = listOf(IntValue(ctx.text.toInt()))
    override fun visitFloatValue(ctx: FloatValueContext) = listOf(FloatValue(ctx.text.toFloat()))
    override fun visitArrayType(ctx: ArrayTypeContext) = listOf(ArrayType(super.visitArrayType(ctx), ctx.text.endsWith("?")))
    override fun visitIncomingType(ctx: IncomingTypeContext) = listOf(IncomingType())
    override fun visitOutgoingType(ctx: OutgoingTypeContext) = listOf(OutgoingType())
    override fun visitQuery(ctx: QueryContext) = listOf(Query(super.visitQuery(ctx)))
    override fun visitMutation(ctx: MutationContext) = listOf(Mutation(super.visitMutation(ctx)))
    override fun visitSubscription(ctx: SubscriptionContext) = listOf(Subscription(super.visitSubscription(ctx)))
    override fun aggregateResult(list1: List<AbstractAST>?, list2: List<AbstractAST>?) = list1.join(list2)
}
