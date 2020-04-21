package gaia.sdk.request.type

import gaia.sdk.api.client.Type
import gaia.sdk.request.intf.*
import gaia.sdk.api.client.Input
import gaia.sdk.api.scalar.*
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


    fun edge(config: KnowledgeEdge.() -> Unit) = 
        add { "edge{ " + KnowledgeEdge().apply(config).render(it) + "}"}

}

