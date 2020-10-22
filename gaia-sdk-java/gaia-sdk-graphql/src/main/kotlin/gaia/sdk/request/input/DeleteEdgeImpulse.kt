package gaia.sdk.request.input

import gaia.sdk.client.Input
import gaia.sdk.Uuid

/**
 * The specification to delete an edge instance
 */
class DeleteEdgeImpulse(val source:Uuid, 
   val edgeId:Uuid) : Input()

