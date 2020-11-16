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
 * The specification to remove an edge of a certain type with a certain target from a node
 */
class ConnectRemoveNodeImpulse(val type:EdgeType, 
   val target:Uuid) : Input()

