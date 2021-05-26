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
 * The specification to update a user instance
 */
class UpdateUserImpulse(val userId:Uuid, 
   val username:String, 
   val email:String, 
   val firstName:String, 
   val lastName:String, 
   val password:String) : Input()

