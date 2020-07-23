package gaia.sdk.api.skill

import gaia.sdk.api.ISensorStream
import org.reactivestreams.Publisher

class SkillRef(private val spec: ISkillSpec, private val processor: ISensorStream) {

    fun evaluate(payload: Any): Publisher<SkillEvaluation> {
        return processor.evaluateSkill(spec, payload)
    }

    fun introspect(): Publisher<SkillIntrospection> {
        return processor.introspectSkill(spec.toURL())
    }

}