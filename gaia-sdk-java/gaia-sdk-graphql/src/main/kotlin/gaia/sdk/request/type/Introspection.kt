package gaia.sdk.request.type

import gaia.sdk.client.Type
import gaia.sdk.request.intf.*
import gaia.sdk.client.Input
import gaia.sdk.Uuid
import gaia.sdk.ISO8601
import gaia.sdk.Struct
import gaia.sdk.request.input.*
import gaia.sdk.request.enumeration.*

class Introspection: Type() {

    /**
     * Introspects the build jobs currently available in the system
     */
    fun buildJobs(tenantId : Uuid, config: SkillBuildJob.() -> Unit) = add {
        val name1 = it.register("tenantId", tenantId)
        "buildJobs(tenantId:$name1){" + SkillBuildJob().apply(config).render(it) + "}"
    }
}

