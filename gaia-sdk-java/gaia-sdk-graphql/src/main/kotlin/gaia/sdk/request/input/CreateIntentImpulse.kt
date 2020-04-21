package gaia.sdk.request.input

import gaia.sdk.api.client.Type
import gaia.sdk.request.intf.*
import gaia.sdk.api.client.Input
import gaia.sdk.api.scalar.*
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

