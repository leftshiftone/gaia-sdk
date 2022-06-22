package gaia.sdk.client

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

    fun hash(data: ByteArray): ByteArray {
        if (threadLocal.get() == null) {
            threadLocal.set(this.mac.clone() as Mac);
        }

        val bytes = threadLocal.get().doFinal(data)
        val formatter = Formatter()
        bytes.forEach { formatter.format("%02x", it) }
        return formatter.toString().toByteArray()
    }

    private fun initMac(key: String): Mac {
        val secretKeySpec = SecretKeySpec(key.toByteArray(), "HmacSHA512")
        val mac = Mac.getInstance("HmacSHA512")
        mac.init(secretKeySpec)
        return mac
    }

}
