package gaia.sdk.request.type

import gaia.sdk.client.Type
import gaia.sdk.request.intf.*
import gaia.sdk.client.Input
import gaia.sdk.Uuid
import gaia.sdk.ISO8601
import gaia.sdk.Struct
import gaia.sdk.request.input.*
import gaia.sdk.request.enumeration.*

class SkillEvaluation: Type() {

    fun syncEval(impulse : String?, config: SyncSkillEvaluation.() -> Unit) = add {
        val name1 = it.register("impulse", impulse)
        "syncEval(impulse:$name1){" + SyncSkillEvaluation().apply(config).render(it) + "}"
    }

    fun asyncEval(impulse : String?, config: AsyncSkillEvaluation.() -> Unit) = add {
        val name1 = it.register("impulse", impulse)
        "asyncEval(impulse:$name1){" + AsyncSkillEvaluation().apply(config).render(it) + "}"
    }
}

