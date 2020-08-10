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

    fun identities(limit : Int?, offset : Int?, config: Identity.() -> Unit) = add {
        val name1 = it.register("limit", limit)
        val name2 = it.register("offset", offset)
        "identities(limit:$name1, offset:$name2){" + Identity().apply(config).render(it) + "}"
    }

    fun identity(identityId : Uuid?, config: Identity.() -> Unit) = add {
        val name1 = it.register("identityId", identityId)
        "identity(identityId:$name1){" + Identity().apply(config).render(it) + "}"
    }

    fun intents(identityId : Uuid?, limit : Int?, offset : Int?, config: Intent.() -> Unit) = add {
        val name1 = it.register("identityId", identityId)
        val name2 = it.register("limit", limit)
        val name3 = it.register("offset", offset)
        "intents(identityId:$name1, limit:$name2, offset:$name3){" + Intent().apply(config).render(it) + "}"
    }

    fun intent(identityId : Uuid?, reference : Uuid?, config: Intent.() -> Unit) = add {
        val name1 = it.register("identityId", identityId)
        val name2 = it.register("reference", reference)
        "intent(identityId:$name1, reference:$name2){" + Intent().apply(config).render(it) + "}"
    }

    fun prompts(identityId : Uuid?, limit : Int?, offset : Int?, config: Prompt.() -> Unit) = add {
        val name1 = it.register("identityId", identityId)
        val name2 = it.register("limit", limit)
        val name3 = it.register("offset", offset)
        "prompts(identityId:$name1, limit:$name2, offset:$name3){" + Prompt().apply(config).render(it) + "}"
    }

    fun prompt(identityId : Uuid?, reference : Uuid?, config: Prompt.() -> Unit) = add {
        val name1 = it.register("identityId", identityId)
        val name2 = it.register("reference", reference)
        "prompt(identityId:$name1, reference:$name2){" + Prompt().apply(config).render(it) + "}"
    }

    fun fulfilments(identityId : Uuid?, limit : Int?, offset : Int?, config: Fulfilment.() -> Unit) = add {
        val name1 = it.register("identityId", identityId)
        val name2 = it.register("limit", limit)
        val name3 = it.register("offset", offset)
        "fulfilments(identityId:$name1, limit:$name2, offset:$name3){" + Fulfilment().apply(config).render(it) + "}"
    }

    fun fulfilment(identityId : Uuid?, reference : Uuid?, config: Fulfilment.() -> Unit) = add {
        val name1 = it.register("identityId", identityId)
        val name2 = it.register("reference", reference)
        "fulfilment(identityId:$name1, reference:$name2){" + Fulfilment().apply(config).render(it) + "}"
    }

    fun statements(identityId : Uuid?, limit : Int?, offset : Int?, config: Statement.() -> Unit) = add {
        val name1 = it.register("identityId", identityId)
        val name2 = it.register("limit", limit)
        val name3 = it.register("offset", offset)
        "statements(identityId:$name1, limit:$name2, offset:$name3){" + Statement().apply(config).render(it) + "}"
    }

    fun statement(identityId : Uuid?, reference : Uuid?, config: Statement.() -> Unit) = add {
        val name1 = it.register("identityId", identityId)
        val name2 = it.register("reference", reference)
        "statement(identityId:$name1, reference:$name2){" + Statement().apply(config).render(it) + "}"
    }

    fun codes(identityId : Uuid?, limit : Int?, offset : Int?, config: Code.() -> Unit) = add {
        val name1 = it.register("identityId", identityId)
        val name2 = it.register("limit", limit)
        val name3 = it.register("offset", offset)
        "codes(identityId:$name1, limit:$name2, offset:$name3){" + Code().apply(config).render(it) + "}"
    }

    fun code(identityId : Uuid?, reference : Uuid?, config: Code.() -> Unit) = add {
        val name1 = it.register("identityId", identityId)
        val name2 = it.register("reference", reference)
        "code(identityId:$name1, reference:$name2){" + Code().apply(config).render(it) + "}"
    }

    fun behaviours(identityId : Uuid?, limit : Int?, offset : Int?, config: Behaviour.() -> Unit) = add {
        val name1 = it.register("identityId", identityId)
        val name2 = it.register("limit", limit)
        val name3 = it.register("offset", offset)
        "behaviours(identityId:$name1, limit:$name2, offset:$name3){" + Behaviour().apply(config).render(it) + "}"
    }

    fun behaviour(identityId : Uuid?, reference : Uuid?, config: Behaviour.() -> Unit) = add {
        val name1 = it.register("identityId", identityId)
        val name2 = it.register("reference", reference)
        "behaviour(identityId:$name1, reference:$name2){" + Behaviour().apply(config).render(it) + "}"
    }

    fun edges(source : Uuid?, limit : Int?, offset : Int?, config: Edge.() -> Unit) = add {
        val name1 = it.register("source", source)
        val name2 = it.register("limit", limit)
        val name3 = it.register("offset", offset)
        "edges(source:$name1, limit:$name2, offset:$name3){" + Edge().apply(config).render(it) + "}"
    }

    fun edge(source : Uuid?, target : Uuid?, config: Edge.() -> Unit) = add {
        val name1 = it.register("source", source)
        val name2 = it.register("target", target)
        "edge(source:$name1, target:$name2){" + Edge().apply(config).render(it) + "}"
    }
}

