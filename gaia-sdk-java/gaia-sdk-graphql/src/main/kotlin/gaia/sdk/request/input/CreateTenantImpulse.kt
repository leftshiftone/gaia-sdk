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
 * The specification to create a tenant
 */
class CreateTenantImpulse(val qualifier:String, 
   val implicitIdentities:Array<out String>, 
   val explicitIdentities:Array<out String>) : Input()

