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
 * The specification to create a SkillProvision instance
 */
class CreateSkillProvisionImpulse(val tenantId:Uuid, 
   val qualifier:String, 
   val appendent:String, 
   val labelList:Array<out String>, 
   val version:String, 
   val skillRef:String, 
   val cpu:Int, 
   val memory:Int, 
   val replicas:Int, 
   val enabled:Boolean, 
   val bootstrapTimeout:Int, 
   val environment:Struct) : Input()

