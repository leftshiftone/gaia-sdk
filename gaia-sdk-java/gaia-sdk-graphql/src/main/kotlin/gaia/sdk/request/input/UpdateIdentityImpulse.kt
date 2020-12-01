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
 * The specification to update an identity instance
 */
class UpdateIdentityImpulse(val identityId:Uuid, 
   val tenantId:String, 
   val qualifier:String, 
   val availableLanguages:Struct) : Input()

