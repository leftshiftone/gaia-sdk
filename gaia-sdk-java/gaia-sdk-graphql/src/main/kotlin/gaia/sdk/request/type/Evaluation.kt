package gaia.sdk.request.type

import gaia.sdk.client.Type
import gaia.sdk.request.intf.*
import gaia.sdk.client.Input
import gaia.sdk.Uuid
import gaia.sdk.ISO8601
import gaia.sdk.Struct
import gaia.sdk.request.input.*
import gaia.sdk.request.enumeration.*

class Evaluation: Type() {

    fun skill(config: SkillEvaluation.() -> Unit) = 
        add { "skill{ " + SkillEvaluation().apply(config).render(it) + "}"}


    fun buildIn(config: BuildInEvaluation.() -> Unit) = 
        add { "buildIn{ " + BuildInEvaluation().apply(config).render(it) + "}"}

}

