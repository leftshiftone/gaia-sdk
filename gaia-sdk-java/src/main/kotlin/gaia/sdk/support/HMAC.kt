package gaia.sdk.support

import com.sun.crypto.provider.SunJCE
import java.nio.charset.StandardCharsets
import java.util.*
import javax.crypto.Mac
import javax.crypto.spec.SecretKeySpec

class HMAC(secret: String) {

    private val threadLocal:ThreadLocal<Mac> = ThreadLocal()

    private var mac: Mac

    init {
        this.mac = initMac(secret)
        threadLocal.set(mac)
    }

    fun hash(data: String): String {
        if (threadLocal.get() == null) {
            threadLocal.set(this.mac.clone() as Mac);
        }

        val bytes = threadLocal.get().doFinal(data.toByteArray(StandardCharsets.US_ASCII))
        val formatter = Formatter()
        bytes.forEach { formatter.format("%02x", it) }
        return formatter.toString()
    }

    private fun initMac(key: String): Mac {
        val secretKeySpec = SecretKeySpec(key.toByteArray(), "HmacSHA512")
        val mac = Mac.getInstance("HmacSHA512", SunJCE())
        mac.init(secretKeySpec)
        return mac
    }

}
