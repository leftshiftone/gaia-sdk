/*
 * Copyright (c) 2016-2020, Leftshift One
 * __________________
 * [2019] Leftshift One
 * All Rights Reserved.
 * NOTICE:  All information contained herein is, and remains
 * the property of Leftshift One and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Leftshift One
 * and its suppliers and may be covered by Patents,
 * patents in process, and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Leftshift One.
 */

package gaia.sdk

import com.fasterxml.jackson.databind.ObjectMapper
import io.reactivex.Flowable
import org.reactivestreams.Publisher
import java.io.File

fun <T> Publisher<T>.toFlowable(): Flowable<T> = Flowable.fromPublisher(this)

fun <T> Iterable<T>.toFlowable(): Flowable<T> = Flowable.fromIterable(this)

fun <T> Publisher<ByteArray>.byteArrayCast(jsonParser : ObjectMapper, type: Class<T>): Flowable<T> = Flowable.fromPublisher(this)
        .map { byteArray -> jsonParser.readValue(byteArray, type)
        }.cast(type)

fun Publisher<ByteArray>.byteArrayToFile(): Flowable<File> = Flowable.fromPublisher(this)
        .map { val file = File.createTempFile("${System.currentTimeMillis()}-", "-gaia-sdk-download")
            file.writeBytes(it)
            file
        }
