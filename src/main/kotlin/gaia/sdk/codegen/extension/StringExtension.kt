package gaia.sdk.codegen.extension

import gaia.sdk.codegen.Codegen
import java.io.InputStream
import kotlin.reflect.KClass
import kotlin.reflect.full.cast

fun String.substringBetween(str1:String, str2:String):String {
    val index1 = this.indexOf(str1) + 1
    val index2 = this.lastIndexOf(str2)

    return this.substring(index1, index2)
}
fun String.stream():InputStream {
    return Codegen::class.java.getResourceAsStream(this)
}
