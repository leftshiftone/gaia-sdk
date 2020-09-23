package gaia.sdk.request.input

import gaia.sdk.Struct
import gaia.sdk.Uuid
import gaia.sdk.client.Input

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

