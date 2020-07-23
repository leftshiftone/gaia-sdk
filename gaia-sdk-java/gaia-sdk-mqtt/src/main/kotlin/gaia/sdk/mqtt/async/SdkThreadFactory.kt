/*
 * Copyright (c) 2016-2020, Leftshift One
 * __________________
 * [2020] Leftshift One
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

package gaia.sdk.mqtt.async

import java.util.concurrent.ThreadFactory
import java.util.concurrent.atomic.AtomicInteger

class SdkThreadFactory private constructor() : ThreadFactory {
    companion object {
        val securityManager = System.getSecurityManager()
        val INSTANCE = SdkThreadFactory()
    }

    private val group: ThreadGroup
    private val threadNumber: AtomicInteger = AtomicInteger(1)

    init {
        val securityManager = System.getSecurityManager()
        group = if (securityManager != null) securityManager.threadGroup else Thread.currentThread().threadGroup
    }

    override fun newThread(r: Runnable): Thread {
        val t = Thread(group, r, "sdk-thread-${threadNumber.getAndIncrement()}", 0)

        if (t.isDaemon) t.isDaemon = false
        if (t.priority != Thread.NORM_PRIORITY) t.priority = Thread.NORM_PRIORITY
        return t
    }
}