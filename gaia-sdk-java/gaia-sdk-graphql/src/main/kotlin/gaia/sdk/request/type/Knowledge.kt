package gaia.sdk.request.type

import gaia.sdk.client.Type
import gaia.sdk.request.intf.*
import gaia.sdk.client.Input
import gaia.sdk.Uuid
import gaia.sdk.ISO8601
import gaia.sdk.Struct
import gaia.sdk.request.input.*
import gaia.sdk.request.enumeration.*

class Knowledge: Type() {

    fun intents(config: Intent.() -> Unit) = 
        add { "intents{ " + Intent().apply(config).render(it) + "}"}


    fun prompts(config: Prompt.() -> Unit) = 
        add { "prompts{ " + Prompt().apply(config).render(it) + "}"}


    fun fulfilments(config: Fulfilment.() -> Unit) = 
        add { "fulfilments{ " + Fulfilment().apply(config).render(it) + "}"}


    fun statements(config: Statement.() -> Unit) = 
        add { "statements{ " + Statement().apply(config).render(it) + "}"}


    fun codes(config: Code.() -> Unit) = 
        add { "codes{ " + Code().apply(config).render(it) + "}"}


    fun behaviours(config: Behaviour.() -> Unit) = 
        add { "behaviours{ " + Behaviour().apply(config).render(it) + "}"}


    fun edges(config: KnowledgeEdge.() -> Unit) = 
        add { "edges{ " + KnowledgeEdge().apply(config).render(it) + "}"}

}

