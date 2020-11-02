package gaia.sdk.response.type

import gaia.sdk.Uuid
import gaia.sdk.ISO8601
import gaia.sdk.Struct
import gaia.sdk.response.intf.*
import com.fasterxml.jackson.annotation.JsonProperty
import com.fasterxml.jackson.annotation.JsonCreator
import gaia.sdk.request.enumeration.*

/**
* the top level subscription type
*/
data class Subscription @JsonCreator constructor(
    @JsonProperty("interact") val interact:Interaction? = null, 
    @JsonProperty("notify") val notify:Notification? = null, 
    /**
    * Container element for all introspect sensor fields
    */
    @JsonProperty("introspect") val introspect:Introspection? = null
)