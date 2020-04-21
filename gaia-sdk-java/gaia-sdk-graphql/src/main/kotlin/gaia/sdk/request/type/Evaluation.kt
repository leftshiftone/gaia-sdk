package gaia.sdk.request.type

import gaia.sdk.api.client.Type
import gaia.sdk.request.intf.*
import gaia.sdk.api.client.Input
import gaia.sdk.api.scalar.*
import gaia.sdk.request.input.*
import gaia.sdk.request.enumeration.*

class Evaluation: Type() {

    fun skill(config: SkillEvaluation.() -> Unit) = 
        add { "skill{ " + SkillEvaluation().apply(config).render(it) + "}"}


    fun buildIn(config: BuildInEvaluation.() -> Unit) = 
        add { "buildIn{ " + BuildInEvaluation().apply(config).render(it) + "}"}

}

