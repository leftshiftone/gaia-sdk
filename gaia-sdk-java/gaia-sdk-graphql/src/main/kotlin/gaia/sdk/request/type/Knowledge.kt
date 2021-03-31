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

    fun users(limit : Int?, offset : Int?, orderBy : OrderByField?, order : Order?, config: User.() -> Unit) = add {
        val name1 = it.register("limit", limit)
        val name2 = it.register("offset", offset)
        val name3 = it.register("orderBy", orderBy)
        val name4 = it.register("order", order)
        "users(limit:$name1, offset:$name2, orderBy:$name3, order:$name4){" + User().apply(config).render(it) + "}"
    }

    fun user(userId : Uuid?, config: User.() -> Unit) = add {
        val name1 = it.register("userId", userId)
        "user(userId:$name1){" + User().apply(config).render(it) + "}"
    }

    fun apiKeys(limit : Int?, offset : Int?, orderBy : OrderByField?, order : Order?, config: ApiKey.() -> Unit) = add {
        val name1 = it.register("limit", limit)
        val name2 = it.register("offset", offset)
        val name3 = it.register("orderBy", orderBy)
        val name4 = it.register("order", order)
        "apiKeys(limit:$name1, offset:$name2, orderBy:$name3, order:$name4){" + ApiKey().apply(config).render(it) + "}"
    }

    fun apiKey(apiKeyId : Uuid?, config: ApiKey.() -> Unit) = add {
        val name1 = it.register("apiKeyId", apiKeyId)
        "apiKey(apiKeyId:$name1){" + ApiKey().apply(config).render(it) + "}"
    }

    fun roles(tenantId : Uuid?, limit : Int?, offset : Int?, orderBy : OrderByField?, order : Order?, config: Role.() -> Unit) = add {
        val name1 = it.register("tenantId", tenantId)
        val name2 = it.register("limit", limit)
        val name3 = it.register("offset", offset)
        val name4 = it.register("orderBy", orderBy)
        val name5 = it.register("order", order)
        "roles(tenantId:$name1, limit:$name2, offset:$name3, orderBy:$name4, order:$name5){" + Role().apply(config).render(it) + "}"
    }

    fun role(tenantId : Uuid?, roleId : Uuid?, config: Role.() -> Unit) = add {
        val name1 = it.register("tenantId", tenantId)
        val name2 = it.register("roleId", roleId)
        "role(tenantId:$name1, roleId:$name2){" + Role().apply(config).render(it) + "}"
    }

    fun tenants(limit : Int?, offset : Int?, orderBy : OrderByField?, order : Order?, config: Tenant.() -> Unit) = add {
        val name1 = it.register("limit", limit)
        val name2 = it.register("offset", offset)
        val name3 = it.register("orderBy", orderBy)
        val name4 = it.register("order", order)
        "tenants(limit:$name1, offset:$name2, orderBy:$name3, order:$name4){" + Tenant().apply(config).render(it) + "}"
    }

    fun tenant(tenantId : Uuid?, config: Tenant.() -> Unit) = add {
        val name1 = it.register("tenantId", tenantId)
        "tenant(tenantId:$name1){" + Tenant().apply(config).render(it) + "}"
    }

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

    fun edge(source : Uuid?, edgeId : Uuid?, config: Edge.() -> Unit) = add {
        val name1 = it.register("source", source)
        val name2 = it.register("edgeId", edgeId)
        "edge(source:$name1, edgeId:$name2){" + Edge().apply(config).render(it) + "}"
    }

    fun skills(tenantId : Uuid?, limit : Int?, offset : Int?, orderBy : OrderByField?, order : Order?, config: Skill.() -> Unit) = add {
        val name1 = it.register("tenantId", tenantId)
        val name2 = it.register("limit", limit)
        val name3 = it.register("offset", offset)
        val name4 = it.register("orderBy", orderBy)
        val name5 = it.register("order", order)
        "skills(tenantId:$name1, limit:$name2, offset:$name3, orderBy:$name4, order:$name5){" + Skill().apply(config).render(it) + "}"
    }

    fun skill(tenantId : Uuid?, reference : Uuid?, config: Skill.() -> Unit) = add {
        val name1 = it.register("tenantId", tenantId)
        val name2 = it.register("reference", reference)
        "skill(tenantId:$name1, reference:$name2){" + Skill().apply(config).render(it) + "}"
    }

    fun skillProvisions(tenantId : Uuid?, limit : Int?, offset : Int?, orderBy : OrderByField?, order : Order?, config: SkillProvision.() -> Unit) = add {
        val name1 = it.register("tenantId", tenantId)
        val name2 = it.register("limit", limit)
        val name3 = it.register("offset", offset)
        val name4 = it.register("orderBy", orderBy)
        val name5 = it.register("order", order)
        "skillProvisions(tenantId:$name1, limit:$name2, offset:$name3, orderBy:$name4, order:$name5){" + SkillProvision().apply(config).render(it) + "}"
    }

    fun skillProvision(tenantId : Uuid?, reference : Uuid?, config: SkillProvision.() -> Unit) = add {
        val name1 = it.register("tenantId", tenantId)
        val name2 = it.register("reference", reference)
        "skillProvision(tenantId:$name1, reference:$name2){" + SkillProvision().apply(config).render(it) + "}"
    }
}

