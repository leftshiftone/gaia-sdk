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

    fun identities(limit : Int?, offset : Int?, orderBy : OrderByField?, order : Order?, config: Identity.() -> Unit) = add {
        val name1 = it.register("limit", limit)
        val name2 = it.register("offset", offset)
        val name3 = it.register("orderBy", orderBy)
        val name4 = it.register("order", order)
        "identities(limit:$name1, offset:$name2, orderBy:$name3, order:$name4){" + Identity().apply(config).render(it) + "}"
    }

    fun identity(identityId : Uuid?, config: Identity.() -> Unit) = add {
        val name1 = it.register("identityId", identityId)
        "identity(identityId:$name1){" + Identity().apply(config).render(it) + "}"
    }

    fun intents(identityId : Uuid?, limit : Int?, offset : Int?, orderBy : OrderByField?, order : Order?, config: Intent.() -> Unit) = add {
        val name1 = it.register("identityId", identityId)
        val name2 = it.register("limit", limit)
        val name3 = it.register("offset", offset)
        val name4 = it.register("orderBy", orderBy)
        val name5 = it.register("order", order)
        "intents(identityId:$name1, limit:$name2, offset:$name3, orderBy:$name4, order:$name5){" + Intent().apply(config).render(it) + "}"
    }

    fun intent(identityId : Uuid?, reference : Uuid?, config: Intent.() -> Unit) = add {
        val name1 = it.register("identityId", identityId)
        val name2 = it.register("reference", reference)
        "intent(identityId:$name1, reference:$name2){" + Intent().apply(config).render(it) + "}"
    }

    fun prompts(identityId : Uuid?, limit : Int?, offset : Int?, orderBy : OrderByField?, order : Order?, config: Prompt.() -> Unit) = add {
        val name1 = it.register("identityId", identityId)
        val name2 = it.register("limit", limit)
        val name3 = it.register("offset", offset)
        val name4 = it.register("orderBy", orderBy)
        val name5 = it.register("order", order)
        "prompts(identityId:$name1, limit:$name2, offset:$name3, orderBy:$name4, order:$name5){" + Prompt().apply(config).render(it) + "}"
    }

    fun prompt(identityId : Uuid?, reference : Uuid?, config: Prompt.() -> Unit) = add {
        val name1 = it.register("identityId", identityId)
        val name2 = it.register("reference", reference)
        "prompt(identityId:$name1, reference:$name2){" + Prompt().apply(config).render(it) + "}"
    }

    fun fulfilments(identityId : Uuid?, limit : Int?, offset : Int?, orderBy : OrderByField?, order : Order?, config: Fulfilment.() -> Unit) = add {
        val name1 = it.register("identityId", identityId)
        val name2 = it.register("limit", limit)
        val name3 = it.register("offset", offset)
        val name4 = it.register("orderBy", orderBy)
        val name5 = it.register("order", order)
        "fulfilments(identityId:$name1, limit:$name2, offset:$name3, orderBy:$name4, order:$name5){" + Fulfilment().apply(config).render(it) + "}"
    }

    fun fulfilment(identityId : Uuid?, reference : Uuid?, config: Fulfilment.() -> Unit) = add {
        val name1 = it.register("identityId", identityId)
        val name2 = it.register("reference", reference)
        "fulfilment(identityId:$name1, reference:$name2){" + Fulfilment().apply(config).render(it) + "}"
    }

    fun statements(identityId : Uuid?, limit : Int?, offset : Int?, orderBy : OrderByField?, order : Order?, config: Statement.() -> Unit) = add {
        val name1 = it.register("identityId", identityId)
        val name2 = it.register("limit", limit)
        val name3 = it.register("offset", offset)
        val name4 = it.register("orderBy", orderBy)
        val name5 = it.register("order", order)
        "statements(identityId:$name1, limit:$name2, offset:$name3, orderBy:$name4, order:$name5){" + Statement().apply(config).render(it) + "}"
    }

    fun statement(identityId : Uuid?, reference : Uuid?, config: Statement.() -> Unit) = add {
        val name1 = it.register("identityId", identityId)
        val name2 = it.register("reference", reference)
        "statement(identityId:$name1, reference:$name2){" + Statement().apply(config).render(it) + "}"
    }

    fun codes(identityId : Uuid?, limit : Int?, offset : Int?, orderBy : OrderByField?, order : Order?, config: Code.() -> Unit) = add {
        val name1 = it.register("identityId", identityId)
        val name2 = it.register("limit", limit)
        val name3 = it.register("offset", offset)
        val name4 = it.register("orderBy", orderBy)
        val name5 = it.register("order", order)
        "codes(identityId:$name1, limit:$name2, offset:$name3, orderBy:$name4, order:$name5){" + Code().apply(config).render(it) + "}"
    }

    fun code(identityId : Uuid?, reference : Uuid?, config: Code.() -> Unit) = add {
        val name1 = it.register("identityId", identityId)
        val name2 = it.register("reference", reference)
        "code(identityId:$name1, reference:$name2){" + Code().apply(config).render(it) + "}"
    }

    fun behaviours(identityId : Uuid?, limit : Int?, offset : Int?, orderBy : OrderByField?, order : Order?, config: Behaviour.() -> Unit) = add {
        val name1 = it.register("identityId", identityId)
        val name2 = it.register("limit", limit)
        val name3 = it.register("offset", offset)
        val name4 = it.register("orderBy", orderBy)
        val name5 = it.register("order", order)
        "behaviours(identityId:$name1, limit:$name2, offset:$name3, orderBy:$name4, order:$name5){" + Behaviour().apply(config).render(it) + "}"
    }

    fun behaviour(identityId : Uuid?, reference : Uuid?, config: Behaviour.() -> Unit) = add {
        val name1 = it.register("identityId", identityId)
        val name2 = it.register("reference", reference)
        "behaviour(identityId:$name1, reference:$name2){" + Behaviour().apply(config).render(it) + "}"
    }

    fun edges(source : Uuid?, limit : Int?, offset : Int?, orderBy : EdgeOrderByField?, order : Order?, config: Edge.() -> Unit) = add {
        val name1 = it.register("source", source)
        val name2 = it.register("limit", limit)
        val name3 = it.register("offset", offset)
        val name4 = it.register("orderBy", orderBy)
        val name5 = it.register("order", order)
        "edges(source:$name1, limit:$name2, offset:$name3, orderBy:$name4, order:$name5){" + Edge().apply(config).render(it) + "}"
    }

    fun edge(source : Uuid?, target : Uuid?, config: Edge.() -> Unit) = add {
        val name1 = it.register("source", source)
        val name2 = it.register("target", target)
        "edge(source:$name1, target:$name2){" + Edge().apply(config).render(it) + "}"
    }
}

