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
 * The specification to create an user instance
 */
class CreateUserImpulse(val username:String, 
   val password:String, 
   val using2FA:Boolean, 
   val tenants:Array<out String>, 
   val roles:Array<out String>, 
   val groups:Array<out String>, 
   val permissions:Array<out String>) : Input()

