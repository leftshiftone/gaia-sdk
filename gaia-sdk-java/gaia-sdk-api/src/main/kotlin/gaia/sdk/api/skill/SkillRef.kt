package gaia.sdk.api.skill

import gaia.sdk.api.ISensorStream
import gaia.sdk.api.SkillProvisionStatus
import org.reactivestreams.Publisher

class SkillRef(private val spec: ISkillSpec, private val processor: ISensorStream) {

    fun evaluate(payload: Any): Publisher<SkillEvaluation> {
        return processor.evaluateSkill(spec, payload)
    }

    fun introspect(): Publisher<SkillIntrospection> {
        return processor.introspectSkill(spec.toUri())
    }

    fun start(): Publisher<Void> {
        return processor.startSkillProvision(spec.toUri())
    }

    fun stop(): Publisher<Void> {
        return processor.stopSkillProvision(spec.toUri())
    }

    fun status(): Publisher<SkillProvisionStatus> {
        return processor.skillProvisionStatus(spec.toUri())
    }

    fun logs(numberOfLines: Int? = null): Publisher<String> {
        return processor.skillProvisionLogs(spec.toUri(), numberOfLines)
    }

}