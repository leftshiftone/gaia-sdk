package gaia.sdk.mock.server

import com.fasterxml.jackson.databind.SerializationFeature
import io.ktor.application.*
import io.ktor.features.*
import io.ktor.http.*
import io.ktor.http.HttpHeaders.UnsafeHeaders
import io.ktor.jackson.*
import io.ktor.request.*
import io.ktor.response.*
import io.ktor.routing.*
import io.ktor.server.engine.*
import io.ktor.server.netty.*
import java.util.*

fun Application.module() {
    install(DefaultHeaders)
    install(CallLogging)
    install(ContentNegotiation) {
        jackson {
            enable(SerializationFeature.INDENT_OUTPUT)
        }
    }
    install(CORS) {
        anyHost()
        HttpHeaders.allHeaders.forEach { header(it) }
        HttpMethod.DefaultMethods.forEach { method(it) }
    }
    install(Routing) {
        get("/status") {
            call.respondText("ready", ContentType.Text.Plain)
        }
        post("/api/auth/access") {
            call.respond(LoginResponse(
                "john.doe",
                "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzUxMiJ9.eyJzdWIiOiIzNmNiM2I0Ni0zNjljLTNhM2YtYWM3NC1lNDcyZjQ3NzZlOWQiLCJpc3MiOiJsZWZ0c2hpZnQgb25lIiwiZXhwIjoxNjAyNzkzNjMwLCJpYXQiOjE2MDI3NjQ4MzAsImp0aSI6IjAxZmRmNGQyLTM0ZDQtNDFmNC05MzZjLTA5ODU3NWNiMzMwYiJ9.ULQIXiMKwLRWaMRIEIpmAiRx61-2sd2ionH8i-Xz1fprpxHa9ToT_CO5Ci5mrWGeS2qd0Gwoo66TqKkw4RMx94FAaR4FUxpuHGLsNGo_TMhr2tMNBx05xdarAWLXo8enqn5SMQTud3dnbkW99NDnKhaePs5ybzyEcE9Fz5c3camJ3LGExTenHJMaXgBr-wHnAJy0EA7voEnkKLW3eihjrrAy3Rlj4eydglx9kNotA5l7kbZWpgKTJXSO_drHgt9X-5S1pezSXy8gseAkVapsloR-wNQ57AI_Y3RZolyBO4cBTEgSsV2uzE-xolJajpIW05E7xeh4TTyVaBM0meiQpe1yFYkMekbFyJ-SOFE557OMmq-ZsRjoiFZtQDC-kgIGTWfLUj-TnPXIVy8qXnpfVcIAHdA8b1z0RGCbz1majQ9FiOka_h-NfbVxqUiAP52PjsncN6fcQ9AhiFM7en0yyJB5zD8SdNtu1C16W7WJbus8Npr5o0nky1j-XbDD09E6gmPymOwzEltkLtrtbTY-G7xM_Rhhlz5aaXytyEZWu95fLifQgiSBDQKbGAtAqsQkVoBp8oJ5cl-bwTtNgVMvIAy1k3SKaLUmf10k0edV0Yep6oNg6aV6Op-w2v2f8AwgqOsAnBpkg6nUuTEXg6D2SCzYeVNKwsw9jfToNk4sXZ0"
            ))
        }
        post("/api/entity") {
            val payload = call.receiveText()
            println(payload)
            if (payload.matches("""\{"statement":"mutation gaia\(.*?PerceiveDataImpulse!\).*""".toRegex())) {
                call.respond(GraphqlResponse(PerceiveResponse(PerceiveDataResponse(ImpulseIdResponse(UUID.randomUUID().toString())))))
            } else if (payload.matches("""\{"statement":"mutation gaia\(.*?PerceiveActionImpulse!\).*""".toRegex())) {
                call.respond(GraphqlResponse(PerceiveResponse(PerceiveActionResponse(ImpulseIdResponse(UUID.randomUUID().toString())))))
            } else {
                call.respondText("Hello World 123", ContentType.Text.Html)
            }
        }
    }
}

fun main(args: Array<String>) {
    embeddedServer(Netty, 8080, watchPaths =  listOf("MainKt"), module = Application::module).start()
}

data class LoginResponse(
    val username: String,
    val accessToken: String
)

data class ImpulseIdResponse(
    val id: String
)

data class PerceiveDataResponse(
    val perceiveData: Any
)

data class PerceiveActionResponse(
    val perceiveData: Any
)

data class PerceiveResponse(
    val perceive: Any
)

data class GraphqlResponse(
    val data: Any
)



val HttpHeaders.allHeaders
    get() = listOf(
            Accept, AcceptCharset, AcceptEncoding, AcceptLanguage, AcceptRanges,
            Age, Allow, ALPN, AuthenticationInfo, Authorization, CacheControl, Connection,
            ContentDisposition, ContentEncoding, ContentLanguage, ContentLength, ContentLocation,
            ContentRange, ContentType, Cookie, DASL, Date, DAV, Depth, Destination, ETag, Expect,
            Expires, From, Forwarded, Host, HTTP2Settings, If, IfMatch, IfModifiedSince,
            IfNoneMatch, IfRange, IfScheduleTagMatch, IfUnmodifiedSince, LastModified,
            Location, LockToken, Link, MaxForwards, MIMEVersion, OrderingType, Origin,
            Overwrite, Position, Pragma, Prefer, PreferenceApplied, ProxyAuthenticate,
            ProxyAuthenticationInfo, ProxyAuthorization, PublicKeyPins, PublicKeyPinsReportOnly,
            Range, Referrer, RetryAfter, ScheduleReply, ScheduleTag, SecWebSocketAccept,
            SecWebSocketExtensions, SecWebSocketKey, SecWebSocketProtocol, SecWebSocketVersion,
            Server, SetCookie, SLUG, StrictTransportSecurity, TE, Timeout, Trailer,
            TransferEncoding, Upgrade, UserAgent, Vary, Via, Warning, WWWAuthenticate,
            AccessControlAllowOrigin, AccessControlAllowMethods, AccessControlAllowCredentials,
            AccessControlAllowHeaders, AccessControlRequestMethod, AccessControlRequestHeaders,
            AccessControlExposeHeaders, AccessControlMaxAge, XHttpMethodOverride, XForwardedHost,
            XForwardedServer, XForwardedProto, XForwardedFor, XRequestId, XCorrelationId
    )