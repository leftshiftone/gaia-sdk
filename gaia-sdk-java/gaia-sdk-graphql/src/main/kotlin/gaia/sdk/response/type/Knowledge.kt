package gaia.sdk.response.type

import gaia.sdk.Uuid
import gaia.sdk.ISO8601
import gaia.sdk.Struct
import gaia.sdk.response.intf.*
import com.fasterxml.jackson.annotation.JsonProperty
import com.fasterxml.jackson.annotation.JsonCreator
import gaia.sdk.request.enumeration.*

data class Knowledge @JsonCreator constructor(
    @JsonProperty("users") val users:List<User>? = null,
    @JsonProperty("user") val user:User? = null,
    @JsonProperty("apiKeys") val apiKeys:List<ApiKey>?,
    @JsonProperty("apiKey") val apiKey:ApiKey?,
    @JsonProperty("roles") val roles:List<Role>? = null,
    @JsonProperty("role") val role:Role? = null,
    @JsonProperty("tenants") val tenants:List<Tenant>? = null,
    @JsonProperty("tenant") val tenant:Tenant? = null,
    @JsonProperty("identities") val identities:List<Identity>? = null,
    @JsonProperty("identity") val identity:Identity? = null,
    @JsonProperty("intents") val intents:List<Intent>? = null,
    @JsonProperty("intent") val intent:Intent? = null,
    @JsonProperty("prompts") val prompts:List<Prompt>? = null,
    @JsonProperty("prompt") val prompt:Prompt? = null,
    @JsonProperty("fulfilments") val fulfilments:List<Fulfilment>? = null,
    @JsonProperty("fulfilment") val fulfilment:Fulfilment? = null,
    @JsonProperty("statements") val statements:List<Statement>? = null,
    @JsonProperty("statement") val statement:Statement? = null,
    @JsonProperty("codes") val codes:List<Code>? = null,
    @JsonProperty("code") val code:Code? = null,
    @JsonProperty("behaviours") val behaviours:List<Behaviour>? = null,
    @JsonProperty("behaviour") val behaviour:Behaviour? = null,
    @JsonProperty("edges") val edges:List<Edge>? = null,
    @JsonProperty("edge") val edge:Edge? = null,
    @JsonProperty("skills") val skills:List<Skill>? = null,
    @JsonProperty("skill") val skill:Skill? = null,
    @JsonProperty("skillProvisions") val skillProvisions:List<SkillProvision>? = null,
    @JsonProperty("skillProvision") val skillProvision:SkillProvision? = null
)