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
 * The specification to create a prompt instance
 */
class CreatePromptImpulse(val identityId:Uuid, 
   val qualifier:String, 
   val appendent:String, 
   val utterance:Struct, 
   val labelList:Array<out String>, 
   val version:String) : Input()

