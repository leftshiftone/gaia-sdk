package gaia.sdk.codegen.extension

import kotlin.reflect.KClass
import kotlin.reflect.full.cast

fun <A, B : Any>List<A>.findAll(type:KClass<B>):List<B> {
    return this.filter { type.isInstance(it) }.map { type.cast(it) }
}
fun <A, B : Any>List<A>.find(type:KClass<B>):B {
    return this.findAll(type).first()
}
fun <A, B : Any>List<A>.findOptional(type:KClass<B>):B? {
    return this.findAll(type).firstOrNull()
}
fun <T> List<T>?.join(list:List<T>?):List<T> {
    val newList = ArrayList<T>()
    if (this != null) newList.addAll(this)
    if (list != null) newList.addAll(list)
    return newList
}
