package gaia.sdk

import gaia.sdk.request.type.Query
import gaia.sdk.request.type.Mutation
import gaia.sdk.request.type.Subscription

class GaiaRequest {

    companion object {
        @JvmStatic
        fun query(config: Query.() -> Unit) = Query().apply(config)

        @JvmStatic
        fun mutation(config: Mutation.() -> Unit) = Mutation().apply(config)

        @JvmStatic
        fun subscription(config: Subscription.() -> Unit) = Subscription().apply(config)
    }

}
