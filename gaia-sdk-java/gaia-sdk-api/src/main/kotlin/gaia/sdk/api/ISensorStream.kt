package gaia.sdk.api

import gaia.sdk.api.skill.ISkillSpec
import gaia.sdk.api.skill.SkillEvaluation
import gaia.sdk.api.skill.SkillIntrospection
import org.reactivestreams.Publisher

interface ISensorStream {
    fun evaluateSkill(spec: ISkillSpec, payload: Any):Publisher<SkillEvaluation>
    fun introspectSkill(url: String):Publisher<SkillIntrospection>
}