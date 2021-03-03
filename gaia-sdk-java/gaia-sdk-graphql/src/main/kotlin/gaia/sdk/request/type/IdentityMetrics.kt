package gaia.sdk.request.type

import gaia.sdk.client.Type
import gaia.sdk.request.intf.*
import gaia.sdk.client.Input
import gaia.sdk.Uuid
import gaia.sdk.ISO8601
import gaia.sdk.Struct
import gaia.sdk.request.input.*
import gaia.sdk.request.enumeration.*

/**
 * Represents identity metrics information
 */
class IdentityMetrics: Type() {

    fun identityId() { 
        add {"identityId" } 
    }

    fun entityCount(config: MetricsEntityCount.() -> Unit) = 
        add { "entityCount{ " + MetricsEntityCount().apply(config).render(it) + "}"}


    fun topExecutedBehaviours(config: TopExecutedBehaviour.() -> Unit) = 
        add { "topExecutedBehaviours{ " + TopExecutedBehaviour().apply(config).render(it) + "}"}


    fun behaviourStates(config: BehaviourState.() -> Unit) = 
        add { "behaviourStates{ " + BehaviourState().apply(config).render(it) + "}"}

}

