package gaia.sdk.request.type

import gaia.sdk.client.Type
import gaia.sdk.request.intf.*
import gaia.sdk.client.Input
import gaia.sdk.Uuid
import gaia.sdk.ISO8601
import gaia.sdk.Struct
import gaia.sdk.request.input.*
import gaia.sdk.request.enumeration.*

class MetricsEntityCount: Type() {

    fun intents() { 
        add {"intents" } 
    }

    fun prompts() { 
        add {"prompts" } 
    }

    fun statements() { 
        add {"statements" } 
    }

    fun fulfilments() { 
        add {"fulfilments" } 
    }

    fun behaviours() { 
        add {"behaviours" } 
    }

    fun codes() { 
        add {"codes" } 
    }
}

