package gaia.sdk.request.type

import gaia.sdk.Uuid
import gaia.sdk.client.Type

class Knowledge: Type() {

    fun intents(identityId : Uuid, config: Intent.() -> Unit) = add {
        val name1 = it.register("identityId", identityId)
        "intents(identityId:$$name1){" + Intent().apply(config).render(it) + "}"
    }

    fun intent(identityId : Uuid, reference : Uuid, config: Intent.() -> Unit) = add {
        val name1 = it.register("identityId", identityId)
        val name2 = it.register("reference", reference)
        "intent(identityId:$$name1, reference:$$name2){" + Intent().apply(config).render(it) + "}"
    }

    fun prompts(identityId : Uuid, config: Prompt.() -> Unit) = add {
        val name1 = it.register("identityId", identityId)
        "prompts(identityId:$$name1){" + Prompt().apply(config).render(it) + "}"
    }

    fun prompt(identityId : Uuid, reference : Uuid, config: Prompt.() -> Unit) = add {
        val name1 = it.register("identityId", identityId)
        val name2 = it.register("reference", reference)
        "prompt(identityId:$$name1, reference:$$name2){" + Prompt().apply(config).render(it) + "}"
    }

    fun fulfilments(identityId : Uuid, config: Fulfilment.() -> Unit) = add {
        val name1 = it.register("identityId", identityId)
        "fulfilments(identityId:$$name1){" + Fulfilment().apply(config).render(it) + "}"
    }

    fun fulfilment(identityId : Uuid, reference : Uuid, config: Fulfilment.() -> Unit) = add {
        val name1 = it.register("identityId", identityId)
        val name2 = it.register("reference", reference)
        "fulfilment(identityId:$$name1, reference:$$name2){" + Fulfilment().apply(config).render(it) + "}"
    }

    fun statements(identityId : Uuid, config: Statement.() -> Unit) = add {
        val name1 = it.register("identityId", identityId)
        "statements(identityId:$$name1){" + Statement().apply(config).render(it) + "}"
    }

    fun statement(identityId : Uuid, reference : Uuid, config: Statement.() -> Unit) = add {
        val name1 = it.register("identityId", identityId)
        val name2 = it.register("reference", reference)
        "statement(identityId:$$name1, reference:$$name2){" + Statement().apply(config).render(it) + "}"
    }

    fun codes(identityId : Uuid, config: Code.() -> Unit) = add {
        val name1 = it.register("identityId", identityId)
        "codes(identityId:$$name1){" + Code().apply(config).render(it) + "}"
    }

    fun code(identityId : Uuid, reference : Uuid, config: Code.() -> Unit) = add {
        val name1 = it.register("identityId", identityId)
        val name2 = it.register("reference", reference)
        "code(identityId:$$name1, reference:$$name2){" + Code().apply(config).render(it) + "}"
    }

    fun behaviours(identityId : Uuid, config: Behaviour.() -> Unit) = add {
        val name1 = it.register("identityId", identityId)
        "behaviours(identityId:$$name1){" + Behaviour().apply(config).render(it) + "}"
    }

    fun behaviour(identityId : Uuid, reference : Uuid, config: Behaviour.() -> Unit) = add {
        val name1 = it.register("identityId", identityId)
        val name2 = it.register("reference", reference)
        "behaviour(identityId:$$name1, reference:$$name2){" + Behaviour().apply(config).render(it) + "}"
    }

    fun edges(source : Uuid, config: KnowledgeEdge.() -> Unit) = add {
        val name1 = it.register("source", source)
        "edges(source:$$name1){" + KnowledgeEdge().apply(config).render(it) + "}"
    }

    fun edge(source : Uuid, target : Uuid, config: KnowledgeEdge.() -> Unit) = add {
        val name1 = it.register("source", source)
        val name2 = it.register("target", target)
        "edge(source:$$name1, target:$$name2){" + KnowledgeEdge().apply(config).render(it) + "}"
    }
}

