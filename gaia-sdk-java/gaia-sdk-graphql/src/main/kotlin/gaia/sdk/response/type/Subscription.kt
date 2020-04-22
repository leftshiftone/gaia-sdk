package gaia.sdk.response.type

import gaia.sdk.Uuid
import gaia.sdk.Timestamp
import gaia.sdk.Long
import gaia.sdk.Struct
import gaia.sdk.response.intf.*
import com.fasterxml.jackson.annotation.JsonProperty
import com.fasterxml.jackson.annotation.JsonCreator
import gaia.sdk.request.enumeration.*

/**
* the top level subscription type
*/
data class Subscription @JsonCreator constructor(
    @JsonProperty("interact") val interact:Interaction?, 
    @JsonProperty("notify") val notify:Notification?, 
    /**
    * Container element for all introspect sensor fields
    */
    @JsonProperty("introspect") val introspect:Introspection?
)