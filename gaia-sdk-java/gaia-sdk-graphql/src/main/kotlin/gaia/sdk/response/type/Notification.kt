package gaia.sdk.response.type

import gaia.sdk.Uuid
import gaia.sdk.ISO8601
import gaia.sdk.Struct
import gaia.sdk.response.intf.*
import com.fasterxml.jackson.annotation.JsonProperty
import com.fasterxml.jackson.annotation.JsonCreator
import gaia.sdk.request.enumeration.*

data class Notification @JsonCreator constructor(
    @JsonProperty("onCreated") val onCreated:OnCreated? = null, 
    @JsonProperty("onUpdated") val onUpdated:OnUpdated? = null, 
    @JsonProperty("onDeleted") val onDeleted:OnDeleted? = null
)