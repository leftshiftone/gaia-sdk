package gaia.sdk.api.heimdall

/**
 * @author benjamin.krenn@leftshift.one
 * @since 1.0.0
 */
interface ILogMessage {
    fun severity(): Severity
    fun message(): String


    enum class Severity {
        WARN,
        INFO,
        ERROR
    }
}