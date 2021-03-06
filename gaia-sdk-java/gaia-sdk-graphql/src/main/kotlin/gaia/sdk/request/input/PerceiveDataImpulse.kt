package gaia.sdk.request.input

import gaia.sdk.client.Type
import gaia.sdk.request.intf.*
import gaia.sdk.client.Input
import gaia.sdk.Uuid
import gaia.sdk.ISO8601
import gaia.sdk.Struct
import gaia.sdk.request.input.*
import gaia.sdk.request.enumeration.*

/**
 * Input for data perception impulse.
 */
class PerceiveDataImpulse(val identityId:Uuid, 
   val eventName:String, 
   val eventData:Struct) : Input()

