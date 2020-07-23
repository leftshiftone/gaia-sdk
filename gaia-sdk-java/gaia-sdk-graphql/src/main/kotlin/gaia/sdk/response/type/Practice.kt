package gaia.sdk.response.type

import gaia.sdk.Uuid
import gaia.sdk.ISO8601
import gaia.sdk.Struct
import gaia.sdk.response.intf.*
import com.fasterxml.jackson.annotation.JsonProperty
import com.fasterxml.jackson.annotation.JsonCreator
import gaia.sdk.request.enumeration.*

/**
* This type contains all practice sensor impulses which are used to support
* practice in gaia.
*/
data class Practice @JsonCreator constructor(
    /**
    * Stream practice preparation impulse used to transfer a skill to gaia.
    *     This perception impulse do not invoke the data transmission but establishes
    *     a connection to the streaming api.
    */
    @JsonProperty("prepare") val prepare:StreamingImpulse?
)