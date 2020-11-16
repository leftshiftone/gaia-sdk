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
 * The specification to append an edge to a node
 */
class ConnectAppendNodeImpulse(val type:EdgeType, 
   val target:Uuid, 
   val properties:Struct, 
   val weight:Float) : Input()

