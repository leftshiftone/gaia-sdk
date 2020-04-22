package gaia.sdk.request.input

import gaia.sdk.client.Type
import gaia.sdk.request.intf.*
import gaia.sdk.client.Input
import gaia.sdk.Uuid
import gaia.sdk.Timestamp
import gaia.sdk.Long
import gaia.sdk.Struct
import gaia.sdk.request.input.*
import gaia.sdk.request.enumeration.*

/**
 * The specification to create an intent instance
 */
class CreateIntentImpulse(val identityId:Uuid, 
   val qualifier:String, 
   val appendent:String, 
   val utterance:Struct, 
   val labellist:Struct, 
   val version:String) : Input()

