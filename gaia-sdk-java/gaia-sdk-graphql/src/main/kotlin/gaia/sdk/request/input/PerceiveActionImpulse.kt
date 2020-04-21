package gaia.sdk.request.input

import gaia.sdk.api.client.Type
import gaia.sdk.request.intf.*
import gaia.sdk.api.client.Input
import gaia.sdk.api.scalar.*
import gaia.sdk.request.input.*
import gaia.sdk.request.enumeration.*

/**
 * Input for action perception impulse
 */
class PerceiveActionImpulse(val broadcast:Boolean, 
   val identityId:Uuid, 
   val type:String, 
   val data:Struct) : Input()

