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
 * The specification to create a skill instance
 */
class CreateSkillImpulse(val tenantId:Uuid, 
   val qualifier:String, 
   val appendent:String, 
   val labelList:Array<out String>, 
   val repositoryUri:String, 
   val repositoryType:String) : Input()

