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
 * The specification to update an intent instance
 */
class UpdateIntentImpulse(val identityId:Uuid, 
   val reference:Uuid, 
   val qualifier:String, 
   val appendent:String, 
   val utterance:Struct, 
   val labellist:Array<out String>, 
   val version:String) : Input()

